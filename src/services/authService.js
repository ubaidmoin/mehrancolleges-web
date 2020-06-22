import jwtDecode from 'jwt-decode';
import axios from 'src/utils/axios';
import { settings as s } from "src/services/Settings";

class AuthService {
  setAxiosInterceptors = ({ onLogout }) => {
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {                    
          this.setSession(null);

          if (onLogout) {
            onLogout();
          }
        }

        return Promise.reject(error);
      }
    );
  };

  handleAuthentication() {
    const accessToken = this.getAccessToken();
    const user = JSON.parse(this.getUser());
    
    if (!accessToken) {
      return;
    }

    if (user) {
      this.setUser(user);
    }

    if (this.isValidToken(accessToken) && accessToken) {
      this.setSession(accessToken);
    } else {
      this.setSession(null);
    }
  }

  loginWithEmailAndPassword = (email, password) => new Promise((resolve, reject) => {    
    fetch(`${s.baseUrl}/api/Users/authenticate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: '*'
      },
      body: JSON.stringify({username: email, password: password})
    })
    .then((response) => response.json())
      .then((response) => {
        if (response) {
          this.setSession(response.token);
          this.setUser(response);
          resolve(response);
        } else {
          reject(false);
        }
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
      // this.setUser({email:'Test', password: 'test'});      
      // resolve(true);
  })

  loginInWithToken = () => new Promise((resolve, reject) => {
    // axios.get('/api/account/me')
    //   .then((response) => {
    //     console.log(response);
    //     if (response) {
    //       resolve(response);
    //     } else {
    //       reject(false);
    //     }
    //   })
    //   .catch((error) => {
    //     reject(error);
    //   });
    let user = JSON.parse(this.getUser());
    if(user) {
      resolve(user);
    } else {
      reject(false);
    }
  })

  logout = () => {
    this.setSession(null);
    this.setUser(null);
  }

  setSession = (accessToken) => {    
    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    } else {
      localStorage.removeItem('accessToken');
      delete axios.defaults.headers.common.Authorization;
    }
  }

  setUser = (user) => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      axios.defaults.headers.common.Authorization = `Bearer ${user}`;
    } else {
      localStorage.removeItem('user');
      delete axios.defaults.headers.common.Authorization;
    }
  }

  getAccessToken = () => localStorage.getItem('accessToken');

  getUser = () => localStorage.getItem('user');

  isValidToken = (accessToken) => {    
    if (!accessToken) {
      return false;
    }

    const decoded = jwtDecode(accessToken);
    const currentTime = Date.now() / 1000;

    return decoded.exp > currentTime;
  }

  isAuthenticated = () => !!this.getAccessToken()
}

const authService = new AuthService();

export default authService;

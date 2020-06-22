import React from "react";
import { Button, Container, Row, Col } from "reactstrap";
import {
  makeStyles
} from '@material-ui/core';
import background from "../../assets/img/theme/bg.jpg";

const useStyles = makeStyles((theme) => ({
  root: {},
  title: {
    fontWeight: 'bold',
    color: '#fff',
    'text-shadow': '1px 1px grey'
  },
  slogan: {
    fontStyle: 'italic',
    color: '#fff',
    'text-shadow': '1px 1px grey'
  },
  background: {
    backgroundImage: `url(${background})`, backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    'filter': 'blur(8px)',
    '-webkit-filter': 'blur(8px)'
  },
  logo: {
    width: 200,
    '-webkit-filter': 'drop-shadow(2px 2px 2px grey)',
  'filter': 'drop-shadow(2px 2px 2px grey)'
  }
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <>
      <div className="position-relative">
        <section className="section section-hero section-shaped">
          <div className="shape shape-style-1 shape-default" style={styles.background}>
            <span className="span-150" />
            <span className="span-50" />
            <span className="span-50" />
            <span className="span-75" />
            <span className="span-100" />
            <span className="span-75" />
            <span className="span-50" />
            <span className="span-100" />
            <span className="span-50" />
            <span className="span-100" />
          </div>
          <Container className="shape-container d-flex align-items-center py-lg">
            <div className="col px-0">
              <Row className="align-items-center justify-content-center">
                <Col className="text-center" lg="6">
                  <img
                    alt="..."
                    src={require("assets/icons/Logo.png")}
                    className={classes.logo}
                  />
                  <h1 className={classes.title}>Mehran Colleges</h1>
                  <p className={classes.slogan}>
                    "On behalf of our great Team, I would like to welcome you to Mehran Colleges. We are always at your service, working with passion and dedication to offer you an academically-comprehensive and personally rewarding education."
                  </p>
                  {/* <div className="btn-wrapper mt-5">
                    <Button
                      className="btn-white btn-icon mb-3 mb-sm-0"
                      color="default"
                      href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                      size="lg"
                    >
                      <span className="btn-inner--icon mr-1">
                        <i className="fa fa-facebook-square" />
                      </span>
                      <span className="btn-inner--text">Facebook</span>
                    </Button>{" "}
                    <Button
                      className="btn-icon mb-3 mb-sm-0"
                      color="github"
                      href="https://github.com/creativetimofficial/argon-design-system-react"
                      size="lg"
                      target="_blank"
                    >
                      <span className="btn-inner--icon mr-1">
                        <i className="fa fa-instagram" />
                      </span>
                      <span className="btn-inner--text">Instagram</span>
                    </Button>
                  </div> */}
                </Col>
              </Row>
            </div>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-white"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </section>
      </div>
    </>
  );
};

const styles = {
  background: {
    backgroundImage: `url(${background})`, backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',    
    'filter': 'blur(4px)',
    '-webkit-filter': 'blur(4px)',    
  }
};

export default Hero;

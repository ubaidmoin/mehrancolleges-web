
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
import {
  makeStyles
} from '@material-ui/core';
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
import { actions } from '../../services/state/Reducer';
import { useStateValue } from '../..//services/state/State';

const useStyles = makeStyles((theme) => ({
  root: {},
  logo: {
    width: 100
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const [collapseClasses, setCollapseClasses] = useState("");
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [state, dispatch] = useStateValue();
  const onLogin = state.onlogin;

  useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }, []);

  const onExiting = () => {
    setCollapseClasses("collapsing-out");
  };

  const onExited = () => {
    setCollapseClasses("");
  };
  return (
    <>
      <header className="header-global">
        <Navbar
          className="navbar-main navbar-transparent headroom"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            <Link to="/">
              <img
                alt="..."
                src={require("assets/icons/Logo.png")}
                className={classes.logo}
              />
            </Link>
            <button className="navbar-toggler" id="navbar_global">
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse
              toggler="#navbar_global"
              navbar
              className={collapseClasses}
              onExiting={onExiting}
              onExited={onExited}
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col  xs="10">
                    <Link to="/">
                      <img
                        alt="..."
                        src={require("assets/icons/Logo.png")}
                        className={classes.logo}
                      />
                      <span className="nav-link-inner--text" style={{ fontWeight: 'bold' }}>Mehran Colleges</span>
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="2">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav>
                    <i className="ni ni-collection d-lg-none mr-1" />
                    <span className="nav-link-inner--text" style={{ fontWeight: 'bold' }}>Mehran Colleges</span>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem to="/login-page" tag={Link}>
                      Login - LMS
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                {!onLogin && <>
                  <NavItem>
                    <NavLink
                      className="nav-link"
                      href="#"
                    >
                      Admissions
                  </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link"
                      href="#"
                    >
                      Faculty
                  </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link"
                      href="#"
                    >
                      Achievements
                  </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link"
                      href="#"
                    >
                      Contact
                  </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link"
                      href="#"
                    >
                      About
                  </NavLink>
                  </NavItem>
                </>}
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="https://www.facebook.com/creativetim"
                    id="tooltip333589074"
                    target="_blank"
                  >
                    <i className="fa fa-facebook-square" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Facebook
                    </span>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip333589074">
                    Like us on Facebook
                  </UncontrolledTooltip>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="https://www.instagram.com/creativetimofficial"
                    id="tooltip356693867"
                    target="_blank"
                  >
                    <i className="fa fa-instagram" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Instagram
                    </span>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip356693867">
                    Follow us on Instagram
                  </UncontrolledTooltip>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#f4f4f4'
  }
};

export default NavBar;


import React, { useState } from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";
import {
  makeStyles
} from '@material-ui/core';

import background from "../../assets/img/theme/loginbg.jpg";

const useStyles = makeStyles((theme) => ({
  root: {},
  logo: {
    width: 100
  },
}));

const Login = () => {
  const classes = useStyles();
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  return (
    <>
      <section className="section section-lg section-shaped">
        <div className="shape shape-style-1 shape-default" style={styles.background} >
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <Container className="py-md">
          <Row className="row-grid justify-content-between align-items-center">
            <Col lg="6">
              <h3 className="display-3 text-white">
                Complete LMS{" "}
                <span className="text-white">by Mehran Colleges</span>
              </h3>
              <p className="lead text-white">
                This LMS has been design by keeping the keypoints in mind about how to educate our students in this time when the whole world is suffering from COVID-19.<br />
                Stay Safe. Stay Home.
              </p>
              <div className="btn-wrapper">
                <Button color="success" to="/login-page" tag={Link}>
                  Login - LMS
                </Button>
              </div>
            </Col>
            <Col className="mb-lg-auto" lg="5">
              <div className="transform-perspective-right" style={{boxShadow: "1px 2px 3px grey"}}>
                <Card className="bg-secondary shadow border-0">
                  <CardHeader className="bg-white pb-2">                    
                    <div className="btn-wrapper text-center">                      
                    <small>LMS by Mehran Colleges</small>
                      <img
                        alt="..."
                        src={require("assets/icons/Logo.png")}
                        className={classes.logo}
                      />
                      {/* <Button
                        className="btn-neutral btn-icon"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <span className="btn-inner--icon mr-1">
                          <img
                            alt="..."
                            src={require("assets/img/icons/common/github.svg")}
                          />
                        </span>
                        <span className="btn-inner--text">Github</span>
                      </Button>
                      <Button
                        className="btn-neutral btn-icon"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <span className="btn-inner--icon mr-1">
                          <img
                            alt="..."
                            src={require("assets/img/icons/common/google.svg")}
                          />
                        </span>
                        <span className="btn-inner--text">Google</span>
                      </Button> */}
                    </div>
                  </CardHeader>
                  <CardBody className="px-lg-3 py-lg-3">
                    <div className="text-center text-muted mb-4">
                      <small>Or sign in with credentials</small>
                    </div>
                    <Form role="form">
                      <FormGroup
                        className={classnames("mb-3", {
                          focused: emailFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="ID"
                            type="email"
                            onFocus={e =>
                              setEmailFocused(true)
                            }
                            onBlur={e =>
                              setEmailFocused(false)
                            }
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: passwordFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-lock-circle-open" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Password"
                            type="password"
                            autoComplete="off"
                            onFocus={e =>
                              setPasswordFocused(true)
                            }
                            onBlur={e =>
                              setPasswordFocused(true)
                            }
                          />
                        </InputGroup>
                      </FormGroup>
                      <Row className="mt-3">
                        <Col xs="6">
                          <a
                            className="text-dark"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <small>Forgot password?</small>
                          </a>
                        </Col>
                      </Row>
                      <div className="text-center">
                        <Button
                          className="my-4"
                          color="primary"
                          type="button"
                        >
                          Sign in
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
        {/* SVG separator */}
        <div className="separator separator-bottom separator-skew">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon className="fill-white" points="2560 0 2560 100 0 100" />
          </svg>
        </div>
      </section>
    </>
  );
}

const styles = {
  background: {
    backgroundImage: `url(${background})`, backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    'filter': 'blur(4px)',
    '-webkit-filter': 'blur(4px)'
  }
};

export default Login;


import React, { useEffect } from "react";

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
// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import Footer from "components/Footers/Footer.js";
import { actions } from '../../services/state/Reducer';
import { useStateValue } from '../..//services/state/State';

const useStyles = makeStyles((theme) => ({
  root: {},
  logo: {
    width: 100
  },
}));

const Login = () => {
  const classes = useStyles();
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  useEffect(() => {
    dispatch({ type: actions.SET_ON_LOGIN, payload: true });

    return function cleanup() {
      dispatch({ type: actions.SET_ON_LOGIN, payload: false });
    };
  }, []);

  return (
    <>
      {/* <DemoNavbar /> */}
      <main>
        {/* <section className="section section-shaped section-lg">
          <div className="shape shape-style-1 bg-gradient-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div> */}
          <Container className="pt-lg-7">
            <Row className="justify-content-center">
              <Col lg="5">
                <Card className="bg-secondary shadow border-0">
                  <CardHeader className="bg-white pb-2">
                    <div className="btn-wrapper text-center">
                      <small>LOGIN - LMS</small>
                      <img
                        alt="..."
                        src={require("assets/icons/Logo.png")}
                        className={classes.logo}
                      />
                    </div>
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-4">
                      <small>Or sign in with credentials</small>
                    </div>
                    <Form role="form">
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="ID" type="email" />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
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
              </Col>
            </Row>
          </Container>
        {/* </section> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default Login;

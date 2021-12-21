import React, { Component } from 'react';
import {Button,Form,Container,Row,Col,Card} from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPasswordValid: false,
      passwordEntered: false
    }
  }
  passwordChangeHandler = (event) => {
    const password = event.target.value;
    this.setState({
      passwordEntered: true
    });

    if (password.length < 5 ) {
      this.setState({
        isPasswordValid: false
      });
    } else {
      this.setState({
        isPasswordValid: true
      });
    }
  }

  render() {
    let passwordBoxStyle = null;
    if (this.state.passwordEntered && !this.state.isPasswordValid) {
      passwordBoxStyle = {
        boxShadow: '0 0 2px 1px rgba(255, 0, 0, 1)',
      };
    }

    return (
      <Container className="Login">
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <Card className="login-form-container">
            <h1> Login</h1>

              <Form>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label column sm="2">
                    Email
                  </Form.Label>
                  <Col>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                  <Form.Label column sm="2">
                    Password
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="password" placeholder="Enter your password" className="password-box" style={passwordBoxStyle} onChange={this.passwordChangeHandler} />
                  </Col>
                </Form.Group>
                <Button variant="primary">Login</Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
import { FC } from 'react';
import Form from 'react-bootstrap/esm/Form';
import Button from 'react-bootstrap/esm/Button';
//interface LoginFormProps {}

const LoginForm: FC = () => {

    return (
        <Form className="width-form" >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="label">Login</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="label">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
               
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
};

export default LoginForm;

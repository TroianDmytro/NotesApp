import { FC } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/esm/Form';

const RegistrForm: FC = () => (
    <Form className="width-form">
        <Form.Group className="mb-2" controlId="formGroupEmail">
            <Form.Label className="label">Login</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formGroupEmail">
            <Form.Label className="label">Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formGroupPassword">
            <Form.Label className="label">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            <Form.Text className="label-text">
                The password must consist of uppercase and lowercase letters, as well as at least one number and a symbol.
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-2" controlId="formGroupPassword">
            <Form.Label className="label">Repeat password</Form.Label>
            <Form.Control type="password" placeholder="Repeat password" />
        </Form.Group>
        <Button variant="primary" type="submit"> 
        Enter
        </Button>
    </Form>
);

export default RegistrForm;

import { FC, useState } from 'react';
import Form from 'react-bootstrap/esm/Form';
import Button from 'react-bootstrap/esm/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const LoginForm: FC = () => {
    const [login, setLogin] = useState<string>('');
    const [pass, setPass] = useState<string>('');
    const [status, setStatus] = useState("");

    const navigate = useNavigate();

    const handleChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(event.target.value);
    }
    
    const handleChangePass = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPass(event.target.value);
    }

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const loginPayload = { Username: login, Password: pass };
        try {
            axios.post("https://localhost:7299/api/Authenticate/login", loginPayload).then((response) => {
                console.log(response);
                localStorage.setItem("token", response.data.token);
            }).catch((e) => console.log(e));
        }
        catch (e) {
            console.log(e);
            setLogin("");
            setPass("");
            setStatus("Wrong login or password.");
        }

        setStatus("You autoritheit.");
        navigate('/notes');
    }

    return (
        <>
            <div className="status-note-style">{status}</div>
            <Form className="width-form" onSubmit={handleOnSubmit} >
                <Form.Group className="mb-3" controlId="formBasicLogin">
                    <Form.Label className="label">Login</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter login..."
                        value={login}
                        onChange={handleChangeLogin}
                    />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="label">Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={pass}
                        onChange={handleChangePass}
                    />

                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
        
    )
};

export default LoginForm;

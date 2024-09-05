import { FC } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/esm/Form';


const AddNote: FC = () => (
    <Form className="width-form">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Title..." />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Description...">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit" >
            Save
        </Button>

    </Form>
);

export default AddNote;

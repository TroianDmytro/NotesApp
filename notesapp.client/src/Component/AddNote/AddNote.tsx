import { FC, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/esm/Form';


const AddNote: FC = () => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [statusSave, setStatusSave] = useState<string>("");

    const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStatusSave("");
        setTitle(event.target.value);
    }

    const handleDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStatusSave("");
        setDescription(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (title && description) {
            setStatusSave("Not save note");

        }

        //https://localhost:7299/Notes



        setStatusSave("Save note.");

    }


    return (
        <>
            <div id="status-note" className="status-note-style">{statusSave}</div>
            <Form className="width-form" onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Title..."
                        value={title}
                        onChange={handleTitle}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Description...">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea" rows={3}
                        value={description}
                        onChange={handleDescription}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" >
                    Save
                </Button>

            </Form>
        </>
}
   
);

export default AddNote;

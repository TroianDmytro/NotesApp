import { FC, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/esm/Form';
import "./AddNoteStyle.css";
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

interface AddNoteProps {
    onAddNote: () => void
}


const AddNote: FC<AddNoteProps> = ({ onAddNote }) => {
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
        
        if (title==="" || description==="") {
            setStatusSave("Not save note");
            return;
        }

        const note = { NoteId: "", Title: title, Description: description, UserId: "" };
        note.NoteId = uuidv4();
        console.log(note.NoteId);

        const token = localStorage.getItem('token');

        if (token) {
            try {
                const base64Url = token.split('.')[1]; // Получаем вторую часть токена (payload)
                const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); // Преобразование URL безопасной строки Base64
                const jsonPayload = decodeURIComponent(
                    atob(base64)
                        .split('')
                        .map(function (c) {
                            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                        })
                        .join('')
                );

                const decodedToken = JSON.parse(jsonPayload); // Парсим JSON
                console.log('Decoded Token:', decodedToken);

                const userId = decodedToken.sub; // Ищем userId или sub
                note.UserId = userId;
                console.log('User ID:', userId);
            } catch (error) {
                console.error('Error decoding token:', error);
            }
        }

        try {
            axios.post("https://localhost:7299/Notes/", note, {
                headers: {
                    'Authorization': `Bearer ${token}` // Добавляем токен в заголовок
                }
            }).then((response) => {
                console.log(response);
            }).catch((e) => console.log(e));
            // Перезагружаем компонент
            setTimeout(onAddNote, 1000);
            console.log("setTimeout(onAddNote, 1000);");
            
        }
        catch (e) {
            console.log(e);
        }

        setTitle('');
        setDescription('');
       
        setStatusSave("Save note.");
       
    }


    return (
        <>
            <div className="status-note-style">{statusSave}</div>
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

    )
};

export default AddNote;

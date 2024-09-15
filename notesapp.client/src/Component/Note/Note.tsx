/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/esm/Card';
import "./NoteStyles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';

interface NoteProps {
    id: string,
    dateNotes: string,
    title: string,
    description:string
}

const Note: FC<NoteProps> = ({id, dateNotes, title, description }) => {

    const handleClickDelete = (id: string) =>
    {
        const token = localStorage.getItem('token');

        try {
            const result = axios.delete(`https://localhost:7299/Notes/${id}`, {
                headers: {
                    'Authorizaction': `Bearer ${token}`, // Добавляем токен в заголовок
                    'Content-Type': 'application/json'
                }
            }).then(response => response.data);
            console.log("result", result);
            setTimeout(() => window.location.reload(), 1000);
        }
        catch(err) {
            console.log("Error into Note.",err);
        }
    }

    return (
        <Card className="note">
            <Card.Header>{dateNotes}</Card.Header>
            <Card.Body>
                <Card.Title>{title}
                    <Button className="position-absolute bottom-0 end-0 m-3" variant="danger" onClick={()=>handleClickDelete(id)} ><FontAwesomeIcon icon={faTrash} /> Delete</Button>
                </Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="warning"><FontAwesomeIcon icon={faPen} /> Update</Button>
            </Card.Body>
        </Card>
    );
}

export default Note;

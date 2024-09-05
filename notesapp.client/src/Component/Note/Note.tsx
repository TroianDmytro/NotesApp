import  { FC } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/esm/Card';
import "./NoteStyles.css"


const Note: FC = () => (
    <Card className="note">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
                With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="danger">Go somewhere</Button>
        </Card.Body>
    </Card>
);

export default Note;

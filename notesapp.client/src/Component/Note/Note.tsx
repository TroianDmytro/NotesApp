import { FC } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/esm/Card';
import "./NoteStyles.css"

interface NoteProps {
    title: string,
    description:string
}

const Note: FC<NoteProps> = ({ title, description }) => (
    <Card className="note">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
            <Card.Title>{ title}</Card.Title>
            <Card.Text>
                {description}
            </Card.Text>
            <Button variant="danger">Go somewhere</Button>
        </Card.Body>
    </Card>
);

export default Note;

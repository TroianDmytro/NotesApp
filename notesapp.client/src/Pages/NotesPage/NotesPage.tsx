import { FC } from 'react';
import { NotesPageWrapper } from './NotesPage.styled';
import AddNote from '../../Component/AddNote/AddNote';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Note from '../../Component/Note/Note';


const NotesPage: FC = () => (localStorage.getItem('token') &&
    <NotesPageWrapper>
        <Container>
            <Row>
                <Col xs={6} md={4}>
                    <AddNote />
                </Col>
                <Col xs={12} md={8} >
                    <Note/>
                </Col>
            </Row>

        </Container>
 </NotesPageWrapper>
);

export default NotesPage;

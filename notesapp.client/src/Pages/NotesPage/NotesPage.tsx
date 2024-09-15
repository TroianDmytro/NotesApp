import { FC, useEffect, useState } from 'react';
import { NotesPageWrapper } from './NotesPage.styled';
import AddNote from '../../Component/AddNote/AddNote';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import NotesList from '../../Component/NotesList/NotesList';


const NotesPage: FC = () => {
    const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
    const [reloadNotes, setReloadNotes] = useState(false);

    const triggerReloadNotes = () => {
        setReloadNotes(!reloadNotes); // ����������� ��������, ����� ������� ��������� ������ � ���������� ������
    };

    useEffect(() => {
        // ������� ��� �������� � ��������� ������
        const checkToken = () => {
            const storedToken = localStorage.getItem('token');
            if (storedToken) {
                setToken(storedToken);
            }
        };

        // ��������� ����� ��� ������ �������
        checkToken();

        // ������������� �������� ��� ������������� �������� ������
        const interval = setInterval(() => {
            checkToken();
        }, 1000); // ��������� ������ �������

        // ������� ��������� ��� ��������������� ����������
        return () => clearInterval(interval);
    }, []); // ������ ������ ������������, ����� `useEffect` �������� ������ ���� ��� ��� ������������

    // ���� �������� � �������
    useEffect(() => {
        if (token) {
            console.log('Token has been set:', token);
            // ��������, �� ������ ������ ������� � ������� ��� �������� ���������
        }
    }, [token]); // ���� `useEffect` ���������, ����� `token` ���������
    const tokenExist = token !== null;
    console.log("tokenExist", tokenExist);

    return <>
        {tokenExist &&
            <NotesPageWrapper>
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <AddNote onAddNote={triggerReloadNotes} />
                        </Col>
                        <Col xs={12} md={8} >
                            <NotesList reload={reloadNotes} />
                        </Col>
                    </Row>

                </Container>
            </NotesPageWrapper>
        }
    </>;
}

export default NotesPage;

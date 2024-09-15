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
        setReloadNotes(!reloadNotes); // »нвертируем значение, чтобы вызвать повторный рендер и обновление списка
    };

    useEffect(() => {
        // ‘ункци€ дл€ проверки и установки токена
        const checkToken = () => {
            const storedToken = localStorage.getItem('token');
            if (storedToken) {
                setToken(storedToken);
            }
        };

        // ѕровер€ем токен при первом рендере
        checkToken();

        // ”станавливаем интервал дл€ периодической проверки токена
        const interval = setInterval(() => {
            checkToken();
        }, 1000); // ѕровер€ем каждую секунду

        // ќчистка интервала при размонтировании компонента
        return () => clearInterval(interval);
    }, []); // ѕустой массив зависимостей, чтобы `useEffect` сработал только один раз при монтировании

    // ¬аши действи€ с токеном
    useEffect(() => {
        if (token) {
            console.log('Token has been set:', token);
            // Ќапример, вы можете делать запросы с токеном или измен€ть состо€ние
        }
    }, [token]); // Ётот `useEffect` сработает, когда `token` изменитс€
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

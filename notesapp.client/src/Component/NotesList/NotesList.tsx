import { FC, useEffect, useState, } from 'react';
import { NotesListWrapper } from './NotesList.styled';
import axios from 'axios';
import Note from '../Note/Note';
import { format } from 'date-fns';
interface NotesListProps {
    reload: boolean
}

const NotesList: FC<NotesListProps> = ({ reload }) => {
    const [listNote, setListNote] = useState([]);

    useEffect(() => {
        const handleLoad = async () => {
            const token = localStorage.getItem('token');
            console.log("handleLoad");

            try {
                // Асинхронный запрос с использованием await
                const response = await axios.get("https://localhost:7299/Notes", {
                    headers: {
                        'Authorization': `Bearer ${token}` // Добавляем токен в заголовок
                    }
                });

                // Логируем ответ
                console.log("response.data", response.data);

                // Записываем данные в массив
                if (response && response.data) {
                    setListNote(response.data); // Предполагается, что response.data содержит массив заметок
                }
            } catch (e) {
                console.log(e);
            }
        }

        handleLoad();
    }, [reload]);

    function dateString( date: Date ) {
        const currentDate: Date = date;
        const formattedDate: string = format(currentDate, 'dd/MM/yyyy HH:mm');
        console.log("formDate", formattedDate);
        return formattedDate;
    }
    

    return (
        <NotesListWrapper >
            {listNote?.map(function (item: { noteId: string, createdAt: Date; title: string; description: string; }, i) {
                return <Note key={i} id={item.noteId} dateNotes={dateString(item.createdAt)} title={item.title} description={item.description}></Note>;
            })}
        </NotesListWrapper>
    );
}

export default NotesList;

import { FC, useEffect, useState, } from 'react';
import { NotesListWrapper } from './NotesList.styled';
import axios from 'axios';
import Note from '../Note/Note';

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
                // ����������� ������ � �������������� await
                const response = await axios.get("https://localhost:7299/Notes", {
                    headers: {
                        'Authorization': `Bearer ${token}` // ��������� ����� � ���������
                    }
                });

                // �������� �����
                console.log("response.data", response.data);

                // ���������� ������ � ������
                if (response && response.data) {
                    setListNote(response.data); // ��������������, ��� response.data �������� ������ �������
                }
            } catch (e) {
                console.log(e);
            }
        }

        handleLoad();
    }, [reload]);

    return (
        <NotesListWrapper >
            {listNote?.map(function (item: { title: string; description: string; }, i) {
                return <Note key={i} title={item.title} description={item.description}></Note>;
            })}
        </NotesListWrapper>
    );
}

export default NotesList;

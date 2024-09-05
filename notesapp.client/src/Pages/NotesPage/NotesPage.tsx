import { FC } from 'react';
import { NotesPageWrapper } from './NotesPage.styled';
import AddNote from '../../Component/AddNote/AddNote';


const NotesPage: FC = () => (
    <NotesPageWrapper>
        <AddNote/>
 </NotesPageWrapper>
);

export default NotesPage;

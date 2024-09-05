import React, { FC } from 'react';
import { NoteWrapper } from './Note.styled';

interface NoteProps {}

const Note: FC<NoteProps> = () => (
 <NoteWrapper>
    Note Component
 </NoteWrapper>
);

export default Note;

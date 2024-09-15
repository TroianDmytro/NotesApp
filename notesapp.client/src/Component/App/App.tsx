import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import './App.css';
import LoginForm from '../../Pages/LoginForm/LoginForm';
import RegistrForm from '../../Pages/RegistrForm/RegistrForm';
import NotesPage from '../../Pages/NotesPage/NotesPage';
import HomePage from '../../Pages/HomePage/HomePage';
import { useState } from 'react';

// Компоненты страниц
const App: React.FC = () => {
    const [reloadNavBar, setReloadNavBar] = useState(false);

    const trigerReloadNavBar = () => {
        setReloadNavBar(!reloadNavBar);
    }

    return (
        <div>
            <Router >
                <NavBar reload={reloadNavBar} />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/login" element={<LoginForm onReloadNavBar={trigerReloadNavBar} />} />
                    <Route path="/registr" element={<RegistrForm />} />
                    <Route path="/notes" element={<NotesPage />} />
                </Routes>
            </Router>
        </div>
       
    );
}


export default App;
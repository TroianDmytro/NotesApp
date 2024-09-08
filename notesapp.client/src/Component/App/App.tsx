import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import './App.css';
import LoginForm from '../../Pages/LoginForm/LoginForm';
import RegistrForm from '../../Pages/RegistrForm/RegistrForm';
import NotesPage from '../../Pages/NotesPage/NotesPage';
import HomePage from '../../Pages/HomePage/HomePage';

// Компоненты страниц
const App: React.FC = () => {
    return (
        <div>
            <Router >
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/registr" element={<RegistrForm />} />
                    <Route path="/notes" element={<NotesPage />} />
                </Routes>
            </Router>
        </div>
       
    );
}


export default App;
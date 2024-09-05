import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import './App.css';
import LoginForm from '../../Pages/LoginForm/LoginForm';
import RegistrForm from '../../Pages/RegistrForm/RegistrForm';
import NotesPage from '../../Pages/NotesPage/NotesPage';

// Компоненты страниц
const Home = () => <h2>Home Page</h2>;

const App: React.FC = () => {
    return (
        <div>
            <Router >
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/registr" element={<RegistrForm />} />
                    <Route path="/notes" element={<NotesPage />} />
                </Routes>
            </Router>
        </div>
       
    );
}


export default App;
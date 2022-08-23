import './App.css';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Sidebar } from './components/Sidebar/Sidebar';

import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Header />
            <Sidebar />
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
        </div>
    );
}

export default App;

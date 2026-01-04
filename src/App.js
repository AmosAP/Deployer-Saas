import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './componentes/Login';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = () => setIsAuthenticated(true);

    return(
        <Router>
            <Routes>
                {!isAuthenticated && (
                    <Route path="/" element={<Login onLogin={handleLogin} />} />
                )}
            </Routes>
        </Router>
    );
};

export default App;
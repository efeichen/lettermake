import React, { useState } from 'react';
import Home from 'views/Home';
import Reader from 'views/Reader';
import About from 'views/About';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const App = () => {
    const [letter, setLetter] = useState({
        author: '',
        email: '',
        address: '',
        portfolio: '',
        content: '',
        edu: [],
        exp: [],
        projects: [],
        skills: []
    });

    return (
        <Router>
            <Route exact={true} path='/' render={() => (
                <Home setContent={setLetter}/>
            )}/>

            <Route exact={true} path='/reader' render={() => (
                <Reader content={letter} />
            )}/>
            <Route exact={true} path='/about' component={About} />
        </Router>
    );
}

export default App;
import React from 'react';
import './App.scss';

import SearchInput from 'components/SearchInput';

function App() {
    return (
        <div className="app">
            <header className="app__header">Awesome Search</header>
            <div className="app__container">
                Please add search box component here
            </div>
            <SearchInput />
        </div>
    );
}

export default App;

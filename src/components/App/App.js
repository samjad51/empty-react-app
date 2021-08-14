import React from 'react';
import './App.scss';

import SearchInput from 'containers/SearchInput';

function App() {
    return (
        <div className="app">
            <header className="app__header">Awesome Search</header>
            <div className="app__container">
                Please add search box component here
            </div>
            <SearchInput className="search" />
        </div>
    );
}

export default App;

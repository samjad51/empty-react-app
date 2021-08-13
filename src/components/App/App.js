import React from 'react';
import SearchInput from 'containers/SearchInput';
import ResultsList from 'containers/ResultsList';
import './App.scss';

function App() {
    return (
        <div className="app">
            <header className="app__header">Awesome Search</header>
            <div className="app__container">
                <SearchInput />
                <ResultsList />
            </div>
        </div>
    );
}

export default App;

import React from 'react';
import Rform from './components/form/Rform';

const App = () => {
    const isProduction = process.env.NODE_ENV === 'production';

    if (isProduction) {
        window.console.log = () => {
        };
    }

    return (
        <div>
            <Rform/>
        </div>
    );
};

export default App;

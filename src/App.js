import React from 'react';
import EmailVerifyForm from './components/email-verify/EmailVerifyForm';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Rform from './components/form/Rform';

const App = () => {
    const isProduction = process.env.NODE_ENV === 'production';

    if (isProduction) {
        window.console.log = () => {
        };
    }

    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <EmailVerifyForm />
                    </Route>
                    <Route exact path="/details">
                        <Rform />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;

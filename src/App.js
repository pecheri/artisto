import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import DashBoard from './pages/DashBoard';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Search from './pages/Search';
import NotFound from './pages/NotFound';

function App() {
    return (
        <Router>
            <Switch>
                <Route path={ROUTES.LOGIN} component={Login} />
                <Route path={ROUTES.SIGN_UP} component={SignUp} />
                <Route path={ROUTES.DASHBOARD} component={DashBoard} />
                <Route path={ROUTES.PROFILE} component={Profile} />
                <Route path={ROUTES.PROFILE_EDIT} component={ProfileEdit} />
                <Route path={ROUTES.SEARCH} component={Search} />
                <Route path={ROUTES.NOT_FOUND} component={NotFound} />
            </Switch>
        </Router>
    );
}

export default App;

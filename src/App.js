import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import UserContext from './context/user';
import useAuthListener from './hooks/useAuthListener';
import ProtectedRoute from './helpers/ProtectedRoute';
import IsUserLoggedIn from './helpers/isUserLoggedIn';

const Login = lazy(() => import('./pages/Login'));
const SignUp = lazy(() => import('./pages/SignUp'));
const DashBoard = lazy(() => import('./pages/DashBoard'));
const Profile = lazy(() => import('./pages/Profile'));
const ProfileEdit = lazy(() => import('./pages/ProfileEdit'));
const Search = lazy(() => import('./pages/Search'));
const Messages = lazy(() => import('./pages/Messages'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
    const { user } = useAuthListener();

    return (
        <UserContext.Provider value={{ user }}>
            <Router>
                <Suspense fallback={<p className="text-gray-light text-center w-screen text-xl">Loading...</p>}>
                    <Switch>
                        <IsUserLoggedIn user={user} loggedInPath={ROUTES.DASHBOARD} path={ROUTES.LOGIN}>
                            <Route path={ROUTES.LOGIN} component={Login} />
                        </IsUserLoggedIn>
                        <IsUserLoggedIn user={user} loggedInPath={ROUTES.DASHBOARD} path={ROUTES.SIGN_UP}>
                            <Route path={ROUTES.SIGN_UP} component={SignUp} />
                        </IsUserLoggedIn>
                        <ProtectedRoute user={user} path={ROUTES.DASHBOARD} exact>
                            <DashBoard />
                        </ProtectedRoute>
                        <Route path={ROUTES.PROFILE} component={Profile} />
                        <Route path={ROUTES.PROFILE_EDIT} component={ProfileEdit} />
                        <Route path={ROUTES.SEARCH} component={Search} />
                        <Route path={ROUTES.MESSAGES} component={Messages} />
                        <Route component={NotFound} />
                    </Switch>
                </Suspense>
            </Router>
        </UserContext.Provider>
    );
}

export default App;

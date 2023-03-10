import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import './bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import PrivateRoute from './components/PrivateRoute';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import LandingPage from './pages/Landing';
import LearnMorePage from './pages/Learn More/LearnMorePage';
import LearnMoreCharacters from './pages/Learn More/LearnMoreCharacter';
import LearnMoreCampaigns from './pages/Learn More/LearnMoreCampaigns';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import UserState from './context/userState';
import UserPage from './pages/User/User';
import UserCharactersPage from './pages/User/Characters';
import UserCampaignsPage from './pages/User/Campaigns';
import UserAccountPage from './pages/User/Account';
import AccountInfoPage from './pages/User/AccountInfo';
import UserEditPage from './pages/User/Edit/User';
import UserEditPassword from './pages/User/Edit/Password';

export default function App() {
  return (
    <>
      <UserState>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />}>
              <Route index element={<LandingPage />} />
              <Route path='learn-more' element={<LearnMorePage />}>
                <Route path='characters' element={<LearnMoreCharacters />} />
                <Route path='campaigns' element={<LearnMoreCampaigns />} />
              </Route>
              <Route path='signup' element={<SignUpPage />} />
              <Route path='signin' element={<SignInPage />} />
              <Route
                path='user'
                element={
                  <PrivateRoute>
                    <UserPage />
                  </PrivateRoute>
                }
              >
                <Route
                  index
                  element={
                    <PrivateRoute>
                      <UserAccountPage />
                    </PrivateRoute>
                  }
                />

                <Route
                  path='account-info'
                  element={
                    <PrivateRoute>
                      <AccountInfoPage />
                    </PrivateRoute>
                  }
                />

                <Route
                  path='edit-user'
                  element={
                    <PrivateRoute>
                      <UserEditPage />
                    </PrivateRoute>
                  }
                />

                <Route
                  path='edit-password'
                  element={
                    <PrivateRoute>
                      <UserEditPassword />
                    </PrivateRoute>
                  }
                />

                <Route
                  path='characters'
                  element={
                    <PrivateRoute>
                      <UserCharactersPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path='campaigns'
                  element={
                    <PrivateRoute>
                      <UserCampaignsPage />
                    </PrivateRoute>
                  }
                />
              </Route>

              <Route path='*' element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserState>
    </>
  );
}

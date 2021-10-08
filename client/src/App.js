import { useState, useEffect } from 'react'
import Layout from './layouts/Layout';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';
import { Switch, Route, useHistory} from 'react-router-dom';
import MainContainer from './containers/MainContainer';
import './App.css';

import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from './services/auth';

import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push('/');
  };



  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  };



  return (
    <div className="App">
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
        <Route path='/login'>
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path='/register'>
            <Register handleRegister={handleRegister} />
          </Route>
          <Route className='homepage' path='/'>
            <MainContainer />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;

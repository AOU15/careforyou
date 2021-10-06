import { useState, useEffect } from 'react'
import Layout from './layouts/Layout';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';
import { Switch, Route, useHistory } from 'react-router-dom';
import MainContainer from './containers/MainContainer';

import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from './services/auth';

import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setUser(userData);
    history.push('/');
  };

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setUser(userData);
    history.push('/');
  };



  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  };



  return (
    <div className="App">
      <Layout user={user} handleLogout={handleLogout}>
        <Switch>
        <Route path='/login'>
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path='/register'>
            <Register handleRegister={handleRegister} />
          </Route>
          <Route path='/'>
            <MainContainer />
          </Route>
  
        </Switch>
      </Layout>
    </div>
  );
}

export default App;

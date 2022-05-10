
import {Routes, Route} from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Login from './routes/autentication/login.component';
import Registration from './routes/registration/registration.component';

const App = () => {
  return (
    <Routes>
      <Route exact path= '/' element={<Navigation />}>
        <Route exact path ='/' index element={<Home />} />
        <Route exact path ='/Login'  element={<Login />} />
        <Route exact path ='/Registration'  element={<Registration />} />
        </Route>
   </Routes>
  );
};

export default App;

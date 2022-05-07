
import {Routes, Route} from 'react-router-dom';

import Home from './routes/home/home.component';
import Login from './routes/autentication/login.component';
import Registration from './routes/registration/registration.component';

const App = () => {
  return (
    <Routes>
      
      <Route exact path ='/Home' index element={<Home />} />
      <Route exact path ='/Login' index element={<Login />} />
      <Route exact path ='/Registration' index element={<Registration />} />
    
   </Routes>
  );
};

export default App;

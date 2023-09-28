import './App.css';
import { Route, Routes } from "react-router"
import Home from './Components/Home';
import Tenant from './Components/Tenant';
import Management from './Components/Management';
import Manager from './Components/Manager';
import Login from './Log/Login';
function App() {
  return (
    <Routes>
    <Route exact path='/' Component={Home} />
    <Route exact path='/Tenant' Component={Tenant} />
    <Route exact path='/Management' Component={Management} />
    <Route exact path='/Manager' Component={Manager} />
    <Route exact path='/Login' Component={Login} />
    </Routes>
  );
}

export default App;

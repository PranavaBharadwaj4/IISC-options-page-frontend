import './css/style.css'
import {Routes, Route} from 'react-router-dom'
import Options from './components/Options';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';



function App() {
  return (
    <>
    <Routes>
    <Route path ='/' element={ <Home/>}/>
    <Route path ='/options/' element={ <Options/>}/>
    <Route path ='/login/' element={ <Login/>}/>
    <Route path ='/register/' element={ <Register/>}/>

  </Routes>
    </>
  );
}

export default App;

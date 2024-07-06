import logo from './logo.svg';
import './App.css';
import Sidebar from './component/Sidebar';
import{Route,Routes,BrowserRouter}from "react-router-dom"
import Home from"./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route  path='/' exct element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    <Sidebar/>

    </div>
  );
}

export default App;

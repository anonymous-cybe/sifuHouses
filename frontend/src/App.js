import './App.css';
import { BrowserRouter, Route } from "react-router-dom";

import Homepage from './Homepage';
import Header from './components/header/Header';
import Createproperty from './pages/create/CreateProperty';




function App() {
  return (

    <div>




      <BrowserRouter>
        <Route path="/" exact component={Homepage} />
        <Route path="/property" component={Createproperty} />



      </BrowserRouter>
    </div>
  )
}

export default App;



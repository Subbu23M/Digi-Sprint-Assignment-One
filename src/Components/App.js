import React,{useState} from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import '../Styling/Main.scss';

import SideBar from './SideBar';

import Home from './Home';

import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';

import NavBar from './NavBar';

const App = (props) => {
  // State variable and function
  const [formData,setFormData] = useState([]);

  const handleSendData = (data) => {
    // Invoke State function
    setFormData([...formData,data]);
  }

  console.log(props.location);

  return (
    <>
      {/* Child Component Instances */}

      <NavBar/>

      {/* Conditional Rendering - Simple...if */}
      {
        (props.location.pathname === '/home') 
                                              ? 
                                                <Home/> 
                                              : <> 
                                                  <SideBar
                                                    formData={handleSendData}
                                                  /> 
                                                </>
      }
    </>
  )
}

export default withRouter(App);
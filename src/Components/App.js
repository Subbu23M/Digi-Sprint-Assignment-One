import React,{useState} from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import '../Styling/Main.scss';

import SideBar from './SideBar';

import Home from './Home';

import { withRouter } from 'react-router-dom';

import NavBar from './NavBar';

const App = (props) => {
  // State variable and function
  const [formData,setFormData] = useState([]);
  console.log('formData',formData);

  // Event Handler as callback function to update state from child component.
  const handleSendData = (data) => {
    // Invoke State function
    setFormData([...formData,data]);

    // console.log('message',data);
  }

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
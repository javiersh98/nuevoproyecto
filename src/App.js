import react from 'react';
import {route, routes} from "react-router-dom";
import Login from './componentes/login'

function app(){
  return(
    <div className='app'>
      <route>
        <route path="/" element={<Login/>}></route>
      </route>
    </div>
  )
}

export default app;
import React, { Fragment, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import SearchBar from './Component/SearchBar';
import UserInfo from './Pages/UserInfo';

//hiteshchoudhary
//tanaypratap
const App = () => {
  const [username,setUser] = useState("")
  return (
    <Fragment>
      <SearchBar username={username} changed={(event)=>setUser(event.target.value)}/>
      <hr/>
      <UserInfo username={username}/>
    </Fragment>

  );
}

export default App;

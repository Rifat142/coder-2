import React, { useEffect, useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import UserTable from './UserTable';

const UserData = () => {
    const [users , setUser] = useState([]);

    useEffect(()=>{
        fetch(`https://12-server-psi.vercel.app/user`)
        .then(res=>res.json())
        .then(data=> setUser(data))
   
       } ,[])
    return (
        <div className='flex'>
            <Dashboard></Dashboard>
            <div>
            <p className='text-6xl text-center'>users</p>
            <div>
            {
              users.map(user=> <UserTable user={user}
              users = {users}
              setUser = {setUser}
              ></UserTable>)
            }
            </div>
            </div>


        </div>
    );
};

export default UserData;
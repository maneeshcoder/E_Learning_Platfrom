import React from 'react';
import { MdDashboard } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import "./account.css";
import { UserData } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
const Account = ({user}) => {
  const{setIsAuth,setUser}=UserData();
  const navigate = useNavigate();
  const logoutHandler = ()=>{
    localStorage.clear();
    setUser([])
    setIsAuth(false)
    toast.success("Logged Out Successfully");
    navigate("/login");
  }
  return (
    <div>
        {user && (
          <div className="profile">
          <h2>My Profile</h2>
          <div className="profile-info">
              <p><strong>Name - {user.name }</strong></p>
              <p>
                  <strong>Email - {user.email}</strong>
              </p>
              <button 
              onClick={() => navigate(`/${user._id}/dashboard`)}
              className='common-btn'><MdDashboard/>&nbsp;Dashboard
              </button>
              <br />
              <button onClick={logoutHandler} className='common-btn' style={{background:"red"}}><IoIosLogOut />&nbsp;Logout</button>
          </div>
          </div>
        )}
    </div>
  )
}

export default Account;

import React from "react";

import { useNavigate } from 'react-router-dom'
import useAuth from '../../components/Core/auth'

export default function Dashboard () {
  const { authed, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="Dashboard">
      {authed && (
        <button onClick={handleLogout}>
          Logout
        </button>
      )}
    </div>
  );
}

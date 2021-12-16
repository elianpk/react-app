import React from "react";
import {Navigate} from "react-router-dom";
import { useAuth } from "./auth";

export default function RequireAuth({ children }) {
  const { authed } = useAuth();
  console.log("🚀 ~ file: ProtectedRoute.jsx ~ line 7 ~ RequireAuth ~ authed", authed)
  return authed === true ? children : <Navigate to="/login" replace />;
}


/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useReducer, createContext, useEffect } from "react";

const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  role: localStorage.getItem("role") || null,
  token: localStorage.getItem("token") || null,
};

export const authContext = createContext(initialState);

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state,
        user: null,
        role: null,
        token: null,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload.user,
        role: action.payload.role,
        token: action.payload.token,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        role: null,
        token: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
    localStorage.setItem("role", state.role);
    localStorage.setItem("token", state.token);
  }, [state]);

  const logout = () => {
    // Clear localStorage
    localStorage.removeItem("user");
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    // Force reload to ensure all cached data is cleared
    window.location.reload(true);
    // Dispatch logout action
    dispatch({ type: "LOGOUT" });
  };

  return (
    <authContext.Provider
      value={{
        user: state.user,
        role: state.role,
        token: state.token,
        dispatch,
        logout, // Pass logout function in the context value
      }}>
      {children}
    </authContext.Provider>
  );
};

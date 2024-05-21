import axios from "axios";

export const getToken = () => {
    return localStorage.getItem('jwtToken');
  };
  
  export const setAuthToken = (token) => {
    if (token) {
      // Apply the token to every request header
      axios.defaults.headers.common['Authorization'] = `${token}` ;
    } else {
      // Remove the token if there is none
      delete axios.defaults.headers.common['Authorization'];
    }
  };
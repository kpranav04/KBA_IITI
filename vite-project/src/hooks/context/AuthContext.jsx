import { createContext, useEffect, useReducer } from "react";
import Cookies from "js-cookie";

const INITIAL_STATE={
 user:JSON.parse(localStorage.getItem("user")) || null,
 loading: false,
 error:null,
};

export const AuthContext = createContext(INITIAL_STATE)

const AuthReducer=(state,action)=>{

  switch(action.type){
    case "LOGIN_START" :   //WHENEVER WE CHANGE OUR INFO FROM START PAGE WE GONNA DISPATCH OUR ACTION
      return {
          user:null,
          loading: true,
          error:null,
         }
     case "LOGIN_SUCCESS" :
       return {
            user:action.payload,
            loading: false,
            error:null,
           }
       case "LOGIN_FAILURE" :
        return {
              user:null,
              loading: false,
              error:action.payload,
             }
        case "LOGOUT" :
         return {
                user:null,
                loading: false,
                error:null,
               }  
        default:
          return state;       

  }
}

//children are the components where we need out state (seach bar form whith dates ) need to be accesed

export const AuthContextProvider = ({children}) =>{
 const [state,dispatch]=useReducer(AuthReducer,INITIAL_STATE);

 useEffect(() => {
  localStorage.setItem("user", JSON.stringify(state.user));
}, [state.user]);

const login = (token, user) => {
  // Set the JWT token as a cookie
  Cookies.set("jwt", token, { expires: 1, secure: true, sameSite: "None" });

  // Dispatch the LOGIN_SUCCESS action with the user object
  dispatch({ type: "LOGIN_SUCCESS", payload: user });

  // Store the user information in local storage
  localStorage.setItem("user", JSON.stringify(user));
};

const logout = () => {
  // Remove the JWT token cookie
  Cookies.remove("jwt");

  // Dispatch the LOGOUT action
  dispatch({ type: "LOGOUT" });

  // Remove the user information from local storage
  localStorage.removeItem("user");
  localStorage.removeItem("jwtToken");
};

  return(
        <AuthContext.Provider
        value={{
            user:state.user,
            loading:state.loading,
            error:state.error,
            login,
            logout,
            dispatch,
        }}
        >
            {children}   
        </AuthContext.Provider>



  )


}
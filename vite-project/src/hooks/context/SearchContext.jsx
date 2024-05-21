import { createContext, useReducer } from "react";

const INITIAL_STATE={
 city:undefined,

};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer=(state,action)=>{

  switch(action.type){
        case "NEW_SEARCH" :   //WHENEVER WE CHANGE OUR INFO FROM START PAGE WE GONNA DISPATCH OUR ACTION
        return action.payload ; // PAYLOAD IS DESTINATION  HERE 
        case "RESET_SEARCH" :
        return  INITIAL_STATE ;    //WE WILL GET EMPTY STATE NOW
        default:
             return state; 

  }
}

//children are the components where we need out state (seach bar form whith dates ) need to be accesed

export const SearchContextProvider = ({children}) =>{
 const [state,dispatch]=useReducer(SearchReducer,INITIAL_STATE);

  return(
        <SearchContext.Provider
        value={{
            city:state.city,
           
            dispatch,
        }}
        >
            {children}   
        </SearchContext.Provider>



  )


}
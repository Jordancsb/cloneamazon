import React, { createContext, useContext, useReducer } from 'react';

//DataLayer
export const StateContext = createContext();

//Wrap our app and Provide
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>

);

//pull information
export const useStateValue = () => useContext(StateContext);
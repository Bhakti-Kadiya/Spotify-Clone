import React, { createContext,useContext,useReducer } from "react";

export const StaeContex = createContext();
export const DataLayaer = ({initialState , redducer , children}) => (
    <DataLayerContext.Provider>
        {children}
    </DataLayerContext.Provider>
)
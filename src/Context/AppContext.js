import React, { useState } from "react";

export const AppContext = React.createContext();

export const ContextWrapper = (props) => {
    const [store, setStore] = useState({
        language: "en"
    });

    
    const actions = {
        changeLanguage: languageSelected => setStore({language: languageSelected})
    };

    return (
        <AppContext.Provider value={{store, actions}}>
            {props.children}
        </AppContext.Provider>
    );
}
import React, { createContext, useEffect } from "react";
import all_product from '../Components/Assets/all_product'

export const ShopContext = createContext([]);

const ShopContextProvider = (props) =>{
    const contextValue = {all_product};

    useEffect(() => {

    }, [contextValue.length])
    
    return(
        <ShopContext.Provider value={
            {
                ...contextValue
            }
        }>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
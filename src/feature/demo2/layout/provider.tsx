import React, { createContext, ReactElement, useContext, useReducer, useMemo } from "react";

const ContainerContext: any = createContext({ count: 0 })
const initialState: any = { count: 0 }

function reducer(state: any, action: any) {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

export default function Provider(props: any) {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const value = useMemo(() => ({ state, dispatch }), [state]);

    return (
        <ContainerContext.Provider value={value}>
            {props.children}
        </ContainerContext.Provider>
    );
}
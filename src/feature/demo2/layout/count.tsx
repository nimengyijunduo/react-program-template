import React, { useContext, createContext } from 'react'

const Count: React.FC<unknown> = props => {

    
    const ContainerContext: any = createContext({ count: 0 })
    const { state, dispatch } = useContext(ContainerContext)


    return (
        <>
            Count: { state && state.count }
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
        </>
    );
}

export default Count

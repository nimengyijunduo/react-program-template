import React, { memo } from 'react';

const Home: React.FC<{
    list: Array<{
        id?: number,
        name?: string
    }>,
    handleChange?: () => void
}> = memo(props => {

    console.log(1111, props)

    return (
        <>
            {props.list.map(x => (
                <div key={x.id}>{ x.name }</div>
            ))}
        </>
    );
})

export default Home;

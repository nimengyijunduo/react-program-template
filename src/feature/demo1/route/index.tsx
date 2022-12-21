import React, { useState, useMemo } from 'react';

import Home from '../layout'

const Demo1: React.FC<unknown> = props => {

    const [count, setCount] = useState(0);

    const [text, setText] = useState('')

    const [list, setList] = useState([
        {
            id: 1,
            name: `名称1`
        },
        {
            id: 2,
            name: `名称2`
        }
    ])

    const handleCompute = () => {
        setCount(count + 1)

        const arr: any = []
        for (let index = 0; index < count + 1; index++) {
            arr.push({
                id: index,
                name: `名称${index}`
            })
        }

        setList(arr)
    }

    const handleChange = (e: any) => {
        setText(e.target.value);
    }

    const list1 = useMemo(() => {
        return list.filter(item => {
            if(item.name.includes(text)) {
                return item
            }
        })
    }, [text])

    return (
        <>
            <div
                onClick={handleCompute}
            >
                点击计算 { count }
            </div>
            <input type="text" onChange={(e) => handleChange(e)}/>
            <Home list={list1} />
        </>
    );
}

export default Demo1;

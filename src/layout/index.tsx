import React from 'react';

import { Route, Routes } from 'react-router-dom'

import { Demo1, Demo2 } from '../feature'

const Layout: React.FC<unknown> = props => {

    return (
        <>
           <Routes >
                <Route path="/demo1" element={<Demo1 />} />
                <Route path="/demo2" element={<Demo2 />}  />
            </Routes> 
        </>
    );
}

export default Layout;

import React, { memo } from 'react';

import { Provider, Count, Tip } from '../layout'

const Demo2: React.FC<unknown> = props => {

    return (
        <Provider>
            <Count />
            <Tip />
        </Provider>
    );
}

export default Demo2;

import React, { useState } from 'react';

import {
    Button,
} from '@material-ui/core';


export default function Btn(){

    const [count, setCount] = useState(0);

    return (

        <Button variant="contained" color="primary" onClick={() => setCount(count + 1)}>
            Hi! Вы нажали {count} раз
        </Button>

    );
}
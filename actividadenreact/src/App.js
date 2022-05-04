import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
    const [contador, suma] = useState(0);
    const sumar = () => {
        try {
            suma(contador + 1);


        } catch (error) {
            console.log(error);
        }
    }
    return ( < div className = "App" >
        <
        p >
        <
        img src = { logo }
        classname = "App-logo"
        alt = "logo" / >
        contador { contador } < /p> <button onClick = { sumar } > Contador </button >
        <
        /div>
    );
}

export default App;
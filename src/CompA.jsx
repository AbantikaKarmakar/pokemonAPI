import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CompA = () => {
    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [moves, setMoves] = useState();

    useEffect(() => {
        async function getData() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            // const data = res.json();
            console.log(res.data.name);
            setName(res.data.name);
            setMoves(res.data.moves.length);
        }
        getData();
    });

    return (
        <>
            <h1>You selected <span style={{color:'red'}}> {num} </span>value</h1>
            <h1>My name is <span style={{color:'coral'}}>{name}</span> </h1>
            <h1>I have <span style={{color:'royalblue'}}> {moves} </span>moves</h1>
            <select value={num} onChange={(event) => {
                setNum(event.target.value);
            }}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
                <option value='25'>25</option>
            </select>
        </>
    );
};

export default CompA;
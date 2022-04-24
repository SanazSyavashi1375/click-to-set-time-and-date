import React, { useState, useEffect } from "react";

const Form = () => {
        const [counter, setCounter] = useState(0);
        const [date, setDate] = useState('');
        const [time, setTime] = useState('');
        const [dateAndTimeArr, setDateAndeTimeArr] = useState([]);

        const clickHandling = () => {
            setCounter(counter + 1);
        }
        useEffect(() => {
            let dates = new Date();
            let hour = dates.getHours();
            let min = dates.getMinutes();
            let second = dates.getSeconds();
            let yyy = dates.getFullYear();
            let mmm = dates.getMonth() + 1;
            let ddd = dates.getDate();
            setDate(`${yyy} / ${mmm} / ${ddd}`);
            setTime(`${hour} : ${min} : ${second}`);
            setDateAndeTimeArr([...dateAndTimeArr, `${date}   ${time}`]);

        }, [counter])
        return ( <
            >
            <
            button onClick = { clickHandling }
            className = { 'button-33' } > Click Me To Show You The Time And Date! < /button> <
            ul > {
                dateAndTimeArr.map(td => < li key = { Math.floor(Math.random() * 100000) } > { td } < /li>)
                } <
                /ul> <
                />
            )
        }
        export default Form;
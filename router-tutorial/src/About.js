import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const About = () => {
    const [searchParams, setSearchParams] = useSearchParams(); //쿼리스트링 파싱 
    const detail = searchParams.get('detail');
    const mode = searchParams.get('mode');
    const location = useLocation();

    const onToggleDetail = () => {
        setSearchParams({mode, detail : detail === 'true' ? false : true});
    }

    const onIncreaseMode = () => {
        const nextMode = mode === null ? 1 : parseInt(mode) + 1;
        setSearchParams({mode : nextMode, detail});
    }

    return (
        <div>
            <h1> Introduction </h1>
            <p> This Project is react router sample page</p>
            <p> Query String : {location.search}</p>
            <p> detail : {detail}</p>
            <p> mode : {mode} </p>
            <button onclick={onToggleDetail}> Toggle detail</button>
            <button onClick={onIncreaseMode}> mode + 1</button>
        </div>
    );
};

export default About;
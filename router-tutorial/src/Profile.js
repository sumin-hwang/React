import React from "react";
import { useParams } from "react-router-dom";

const data={
    velopert : {
        name : '김민준',
        desc : 'react developer'
    },
    gildong : {
        name : '홍길동',
        desc : 'main character'
    }
};

console.log('profile.js')

const Profile = () => {
    const {username} = useParams();
    const profile = data[username];

    if(!profile){
        return <div> 존재하지 않는 사용자 입니다.</div>
    }
    
    return(
        <div>
            <h3>
                {username} ({profile.name})
            </h3>
            <p>{profile.desc}</p>
        </div>
    );
};

export default Profile;
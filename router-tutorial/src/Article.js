import React from "react";
import { useParams } from 'react-router-dom';

const Article = () => {
    const {id} =  useParams();

    return(
        <div>
            <h2>게시글 {id} </h2>
        </div>
    )
}

export default Article;

// {id로 불러오는 덕에 개별 컴포넌트를 생성하지 않아도 되는 장점이 있음.}
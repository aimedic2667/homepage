import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import styled from 'styled-components';


const Blank = styled.div` 
    width: 60%;
    height: 7%;
    margin: 0 auto; /*마진 : 0(상하) auto(좌우 마진값 오토로 가운데 정렬)*/
    background-color: #FFFFFF;
`
const BoardList = () => {
    const [boardList, setBoardList] = useState([]);

    const getBoardList = async () => {
      const response = (await axios.get('http://127.0.0.1:8000/post/'))
      setBoardList(response.data)
    }
    
    useEffect(() => {
        getBoardList(); 
    }, []);

    return (
      <>
          {boardList.map((board) => (
              <li key = {board.id}>
                  <Link to = {`/board/${board.id}`}>
                    <img src = {board.images[0].image} alt = 'tag' style={{ maxWidth: '15%', height: '15%' }}/>
                    <br />
                    {board.title}
                    <br />
                    {board.region} 
                    {board.price}
                  </Link>
              </li>
          ))}
          <Blank />
      </>
    );
  };
  
export default BoardList;
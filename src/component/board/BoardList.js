import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

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
      <div>
        <ul>
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
        </ul>   
      </div>
    );
  };
  
export default BoardList;
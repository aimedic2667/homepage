import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Board from './Board';


const BoardDetail = () => {
    const { idx } = useParams(); // /board/:idx와 동일한 변수명으로 데이터를 꺼낼 수 있습니다.
    const [loading, setLoading] = useState(true);
    const [board, setBoard] = useState({});
    const getBoard = async () => {
        const response = await (await axios.get(`http://127.0.0.1:8000/post/${idx}`));
        setBoard(response.data);
        setLoading(false);
    };

    useEffect(() => {
        getBoard();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    return (
        <div>
          {loading ? (
            <h2>loading...</h2>
          ) : (
            <Board
              title={board.title}
              content={board.content}
              price={board.price}
              region={board.region}
              address={board.address}
              size={board.size}
              direction = {board.direction}
              availability = {board.availability}
              floor = {board.floor}
              apart = {board.apart}
              images={board.images}
            />
          )}
        </div>
    );
};

export default BoardDetail;
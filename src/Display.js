import React from 'react'
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Comment from './Comment';
import {Link} from 'react-router-dom'

const Display = () => {
    const [data, setData] = useState([]);
    const [comment, setComment] = useState([]);
  
    useEffect(() => {
      display();
    }, []);
  
    const display = async () => {
      const arr = [];
      try {
        const response = await axios(
          "https://jsonplaceholder.typicode.com/posts"
        );
        //console.log("resp", response.data);
  
        for (let i = 0; i < 10; i++) {
          arr.push(response.data[i]);
        }
      } catch (err) {
        alert(err);
      }
      //console.log(arr);
      setData(arr);
    };
  
    const commentHandler = async (id) => {
      console.log(id);
  
      const response = await axios(
        `https://jsonplaceholder.typicode.com/comments?postId=${id + 1}`
      );
      console.log(response.data);
      setComment(response.data)
    };
  
  
  
    return (
      <div >
        <div className="App">
        {data.map((item, i) => {
          return (
            <ul className="card" key={i}>
              <a onClick={() => commentHandler(i)}>{item.title} </a>
              <hr />
            </ul>
          );
        })}  
        </div>
        <br/>
        <Comment comment={comment}/>
     </div>
    );
}

export default Display
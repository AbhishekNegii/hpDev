import axios from "axios";
import React, { useEffect, useState } from "react";

const DisplayData = (props) => {
  const [postTitle, setPostTitle] = useState([]);

  const [data, setData] = useState([]);

  useEffect(() => {
    title();
  }, []);

  const title = async () => {
    const arr = [];
    try {
      const response = await axios(
        "https://jsonplaceholder.typicode.com/posts"
      );
      //  console.log('resp12',response.data)

      for (let i = 0; i < 10; i++) {
        arr.push(response.data[i]);
      }
    } catch (err) {
      alert(err);
    }
    console.log("title", arr);
    setPostTitle(arr);
  };

  let array = [];
  let data1 = [];

  
  array = props.name.map(function (value, index) {
    return [value, postTitle[index]];
  });

  for(let i=0;i<array.length;i++){
    for(let j=0;j<=1;j++){
        console.log(array[i][j].name)
    }
  }

  setData(array);
  console.log("arr", array);
  return (
    <div>
      {/* {data.map((item) => {
        return { item };
      })} */}
    </div>
  );
};

export default DisplayData;

import axios from "axios";
import React, { useEffect, useState } from "react";
import Display from "./DisplayData";

const UserName = () => {
  const [name, setName] = useState([]);
  useEffect(() => {
    userName();
  }, []);
  const userName = async () => {
    const response1 = await axios("https://jsonplaceholder.typicode.com/users");
    console.log("resp1", response1.data);

    const arr2 = [];
    for (let i = 0; i < 10; i++) {
      arr2.push(response1.data[i]);
    }
    console.log("userName", arr2);

    setName(arr2);
  };
  return (
    <div>
      <Display name={name} />
    </div>
  );
};

export default UserName;

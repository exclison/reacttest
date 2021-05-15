import React, { useState, useEffect } from "react";

export default function FunctionComponent() {
  const [date, setDate] = useState(new Date());

  //相当于componentDidMount,componentDidUpdate,componentWillUnmount的集合
  useEffect(()=>{
      console.log('useEffect')
      const timer = setInterval(() => {
          setDate(new Date())
      }, 1000);
      return ()=>{
          clearInterval(timer)
      }
  },[])

  return <div>{date.toLocaleTimeString()}</div>;
}

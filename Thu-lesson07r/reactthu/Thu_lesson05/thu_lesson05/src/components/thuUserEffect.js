import React, { useEffect, useState } from 'react'

export default function thuUserEffect() {
    const [count , setCount] = useState(0);

    // Hàm xử lý sự kiện click me
    const thuHandleClick = ()=>{
        setCount(prev => prev + 1);
    }

    // Sử dụng hàm useEffect để cập nhật lại title, có 1 tham số
    useEffect(()=>{
        document.title += `Lê Thương Hoài Thu : You clicked ${count} times`;
        console.log(`You clicked ${count} times`);
    });
    //useEffect : tham số thứ 2 là mảng rỗng
    useEffect(()=>{
        console.log("Chạy lần đầu tiên = một lần")
    },[]);
    // [deps]
    useEffect(()=> {
        console.log(`useEffect count click:`, count)
    },[count])
  return (
    <div>
        <h2>Demo - UseEffect: You clicked {count} times</h2>
        <button onClick={thuHandleClick}>
        Click me
      </button>
    </div>
  )
}

import React,{useState} from 'react'

export default function thuUseState() {
  const [count, setCount] = useState(10);
  //Mảng
  const [list,setList]=useState([1,5]);

  // Hàm xử lý sự kiện "Thêm ngẫu nhiên"
  thuHandleList = ()=>{
    //sinh ngẫu nhiên một giá trị số
    let num = parent(Math.random()*100);
    // Cập nhật lại state: list
    setList([
      ...list,
      num
    ])
  }
return (
  <div>
    <p>You clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>
      Click me
    </button>
    <hr/>
    <h3>List: {list.toString()}</h3>
    <button onClick={thuHandleList}>Thêm ngầu nhiên</button>
    
  </div>
);
}

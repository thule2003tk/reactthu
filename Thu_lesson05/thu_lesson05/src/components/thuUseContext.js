import React, { createContext, useContext, useState } from 'react'
import thuUseContext1 from './thuUseContext1';
export const ThemeContext = createContext(); // Tạo ngữ cảnh để chia sẻ

export default function thuUseContext() {
    // state
    const [theme,setTheme] = useState('red');
    
    // Hàm thay đổi Theme
    const thuHandleChange = ()=>{
        setTheme(theme==='red'?'blue':'red');
    }
    return (
        <ThemeContext.Provider value= {theme}>
            <div  className='alert'>
                <h2>Demo useContext</h2>
                <thuUseContext1 />
                <button onClick={thuHandleChange}>Change bgColor</button>
            </div>
        </ThemeContext.Provider>
    )
}

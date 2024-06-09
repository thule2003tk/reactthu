import React from 'react'
import thuUseState from './components/thuUseState'
import thuUseStateserEffect from './components/thuUserEffect'
import './App.css'
import thuUseContent from './components/thuUseContext'

export default function App() {
  return (
    <div className='container border mt-3'>
      <h1 className='text-center'>Lê Thương Hoài Thu - Hook</h1>
      <hr/>
      <thuUseState />
      <hr />
      <thuUserEffect />
      <hr />
      <thuUseContent />
    </div>
    
  )
}

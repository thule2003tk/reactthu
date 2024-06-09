import React, { Component } from 'react';
import Thu_EventForm1 from './components/Thu_EventForm1';
import Thu_EventForm2 from './components/Thu_EventForm2';
import Thu_EventForm3 from './components/Thu_EventForm3';
import Thu_EventForm4 from './components/Thu_EventForm4';

class App extends Component {
  render() {
    return (
      <div className='container'>
          <h1>Event Form Demo</h1>
          <TVC_EventForm1 />
          <TVC_EventForm2 />
          <TVC_EventForm3 />
          <TVC_EventForm4 name="LTH thu" />
      </div>
    );
  }
}

export default App;
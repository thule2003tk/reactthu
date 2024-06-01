// import logo from './logo.svg';
import './App.css';
import func_jsx_thu from './components/func_jsx_thu';

function App() {
  return (
      <section className="App">
        <h1>demo jsx</h1>
        {/* function component demo */}
        <func_jsx_thu />
        <func_jsx_thu fullName="LTH Thu" age="20" />
      </section>
  );
}

export default App;
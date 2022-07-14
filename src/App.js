import './App.css';
import Header from './components/header';
import Form from './components/form';
function App() {

  return (
    <div className="App">
      <Header />
      <div className='flex'>
        <Form />
      </div>
    </div>
  );
}

export default App;

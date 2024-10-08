import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import CreateArea from './component/CreateArea';
import Footer from './component/Footer';
import Note from './component/Note';

function App() {
  return (
    <div className="App">
      <Header />
      <CreateArea />
      <Note 
        title=''
        content=''
      />
      <Footer />
    </div>
  );
}

export default App;

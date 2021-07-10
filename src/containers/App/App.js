import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header';
import About from '../About';
import Enterprice from '../Enterprice/Enterprice';
import Footer from '../Footer/Footer';
import Finish from '../finish/finish';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Enterprice />
      <Footer />
      <Finish/>
    </div>
  );
}

export default App;

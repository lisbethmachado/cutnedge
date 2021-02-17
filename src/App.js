import './App.css';
import Home from './pages/Home'
import { Container } from './components/Grid';
// import Navbar from './components/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container>
      {/* <Navbar /> */}
      <Home />
      </Container>
  );
}

export default App;

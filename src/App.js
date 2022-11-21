import './styles/App.css';
import UploadForm from './components/UploadForm';
import Gallery from './components/Gallery';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container className="text-center m3">
      <UploadForm />
      <Gallery />
    </Container>
  );
}

export default App;

import './styles/App.css';
import UploadForm from './components/UploadForm';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container className="text-center m3">
      <UploadForm />
    </Container>
  );
}

export default App;

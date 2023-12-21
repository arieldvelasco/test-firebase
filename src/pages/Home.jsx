import { Container } from "react-bootstrap";
import LogIn from "../components/LogIn";
import FileUploader from "../components/FileUploader";


const Home = () => {
  return (
    <Container>
        <h1>Rol in the shell</h1>
        <LogIn />
        <FileUploader />
    </Container>
  )
}

export default Home;
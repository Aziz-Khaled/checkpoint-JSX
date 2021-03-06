// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import { NavDropdown,Navbar,Container,Nav,Form,FormControl,Button ,Row,Image,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Imagescr from './wholeearth2.png' ;

function App() {
  return (
    <div>
    <div>
    <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Link</Nav.Link>
          <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#" disabled>
            Link
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>

  <div className='Name' style ={{border:'solid 1px black', maxWidth:'100vw'}}>
    <h1 class="title-red" > Aziz </h1>
  </div>

    <div >
    <Container>
  <Row className =" imgs">
    <Col  xs={6} md={4}>
      <Image src ="/Mars.png" rounded />
    </Col>
    <Col xs={6} md={4}>
      <Image src={Imagescr} alt ='img2' rounded />
    </Col>
  </Row>
</Container>

    </div>
    <div className="App">
        <video width="750" height="500" controls >
        <source src="/video.mp4" type="video/mp4"/>
      </video>
    </div>
    </div>
  );
}

export default App;

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { GiShoppingCart } from "react-icons/gi";
import {Link, useNavigate} from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header() {
  const navigate = useNavigate()

  const userName = JSON.parse(localStorage.getItem("users"))
  const isLoggedIn = JSON.parse(localStorage.getItem("loggedIn"))

  const handleLogOut = () => {
    localStorage.removeItem("loggedIn")
    navigate("/")
  }

  return (
    <Navbar expand="lg" className="" style={{backgroundColor:'#e3e3e3'}} >
      <Container className='d-flex justify-content-between'>
          <Link to='/'>
            <img src='/Logo.png' alt="logo" width={100}/>
          </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

        <Form className="d-flex gap-0">
            <Form.Control
              type="search"
              placeholder='Search'
              className="me-2"
              aria-label="Search"
            />
            <Link to='/productdetails'>
              <Button variant="outline-success" className='btn-light me-2'><img src="/search.png" alt="" /></Button>
            </Link>
          </Form>

        <ul className='d-flex gap-3 list-unstyled align-items-center justify-content-center'>
          <li><Link className='text-decoration-none' to="/about">Home</Link></li>

          <li><Link className='text-decoration-none' to="/about">About</Link></li>

          <li><Link className='text-decoration-none' to="/about">Contact us</Link></li>

          <li><Link className='text-decoration-none' to="/about">Blog</Link></li>

        </ul>


          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            
            <Link to='/addtocart' className='text-white text-decoration-none me-2'>
                <GiShoppingCart style={{ fontSize: '36px' }}/>
            </Link>
          </Nav>
          
          {isLoggedIn ? (
  <>
    <NavDropdown title={`${userName.fName} ${userName.lName}`} id="basic-nav-dropdown" className='text-white'>
      <NavDropdown.Item>Profile</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item onClick={handleLogOut}>Log Out</NavDropdown.Item>
    </NavDropdown>
  </>
) : (
  <>
    <Link to='/login' className='text-dark text-decoration-none'>Login</Link>
    <span className='mx-2 text-dark'>|</span>
    <Link to='/register' className='text-dark text-decoration-none'>Register</Link>
  </>
)}

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
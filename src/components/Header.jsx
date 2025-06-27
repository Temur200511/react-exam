import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { GiShoppingCart } from "react-icons/gi";
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Header() {
  const navigate = useNavigate();

  const userName = JSON.parse(localStorage.getItem("users"));
  const isLoggedIn = JSON.parse(localStorage.getItem("loggedIn"));

  const [liked, setLiked] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const savedLike = JSON.parse(localStorage.getItem("liked"));
    if (savedLike !== null) setLiked(savedLike);
  }, []);

  const handleSearch = (e) => {
  e.preventDefault();
  if (searchQuery.trim() !== '') {
    navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
  }
};


  const handleLogOut = () => {
    localStorage.removeItem("loggedIn");
    navigate("/");
  };

  const toggleLike = () => {
    const newLike = !liked;
    setLiked(newLike);
    localStorage.setItem("liked", JSON.stringify(newLike));
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: '#e3e3e3' }}>
      <Container className="d-flex justify-content-center gap-4 align-items-center flex-wrap py-2 px-4">

        {/* Left: Logo */}
        <div className="d-flex align-items-center">
          <Link to='/'>
            <img src='/Logo.png' alt="logot" width={100} />
          </Link>
        </div>

        {/* Center: Search bar */}
        <div className="flex-grow-1 px-3">
          <Form className="d-flex" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button variant="outline-success" className='btn-light' type="submit">
              <img src="/search.png" alt="search" />
            </Button>
          </Form>
        </div>

        {/* Right: Nav links, Cart, Auth */}
        <div className="d-flex align-items-center gap-3">
          <ul className='d-flex gap-3 list-unstyled mb-0'>
            <li><Link className="text-decoration-none" to="/about">Home</Link></li>
            <li><Link className="text-decoration-none" to="/about">About</Link></li>
            <li><Link className="text-decoration-none" to="/about">Contact us</Link></li>
            <li><Link className="text-decoration-none" to="/about">Blog</Link></li>
          </ul>

          <Link to="/addtocart"><GiShoppingCart size={30} /></Link>
          <span onClick={toggleLike} style={{ fontSize: '24px', cursor: 'pointer' }}>
            {liked ? '❤️' : '🤍'}
          </span>

          {isLoggedIn ? (
            <NavDropdown title={`${userName.fName} ${userName.lName}`} id="basic-nav-dropdown">
              <NavDropdown.Item>Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleLogOut}>Log Out</NavDropdown.Item>
            </NavDropdown>
          ) : (
            <>
              <Link className="text-decoration-none" to='/login'>Login</Link>
              <span>|</span>
              <Link to='/register'>
                <img src="/Vector.png" alt="register" />
              </Link>
            </>
          )}
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;

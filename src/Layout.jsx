import { Link, Outlet } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const Layout = () => {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link as={Link} to="home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="update">Update</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="edit">Edit</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="insert">Insert</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="search">Search</Nav.Link>
        </Nav.Item>
      </Nav>
      <Outlet/>
    </>
  );
}

export default Layout;

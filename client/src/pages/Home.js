import React,{useEffect,useState} from "react";
import {getProducts} from "../functions/product";
import NewArrivals from "../components/home/NewArrivals";
import BestSellers from "../components/home/BestSellers";
import Carousel from 'react-bootstrap/Carousel'
import { Button,Navbar,Nav,NavDropdown,Form,FormControl } from 'react-bootstrap'
import {Card} from 'react-bootstrap'

const Home = () => {
  const [products,setProducts] = useState([]);
  const [loading,setLoading] = useState(false);
  
  useEffect(() => {
    loadAllProducts();
  }, [])
  const loadAllProducts = () => {
    setLoading(true);
    getProducts('createdAt','desc',3)
    .then(res => {
      setProducts(res.data);
      setLoading(false);
    })
  }

  return (
    <>
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    <Carousel>
  <Carousel.Item interval={5000}>
    <img
      className="d-block w-100"
      src="https://www.optimumnutrition.com/medias/ON-web-carousel-1920x488.jpg?context=bWFzdGVyfHJvb3R8MjUxNjg1fGltYWdlL2pwZWd8aGNhL2g4NC85Nzg1OTE1MTQ2MjcwLmpwZ3xkNGU2NGJmZTZlMTFkZjMzMTk0ZTA5YWUzMmNiNGM3MzZlMmM5MDNhZTlhYzY0OWZiOGQ3ZWNiNThjMjlkMjA3"
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={5000}>
    <img
      className="d-block w-100"
      src="https://www.optimumnutrition.com/medias/UK-hp-banner-desktop-full-1920x488-better-than-before.png?context=bWFzdGVyfHJvb3R8Mjg2Njg1fGltYWdlL3BuZ3xoOTQvaDAyLzk3MTA0NzAyNjY5MTAucG5nfGUwMDcyOGY3ZWI1YWYzNzAzYzcxNmZiYjQyNWJmMmFmZjJmYzZkMGNhYzM1ZDI1N2U1YjJjZTQ4ODFjMTBjOGQ"
      alt="Second slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
    <div className="text-center p-3 mt-5 display-3 jumbotron">
      {loading ? <h4>Loading...</h4> : <h4>All Products</h4>}
    </div>
    <div className="text-center p-3 mt-5 display-4 jumbotron">
      New Arrivals
    </div>
    <NewArrivals />
    <br />
    <div className="text-center p-3 mt-5 display-4 jumbotron">
      Best Sellers
    </div>    
     <BestSellers />
    
    <div className="text-center p-3 mt-5 display-6 jumbotron">
      Blogs
    </div>
      
    </>
  );
}

export default Home;

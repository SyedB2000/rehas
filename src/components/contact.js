import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AppContact() {
  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contact us</h2>
          <div className="subtitle">get connected with us</div>
        </div>
        <Form className='contact-form'>
          <Row>
            <Col sm={4}>
              <Form.Control type="text" placeholder="Enter your full name" required />
            </Col>
            <Col sm={4}>
              <Form.Control type="email" placeholder="Enter your email address" required />
            </Col>
            <Col sm={4}>
              <Form.Control type="tel" placeholder="Enter your contact number" required />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control as="textarea" placeholder="Enter your contact message" required />
            </Col>
          </Row>
          <div className='btn-holder'>
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Container>
      <div className='google-map'>
        <iframe title="map" src="https://www.google.com/maps/embed/v1/directions?
origin=Avur
&destination=tiruvannamalai
&key=AIzaSyC-5CY9mOCeg5Y3IhPqi_Yd0-DZtWrJl-E"></iframe>
      </div>
      <Container fluid>
        <div className='contact-info'>
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              <a href="mailto:rehamehandhi@domain.com">rehamehandhi@domain.com</a>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <a href="tel:6484900162">6484900162</a>
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              Tiruvannamalai
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default AppContact;
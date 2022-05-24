import { Jumbotron , Container, Row, Col } from "react-bootstrap";

const Welcome = () => {
  return (
      <Container fluid className="mt-2">
          <Row>
              <Col xs={12}>
    <Jumbotron fluid style={{backgroundImage: `url("https://mcdn.wallpapersafari.com/medium/74/15/dOMZ3y.jpg")`, backgroundRepeat : `no-repeat`, backgroundSize : `cover`, backgroundPositionY : '36%' }}>
      <Container className="mb-5 pb-5">
        <h1 className="text-white">Welcome To StriveBooks</h1>
        <p className="text-white">
          <b>Here We show you some of our favorite horror books</b>
        </p>
      </Container>
    </Jumbotron>
    </Col>
    </Row>
    </Container>
  );
};
export default Welcome

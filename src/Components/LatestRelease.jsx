import { Component } from 'react'
import {  Card , Container , Row , Col } from 'react-bootstrap'
import arrayOfBooks from '../Data/horror.json'

class LatestRelease extends Component {
  render() {
    return (
      <Container style={{backgroundColor : 'darkgray'}} className={'mb-5 pb-4'}>
        <Row>
            <Col xs={12}>
                <h1 className='display-2 mb-4 text-dark'>Enjoy</h1>
            </Col>
              {arrayOfBooks.map((book) =>(
                  <Col key={book.asin} xs={12} sm={6} md={4}>
            <Card className='mt-3' style={{height : `650px`}}>
              <Card.Img variant="top" src={book.img} height={500} />
              <Card.Body>
                <Card.Title style={{fontSize : `20px`}}>{book.title}</Card.Title>
                <Card.Text>
                    {book.category}
                </Card.Text>
                <Card.Text>
                    {book.price + '$'}
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>
              ))}
        </Row>
      </Container>
    );
  }
}
export default LatestRelease

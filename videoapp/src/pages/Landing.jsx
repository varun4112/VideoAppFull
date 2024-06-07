import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
function Landing() {

  const navigateByUrl= useNavigate();

  return (
    <>
    <Row className='p-5 mt-5 align-item-center justify-content-between w-100' >
      <Col></Col>
      <Col lg={4}><h3>Welcome to <span className='text-warning'>Video Player</span></h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum consectetur at magnam, aut ab corporis est minima? Eaque nobis totam labore dignissimos accusantium dolorum veniam, recusandae impedit quia culpa cumque.</p>
      <Button className='btn btn-warning' onClick={()=>navigateByUrl('/home')} > Get Started </Button>
      {/* navigateByUrl used to redirect to home */}
      </Col>
      <Col lg={6}>
        <img className='img-fluid align-item-center justify-content-center' style={{height: '300px', marginLeft:'40%'}} src="https://cdn.pixabay.com/animation/2023/06/09/10/23/10-23-52-882_512.gif" alt="Failed to load" />
      </Col>
      <Col></Col>
    </Row>

    <Row style={{justifyContent:"space-evenly", margin:"20px"}}>
      <h3 style={{textAlign:"center"}}>Features</h3>
      <Card style={{ width: '18rem' }}>
      <Card.Img style={{height:"200px" , paddingTop:"12px" }} variant="top" src="https://cdn.dribbble.com/users/1237300/screenshots/6478927/__-1_1_____.gif" />
      <Card.Body>
        <Card.Title>Save Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', paddingTop:"12px"  }}>
      <Card.Img style={{height:"200px"}} variant="top" src="https://i.gifer.com/origin/55/554818561cbf36d813ef2010cc9d66cc.gif" />
      <Card.Body>
        <Card.Title>Managing</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' , paddingTop:"12px"  }}>
      <Card.Img style={{height:"200px"}} variant="top" src="https://i.gifer.com/7s3p.gif" />
      <Card.Body>
        <Card.Title>Categorized Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </Row>
    
    <Row className=''  >
      <Col></Col>
      <Col lg={5} className='p-5'>
        <h4><b>Simple,Fast and Powerful</b></h4>
        <p><spam className="text-warning">Play History: </spam>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ut officia nobis molestiae non, esse eligendi repellat sequi nulla, blanditiis hic natus vel. Sequi maiores atque quaerat, consectetur labore tempore.</p>
        <p><spam className="text-warning">Categorize Videos: </spam>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ut officia nobis molestiae non, esse eligendi repellat sequi nulla, blanditiis hic natus vel. Sequi maiores atque quaerat, consectetur labore tempore.</p>
        <p><spam className="text-warning">Managing History: </spam>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ut officia nobis molestiae non, esse eligendi repellat sequi nulla, blanditiis hic natus vel. Sequi maiores atque quaerat, consectetur labore tempore.</p>
      </Col>
      <Col className='p-5' lg={5}>
      <iframe width="475" height="315" src="https://www.youtube.com/embed/wfOrdT_Y90A?si=GIi1TpTwl48xFLGl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </Col>
      <Col></Col>

    </Row>
    
    </>
  )
}

export default Landing
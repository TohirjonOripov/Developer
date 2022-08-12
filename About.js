import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import '../main.css';

import { Col, Row, Button, Form, FormGroup, Label, Input,Container } from 'reactstrap';
import { YMaps, Map, FullscreenControl, RulerControl } from 'react-yandex-maps';
const About = () => {
  return (
      <>
        
      <div className="top">
      <h3
          style={{
              fontWeight :"900",
              textAlign :'center',
              color:'white',
              marginTop: '40px',
            //   marginLeft:'40%'
              
          }}
          >Bog'lanish</h3>
      <Container className="container">
     
          <Col md="7">
    <Form>
      <Row form>
        <Col md={12}>
          <FormGroup className="form">
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="Email kiriting...." />
          </FormGroup>
        </Col>
     
      </Row>
     

      <Row form>
        <Col md={12}>
          <FormGroup className="form">
            <Label for="exampleCity">Xabar</Label>
            
            <Input type="text" name="city" id="exampleCity" 
            style={{
                height : "50px"
            }}
            placeholder="Xabar yozish..."/>
          </FormGroup>
        </Col>
      
       
      </Row>
      <br></br>
     
      <Button color="success">Yuborish</Button>
    </Form>
    </Col>
    
    </Container>
    <div className="about-div" 
        
    >
    <YMaps >
  <Map 
    defaultState={{
      center: [40.377172, 70.813772],
      zoom: 9,
      controls: [],
    }}
  >
     
    <FullscreenControl />
    
  </Map>
</YMaps>
    </div>
    </div>
    </>
  );
}

export default About;
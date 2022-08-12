import React, { Component } from 'react';
import { NavLink } from 'reactstrap';
import Rasm from '../3.jpg';

class Portfolio extends Component {
    render() {
        return (
            <div>
                <h1 style={{
                    textAlign : 'center',
                    fontWeight : 900,
                    marginTop:'30px',
                    color:'green'
                }}>Portfolio</h1>
                     <div className="port">
                       <img src={Rasm} width="400px" height="200px"/>
                       <h2>Fargreenoazis sayti</h2>
                       <NavLink href="http://fargreenoazis.uz">DEMO</NavLink>
                     </div>
            </div>
        );
    }
}

export default Portfolio;



// import React, { Component } from 'react';
// import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
// import axios from 'axios';
// import '../App.css';

// const Portfolio = () => {
    

//     state = {
//         post: []
//     }
//     componentDidMount(){
//       axios.get('https://jsonplaceholder.typicode.com/posts')
//       .then(res => {
//           const post = res.data;
//           console.log(res);
//           this.setState({ post })
//       });

//     }
  
//         return (
//             <div>
//                 <Container>
//                     <Row>
//                         {this.state.post.map((posts) => (
//                             <Col md="4">
//                                 <Card key={posts.id}>
//                                     <CardHeader>

//                                  <h1 className="h2-link">{posts.id}</h1>
//                                  <h4 className="h2-link">{posts.title}</h4>
//                                         <h6 className="h2-link">{posts.body}</h6>
//                                     </CardHeader>
//                                     {/* <CardBody>
//                                         <h3>{posts.phone}</h3>
//                                         <h3>{posts.username}</h3>
//                                         <h3>{posts.email}</h3>
//                                     </CardBody> */}
//                                 </Card>
//                             </Col>
//                         )
                        
//                         )}
//                     </Row>
//                 </Container>
//             </div>
//         );
//     }



// export default Portfolio;
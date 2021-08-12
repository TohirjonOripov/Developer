import React, { useState }  from 'react';
import questions from './Components/data';
import data from './Components/data';
import SingleQuestion from './Components/Question';
import './index.css';
function App() {
  const [question,setQuestion] = useState(data);

  return(
  <>
  
  <div className="container">
    <h2>Question and Answers</h2>

    <section className="info">
      {questions.map((question) => {
        return <SingleQuestion key={question.id} {...question}></SingleQuestion>;
      })}

    </section>

  </div>
  
  </>


  );



}
  // const[count, setCount] = useState(0);
  // useEffect(()=>{
  //   document.title = `siz ${count} marta bosdingiz`;

  // })

  //     return(
  //    <div>
  //       <h1 align="center">
  //         {count}
  //       </h1>

  //       <button onClick={() => setCount(count + 1)}>Plus</button>

  //    </div>
      
  //   );
  // }


export default App;

// import React, { Component } from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }
//   componentDidMount() {
//     document.title = `You clicked ${this.state.count} times`;
//   }
//   componentDidUpdate() {
//     document.title = `You clicked ${this.state.count} times`;
//   }
//   render() {
//     return (
//       <div>
//           <p>You clicked {this.state.count} times</p>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Click me
//         </button>
//       </div>
//     );
//   }
// }

// export default App;
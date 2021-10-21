
import React from 'react'
import { Button,FormControl} from 'react-bootstrap';
import Img from "./img.jpg"
import './App.css';

class App extends React.Component{
    constructor(){
        super();
        this.state={
          person:{ fullName:"Rahma khaldi",bio:"bonjour,ijiojdgioejzuh", imgSrc:Img, profession:"développeuse"} ,
          show:false,
          count:0,
          intervalId:0,
        }
        // if method is not arrow function
        // this.handleShow=this.handleShow.bind(this)
    }
    componentDidMount(){
      this.intervalId = setInterval(()=>{this.setState({count:this.state.count+1})}, 1000);
  }
  componentWillUnmount()
  {
      clearInterval(this.intervalId)
  }
    handleShow=()=>{
        this.setState({
            show:!this.state.show
        })
    }

    render(){
        return(
            <div className="App">
                <Button  variant="secondary" onClick={this.handleShow} >Show</Button>
               {
                   this.state.show && 
                   
                   <div>
                   <img src={this.state.person.imgSrc} alt="img" />
                    <div className="container">
                      <h2>{this.state.person.fullName}</h2>
                       <p> {this.state.person.bio} </p>
                   <div>{this.state.person.profession}</div>
                  
                   </div>
                   <p>{this.state.count}</p>
                   </div>
               }
            </div>
        )
    }
}

export default App

import React, { Component } from 'react';
import axios from 'axios';

class Test extends Component {
    constructor(){
        super();

        this.state = {
            brewery: [],
            id: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3002/api/breweries').then( res =>{
           this.setState({brewery: res.data})
           console.log(res.data)
            // res.data.map()
            // console.log(res.data)
            // this.setState({brewery: res.data});
    });
}
    // } Put server url after axios.get() done

    render(){
        const {brewery} = this.state
        console.log(brewery)
        return(
          <div>

          </div>  
        );
    }
}

export default Test;
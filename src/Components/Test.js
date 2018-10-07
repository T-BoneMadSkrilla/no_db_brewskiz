import React, { Component } from 'react';
import axios from 'axios';
import './Test.css';
import BrewImgCreator from './BrewImgCreator.js';

class Test extends Component {
    constructor(){
        super();

        this.state = {
            brewery: [],
            favs: []
        }
    }

    

    componentDidMount(){
        axios.get('http://localhost:3002/api/breweries').then( res =>{
           this.setState({brewery: res.data})
           console.log(res.data)
            // res.data.map()
            // console.log(res.data)
            // this.setState({brewery: res.data});
            // } Put server url after axios.get() done
    });
}
    
    handleAdd = id => {
        const { brewery, favs}= this.state
        let temp = favs.concat(brewery.slice(id, id +1))
        this.setState({favs : temp})
    }


    handleDelete = id => {
        let temp = this.state.favs.slice(0,10);
        temp.splice(id,1);
        
        this.setState({favs : temp})
    }

    render(){
        const {brewery} = this.state

        console.log(brewery)

        const map = brewery.slice(0,10).map((e,i)=>{
            return (
                <BrewImgCreator
                key={i}
                img={e.img}
                handleCLick={e=> this.handleAdd(i)}
                button={'Add'}
                />
            );
        });


        return(
         <div className="App">
            
            {map}

         </div>
        );
    }
}

export default Test;

//  {/* <div className="sameSize">
//              {brewery.map( (e) => {
                
//                     < 
//                     key={e.name}
//                     img={e.img}
//                 // <img src={e.img} alt="brewski bottles"/>
                
//                 })} */}
//              {/* </div> */}

//                 {/* // <div> */}
//                 {/* {brewery.map( (e, i) => { 
//                 return <div className = "sameSize"key={i} >{e.name}</div>
//                 })} */}
//                 {/* </div>   */}

//                 {/* </div>
//             {/* /* {brewery.map( (e) => { */}
//              {/* return <div className="App">
//             <img src={e.img} alt="brewski bottles"/>
//             )} */}


            // {brewery.map( (e, i) => { 
            //     return <div key={i} >{e.name}</div>
            //     })}
            //     </div>
            //     <div >
            //     <div >
            //      {brewery.map( (e) => {return <img src={e.img} alt="brewski bottles"/>})}
            //      </div>
            //     </div>

             // Brew (props){
    //     const {name, img, brewery_type, city, state} = props;
    
    //     return (
    //     <h2>{name}</h2>
    
    //     <img src={ img } alt="brewski bottles" />
    
    //     <h6>{brewery_type}</h6>
    //     <h6>{city}</h6>
    //     <h6>{state}</h6>
    //         )
    // };
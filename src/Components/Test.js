import React, { Component } from 'react';
import axios from 'axios';
import './Test.css';
import BrewImgCreator from './BrewImgCreator.js';
import Review from './Review.js';
import Title from './Title.js';

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
    
    handleAdd = e => {
            axios
            .post('http://localhost:3002/api/breweries',e).then( res =>{
                 this.setState({favs: res.data})
            })
        }
    


    handleDelete = id => {
        axios
        .delete('http://localhost:3002/api/breweries/:x')
        .then(res => this.setState({favs: res.data}))
    }

    render() {
        const {brewery, favs} = this.state

        console.log(brewery)

        const display = brewery.map((e,i)=>{
            return (<div className='t-bone'>
                <BrewImgCreator
                key={i}
                img={e.img}
                name={e.name}
                city={e.city}
                state={e.state}
                fav={()=> this.handleAdd(e)}
              
                />
                
                </div>
            );
        });

        const display2 = favs.map((e,i) => {
            return (
                <div>
                    <BrewImgCreator
                        key={i}
                        img={e.img}
                        name={e.name}
                        city={e.city}
                        state={e.state}
                        handleDelete={this.handleDelete}
                       
                        />
                </div>
            );
        });

//below is what is returned - don't get confused with the functions above, Tyler
        return(
        <div>
            <div>
                <Title />
            </div>

            <div className="BeerListItem-main-card">
            {display}
            </div>

            <h3>I wanna try these mugs out</h3>

            <div>
            {display2}
            </div>

            <div>
                <Review/>
            </div>

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
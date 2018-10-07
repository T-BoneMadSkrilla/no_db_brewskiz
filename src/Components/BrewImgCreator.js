import React from 'react';
import "./BrewImgCreator.css";


const BrewImgCreator = (props) => {
    return(
        <div className = 'BeerListItem'>
            <img 
            src={props.img}
            />
            <div>
            <button onClick={props.handleClick}>{props.button}</button>
            </div>
        </div>
    );
};

export default BrewImgCreator;



// //don't forget to add the delete function!
// // function Brew (props){
// //     const {name, img, brewery_type, city, state} = props;

// //     return (
// //     <h2>{name}</h2>

// //     <img src={ img } alt="brewski bottles" />

// //     <h6>{brewery_type}</h6>
// //     <h6>{city}</h6>
// //     <h6>{state}</h6>
// //         )
// // };


// export default BrewImgCreator;

// {brewery.map( (e) => {
//     return <div className="App">
//         <img src={e.img} alt="brewski bottles"/>
//     </div>

// {brewery.map( (e, i) => { 
//     return <div key={i} >{e.name}</div>
// })}
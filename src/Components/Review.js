import React, { Component } from "react";
import axios from "axios";

class Review extends Component{
        constructor(){
            super();

            this.state = {
            review: [],
            newReview: [],
            newInput: "",
            editReview: "",
            edit: false
        };
    }

    handleReview = () => {
        this.setState({
            edit: !this.state.edit
        })
    }

    handleInput = (val) => {
        this.setState({
            newInput: val
        })
    }

    leaveReview = () => { 
        let {newInput} = this.state;
            axios.put(`http://localhost:3002/api/breweries`, {newInput}).then( res => {
                console.log(res.data)
                this.setState({
                    newReview: res.data
                    // editReview: !this.state.editReview,
                    // newInput: res.data.newReview
                })
            })
    }
    //leaveReview is actually a post, I know it's confusing 

    // e =>{
    //     if (e.keyCode === 13){
    //         let { input } = this.state;

    editReview = (id, value) => {
        console.log(id,value)
        axios   
        .put(`http://localhost:3002/api/breweries/${id}`, {value}).then( res =>{
            console.log(res.data)
             this.setState({review: res.data})
        })
    } //

    //create new function to change the edit review string. Then call the function on a submit button.

    render(){
        // console.log(this.state.newReview)
        //map this.state.newReview to style
        console.log(this.state.newReview)

       const map = this.state.newReview.map((value, index)=> {
                return (
                 <div key={index}>

                 { value.update}
                     <button onClick={()=>this.editReview(index, this.state.newInput)}>EDIT </button>
                     <input onChange={(e) => this.handleInput(e.target.value)}/>
                     {/* <button onClick={() => this.editReview(value.id, this.state.editReview)}>SUBMIT</button> */}
                 </div> //change second
                )
       }) 

    //    <div>
//     <div>
//     {!editTitle ? (<h1 onClick={this.handleTitle}>{newTitle ? newTitle : title}</h1>
//     ) : (
//         <div>
//             <input 
//              placeholder="Call it whatever you want, buddy"
//              onChange={e => this.handleInput(e.target.value)}
//              onKeyDown={this.Enter}
//             />

//         </div>
//     )}
//  </div>
// </div>

        return(

            <div>
                <div><h3>Leave a review</h3></div>
                {map}
                    {/* <div>{this.state.newReview}</div> */}
                {/* {this.state.review && (<button onClick={this.state.review}>Add</button>)} */}
                {/* <h3>{this.state.newReview ? this.state.review : this.state.newInput}</h3> */}
                <div>
                    <input onChange={e => this.handleInput(e.target.value)}/>
                    <button onClick={this.leaveReview}> {" "}Submit{" "} </button>
                   <div>{this.state.review}</div> 
                </div>
            </div>
        )
    }
}

export default Review;

//this is for PUT


// ? this.state.newReview : this.state.newInput
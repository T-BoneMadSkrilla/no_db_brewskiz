import React, { Component } from "react";
import axios from "axios";

class Review extends Component{
        constructor(){
            super();

            this.state = {
            review: "This site is great I love the functionality! - EftinkGmoney",
            newReview: "",
            newInput: "",
            editReview: false
        };
    }

    handleReview = () => {
        this.setState({
            editReview: !this.state.editReview
        })
    }

    handleInput = (val) => {
        this.setState({
            newInput: val
        })
    }

    leaveReview = () => { 
        let {newInput} = this.state;
            axios.put('http://localhost:3002/api/breweries/update', {newInput}).then( res => {
                this.setState({
                    newReview: res.data,
                    editReview: !this.state.editReview,
                    newInput: ""
                })
            })
    }


    render(){
        return(
            <div>
                <h3>{this.state.newReview ? this.state.review : this.state.newInput}</h3>
                <div>
                    <input onChange={e => this.handleInput(e.target.value)}/>
                    <button onClick={this.leaveReview}> {" "}Submit{" "} </button>
                   {/* <div>{this.state.newReview}</div> */}
                </div>
            </div>
        )
    }
}

export default Review;

//this is for PUT


// ? this.state.newReview : this.state.newInput
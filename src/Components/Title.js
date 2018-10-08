import React, { Component } from "react";
import axios from "axios";

class Title extends Component {
    constructor(){
        super();

        this.state = {
            title: "Check out these Breweries",
            newTitle: "",
            input: "",
            editTitle: false
        }
    }

    handleTitle = () =>{
        this.setState({
            editTitle: !this.state.editTitle
        })
    }

    handleInput = value => {
        this.setState({
            input: value
        })
    }

    Enter = e =>{
        if (e.keyCode === 13){
            let { input } = this.state;
            axios
            .put('http://localhost:3002/api/breweries/title', {input}).then(res =>{
                this.setState({
                    newTitle: res.data,
                    editTitle: !this.state.editTitle,
                    input: ""
                })
            })
        }
    }



    render(){
         const{ editTitle, newTitle, title}=this.state
        return(
        <div>
            <div>
               {!editTitle ? (<h1 onClick={this.handleTitle}>{newTitle ? newTitle : title}</h1>
               ) : (
                   <div>
                       <input 
                        placeholder="Call it whatever you want, buddy"
                        onChange={e => this.handleInput(e.target.value)}
                        onKeyDown={this.Enter}
                       />

                   </div>
               )}
            </div>
        </div>
        )
    }

}

export default Title;
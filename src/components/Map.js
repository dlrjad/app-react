import React, {Component} from 'react';
import axios from 'axios';

export default class Map extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            message : []
        }
        
    }
    
    componentWillMount(){
        setTimeout( () => {
            axios({
                method:'get',
                url:'https://jsonplaceholder.typicode.com/posts'
            })  
            .then( (response) => {
                //console.log(response.data);
                this.setState({
                    message: response.data
                });
            })
            .catch(function (error) {
                console.log(error);
            });
        }, 3000);
        
    }
    
    renderPost = () => {
        return this.state.message.map(post => {
            return <p key={post.id}>{post.title} <br/> {post.body} </p>    
        })
    }
    
    render(){
        if(!this.state.message.length){
            return <h1>loading...</h1>
        }
        return(
            <div>
                {this.renderPost()}
            </div>
        );
    }
    
}


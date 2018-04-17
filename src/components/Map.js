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
            return <p key={post.id}>{post.title} <br/> {post.body} º</p> 
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
            /*<div>
                <Content
                    dataProp = {this.state.message} 
                    updateStateProp = {this.renderPost()}>
                </Content>
            </div>*/
            
        );
    }
}

const Content= (props) => {

    var listPost = [];
    for (let index = 0; index < props.dataProp.length; index++) {
        //console.log(props.dataProp[index]['title']);
        //console.log(props.dataProp[index]['body']);
        listPost.push(props.dataProp[index]['title'] + props.dataProp[index]['body'] + <br/>);
    }

    console.log(listPost);

    return (
        <div>
                {listPost}             
        </div>
    )
}

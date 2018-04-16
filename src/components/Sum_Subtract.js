import React, {Component} from 'react'
import '../my_style.css';

class Sum_Subtract extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            number: 0
        }
        
        this.handleCountClick = this.handleCountClick.bind(this);
    }
    
    handleCountClick(e) {
		if(e.target.id === "sum") {
			this.setState({
				number: this.state.number + 1
			});
		} else if (e.target.id === "subtract") {
			this.setState({
				number: this.state.number - 1
			});
		}
	}
    
    render(){
        return (
            <div className="content">
                <input className="op" id="sum" type="submit" value="+" onClick={this.handleCountClick}/>
                <input id="result" value={this.state.number} size="3"/>
                <input className="op" id="subtract" type="submit" value="-" onClick={this.handleCountClick}/>
            </div>
        );
    }
}

export default Sum_Subtract
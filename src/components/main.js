import React, {Component} from 'react'
import '../my_style.css';

export default class Thai extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            nombre: this.props.nombre || '',
            number: 0,
            data: 'Initial data...',
            time: new Date().toLocaleTimeString()
        }
        
        /*this.handleCountClick = this.handleCountClick.bind(this);
        this.updateState = this.updateState.bind(this);
        this.ticktock = this.ticktock.bind(this);*/
    }
        
    handleCountClick = event => {
		if(event.target.id === "sum") {
			this.setState({
				number: this.state.number + 1
			});
		} else if (event.target.id === "subtract") {
			this.setState({
				number: this.state.number - 1
			});
		}
	}
    
    updateState = event => {
        this.setState({data: 'Data updated...'});
        
    }
    
    ticktock = event => {
        console.log("e");
        this.setState({time: new Date().toLocaleTimeString()});
    }
    
    render(){
        return (
            <div className="content">
                <h1>Ejemplo</h1>
                <input id="nombre" value={this.state.nombre} placeholder="nombre" onChange={(e) => this.setState({nombre : e.target.value})}/>
                <p>Hola {this.state.nombre}</p>
                
                <hr/>
                
                <input className="op" id="sum" type="submit" value="+" onClick={(e) => this.setState({number: this.state.number +1})}/>
                <input id="result" value={this.state.number} size="3"/>
                <input className="op" id="subtract" type="submit" value="-" onClick={(e) => this.setState({number: this.state.number -1})}/>
                    
                <SumSubtract>
                    myDataProp = {this.state.number} 
                    updateStateProp = {this.updateState}
                </SumSubtract>

                <hr/>

                <Content 
                    myDataProp2 = {this.state.data} 
                    updateStateProp2 = {this.updateState}>
                </Content>


                <Tick>
                    myDataProp3 = {this.state.time}
                    updateStateProp3 = {setInterval(this.ticktock, 1000)};
                </Tick>

            </div>
        );
    }
    
}

/*componentes sin estado*/
const SumSubtract = (props) => {
    
    return (
        <div>
            <input className="op" id="sum" type="submit" value="+" onClick={props.updateStateProp}/>
            <input id="result" value={props.myDataProp} size="3"/>
            <input className="op" id="subtract" type="submit" value="-" onClick={props.updateStateProp}/>
        </div>
    );
    
}

const Content = (props) => {

    return (
     <div>
        <button className="click" onClick = {props.updateStateProp2}>CLICK</button>
        <h3>{props.myDataProp2}</h3>
     </div>
    );

}

const Tick = (props) => {

    return (
        <div>
            <h2>Hora: {props.myDataProp3}</h2>
        </div>
    )

}

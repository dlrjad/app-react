import React, {Component} from 'react'

import Main from './main';
import SumSubtract from './Sum_Subtract';
import Map from './Map';

export default class Container extends Component{
    render(){
        return(
            <div>
                <Main />
                <SumSubtract />
                <Map />
            </div>
        );
    }
}
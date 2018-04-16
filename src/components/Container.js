import React, {Component} from 'react'

import Thai from './main';
import Sum_Subtract from './Sum_Subtract';

export default class Container extends Component{
    render(){
        return(
            <div>
                <Thai />
                <Sum_Subtract />
            </div>
        );
    }
}
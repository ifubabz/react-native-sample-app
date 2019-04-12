import React, { Component } from 'react';
import { View } from 'react-native';

export default class DivideLine extends Component{
    static defaultProps = {
        borderColor:'#000000',
        borderWidth:1,
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 5,
    }
    
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style={{
                    borderColor: this.props.borderColor,
                    borderWidth: this.props.borderWidth,
                    marginTop: this.props.marginTop,
                    marginLeft: this.props.marginLeft,
                    marginRight: this.props.marginRight,
                    marginBottom: this.props.marginBottom,
                }}
            />
        )
    }
}
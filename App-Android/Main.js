import React, { Component } from 'react';
import {View,Text,Image,Button,Animated} from 'react-native';
import {createStore} from 'redux';
import AllReducers from './Reducers';
import {Provider} from 'react-redux';
import logo from './Res/logo-01.png';

const Store = createStore(AllReducers);
console.log("Outside Class",Store.getState().AuthReducer.LoggedIn);
export default class Main extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {LoggegInStatus:Store.getState().AuthReducer.LoggedIn};
	  this.position = new Animated.ValueXY(0,0);
	  Animated.timing(this.position,{
	  	toValue:{x:10,y:100},
	  	duration:400
	  }).start();
	}
	toggleState(){
		if(!this.state.LoggegInStatus){
			Store.dispatch({type:'USER_LOG_IN'});
			this.setState({LoggegInStatus:true});
		}
		else{
			Store.dispatch({type:'USER_LOG_OUT'});
			this.setState({LoggegInStatus:false});
		}
	}
	render() {

console.log("Inside Class",Store.getState().AuthReducer.LoggedIn);
		return (
			<Provider store ={Store}>
				<Animated.View style={this.position.getLayout()}>
				<View style={{}}>
					<Image source={logo} style={{position: 'relative',left:0 ,width:300,height: 300}}/>
					<Text>This is React</Text>
					<Button onPress={this.toggleState.bind(this)} title={`LoggedIn: ${this.state.LoggegInStatus}`}></Button>
				</View>
				</Animated.View>
			</Provider>
		);
	}
}

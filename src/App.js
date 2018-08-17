import React, { Component } from 'react';
import {
	Platform,
	Stylesheet,
	View,
	Text
} from 'react-native';
import Login from './views/Login';
type Props = {};
export default class App extends Component<Props> {
	render(){
		return (
			<View>
				<Login/>
			</View>
			);
	}
}
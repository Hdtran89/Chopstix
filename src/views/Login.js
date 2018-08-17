import React, {Component} from 'react';
import { ScrollView, Text, StyleSheet, View, Button } from 'react-native';
import Home from '../Home';
export default class Login extends Component {
 render() {
    return (
      <View>
        <Text style={styles.textFirst}> LOG IN </Text>
        <Button 
          title = "Log In"
          onPress={ () => this.props.navigation.navigate('Home') }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textFirst: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 300,
  },
});
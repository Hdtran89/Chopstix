import React, {Component} from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

export default class Profile extends Component {
 render() {
    return (
      <ScrollView>
        <Text style={styles.textFirst}> PROFILE</Text>
      </ScrollView>
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
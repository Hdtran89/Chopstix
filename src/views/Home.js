import React, { Component } from "react";
import { ScrollView, Text, StyleSheet } from 'react-native';

export default class Home extends Component {
 render() {
    return (
        <ScrollView>
          <Text style={styles.text}> HOME </Text>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 300,
  },
});
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Navbar = function (props) {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        backgroundColor: '#ff5b5b',
        alignItems: 'center',
        justifyContent: 'center',
  },
  text: {
      color: 'white',
      fontSize: 20
  }
});

export default Navbar
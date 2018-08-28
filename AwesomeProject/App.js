import React from 'react';
import { StyleSheet, Text,Image, View } from 'react-native';

class Greeting extends React.Component {
  render() {
    return (
      <View>
      <Text> Hello {this.props.name} </Text>
      <Image source = {this.props.picture} style={{width: 193, height: 110}}/>
      </View>
    );
  }
}


export default class App extends React.Component {
  render() {
    let pic = { url:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
  };
    return (
      <View style={styles.container}>
        <Greeting name = "Everyone" />
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Greeting picture = {pic} />
        <Text>BLEEEEH</Text>
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

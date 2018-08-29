import React from 'react';
import { StyleSheet, Text,TextInput,Image, View } from 'react-native';

/// Basic View and Props

//class Greeting extends React.Component {
//  render() {
//    return (
//      <View>
//      <Text> Hello {this.props.name} </Text>
//      <Image source = {this.props.picture} style={{width: 193, height: 110}}/>
//      </View>
//    );
//  }
//}


//export default class App extends React.Component {
//  render() {
//    let pic = { url:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//  };
//    return (
//      <View style={styles.container}>
//        <Greeting name = "Everyone" />
//        <Image source={pic} style={{width: 193, height: 110}}/>
//        <Greeting picture = {pic} />
//        <Text>BLEEEEH</Text>
//      </View>
//     
//    );
// }
//}

//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: '#fff',
//    alignItems: 'center',
//    justifyContent: 'center',
//  },
//});


// states and styles
/* class Blink extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = { isShowingText: true};

    //changing state every second
    setInterval(() => { 
    this.setState(previousState => {
      return {isShowingText: !previousState.isShowingText};
    });
  },1000);
  
}

render (){
  let display = this.state.isShowingText ? this.props.text: 'OH YEAH';
  return(
    <Text style={[styles.red, styles.bigblue]}> {display}</Text>
  );
}
}

export default class App extends React.Component {
render(){
  return(
//fixed dimensions
  <View style={styles.container}>
  <View style={{width: 400, height: 400, backgroundColor: 'steelblue'}} ><Blink text = "I am thinking" /></View>
  <View style={{width: 300, height: 300, backgroundColor: 'skyblue'}}><Blink text = "what" /></View>
  <View style={{width: 200, height: 200, backgroundColor: 'powderblue'}}><Blink text = "nothing" /></View>
  </View>

// flex dimensions
  // <View style={styles.container}>
  // <View style={{flex:1, backgroundColor: 'steelblue'}} ><Blink text = "I am thinking" /></View>
  // <View style={{flex:2, backgroundColor: 'skyblue'}}><Blink text = "what" /></View>
  // <View style={{flex:3, backgroundColor: 'powderblue'}}><Blink text = "nothing" /></View>
  // </View>

  );


}
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  container: {
   flex: 1,
   flexDirection:'row',
   justifyContent: 'space-evenly'
  //backgroundColor: '#ddd',
  // alignItems: 'center',
  // justifyContent: 'center',
 },
});
 */



 // User input

 export default class App extends React.Component{
    constructor(props){
     super(props);
     this.state = {text: ''};
   }
   render()
   {
     return(
       <View style= {{padding: 10}}>
       <TextInput
        style={{height: 40}} 
       placeholder="Write text here" 
       onChangeText = {(text) => this.setState({text})}
       />
       <Text style={{padding:10,fontSize:42}}>
       {this.state.text.split(' ').map((word) => word && '🍕').join(' ') }
       </Text>
       
       </View>
     );
   }

 }
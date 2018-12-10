import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Header from './Components/header';
import { Avatar } from 'react-native-elements';
import TodoScreen from './screens/Todo';
import Flexbox from './screens/Flexbox';

class App extends React.Component {

  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={styles.container}>
      <Header textIwant={"MARK"} /> 
      <View style={{ padding: 20, backgroundColor: 'blue'}} />
      <Header textIwant={"Zuckerburg"} />
      <View style={{ padding: 20}} />
      <Avatar
  size="xlarge"
  rounded
  source={{uri: "https://specials-images.forbesimg.com/imageserve/5ba415b6a7ea434e4c694719/416x416.jpg?background=000000&cropX1=1503&cropX2=4716&cropY1=21&cropY2=3236"}}
  onPress={() => console.log("I invade your privacy")}
  activeOpacity={0.7}
/>
        <Text style={styles.bigblue}>Dating App Profile: Billionaire, Founder of Facebook</Text>

        <Button
          title="*clap clap*"
          onPress={() => this.props.navigation.navigate('Todo')}
        />

        <Button
          title="year review"
          onPress={() => this.props.navigation.navigate('Flexbox')}
        />

      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: App,
  Todo: TodoScreen,
  FlexboxScreen: Flexbox,
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    alignItems: 'center',
  },
});

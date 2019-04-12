import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Privacy extends Component {
  static navigationOptions = {
    title: '개인 정보 정책',
    headerStyle: {
      backgroundColor: '#3367d6',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>Privacy</Text>         
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
      color: 'grey',
      fontSize: 32,
      fontWeight: 'bold',
  },
});
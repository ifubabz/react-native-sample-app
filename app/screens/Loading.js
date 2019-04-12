import React, {Component} from 'react';
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';

export default class Loading extends Component {
  constructor(props){
    super(props);
    this._authcheckAsync();
  }

  _authcheckAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    console.log(userToken);
    this.props.navigation.navigate(userToken?'main':'auth');
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>React Native Sample</Text>
        </View>
        <View>
          <Text style={styles.subtitle}>Powered by Company</Text>
        </View>
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
  titleWrapper: {
      flex: 1,
      justifyContent: 'center',
    },
  title:{
      color: 'grey',
      fontSize: 32,
      fontWeight: 'bold',
  },
  subtitle:{
      color: 'grey',
      fontWeight: '200',
      paddingBottom: 20
  }
});
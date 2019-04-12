import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Loading extends Component {
    componentWillMount(){
        setTimeout(()=>{
            this.props.navigation.navigate('auth');
        }, 1000);
    }    
    render() {
      return (
        <View style={styles.wrapper}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>With Baby</Text>
          </View>
          <View>
            <Text style={styles.subtitle}>Powered by Fubabz</Text>
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
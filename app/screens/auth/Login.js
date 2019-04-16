import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import LoginButton from 'components/LoginButton';
import DivideLine from 'components/DivideLine';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>LOGO</Text>         
        </View>
        <View style={styles.buttonWrapper}>
          <LoginButton
            buttonColor={'#db4437'}
            title={'Sign in with Google'}
            onPress={() => alert('Google')}
          />
          <LoginButton
            buttonColor={'#3b5998'}
            title={'Sign in with Facebook'}
            onPress={() => alert('Facebook')}
          />
          <LoginButton
            buttonColor={'#ffe812'}
            titleColor={'#000000'}
            title={'Sign in with Kakao'}
            onPress={() => this.props.navigation.navigate('main')}
          />
        </View>
        <View style={styles.footerWrapper}>
          <DivideLine 
            borderColor={'#ebebeb'}
            borderWidth={1}
          />
          <View style={styles.footerTextWrapper}>
            <Text style={styles.footerText}>계정 생성 및 로그인함으로써 당사 </Text>
            <TouchableOpacity>
              <Text style={styles.footerLinkText} onPress={() => this.props.navigation.navigate('terms')}  >이용 약관</Text>
            </TouchableOpacity>
            <Text style={styles.footerText}> 및 </Text>
            <TouchableOpacity>
              <Text style={styles.footerLinkText} onPress={() => this.props.navigation.navigate('privacy')} >개인 정보 정책</Text>
            </TouchableOpacity>
            <Text style={styles.footerText}>에 </Text>
          </View>
          <View style={styles.footerTextWrapper}>
            <Text style={styles.footerText}>동의하신 것으로 간주합니다.</Text>
          </View>
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
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
  },

  titleWrapper: {
    flex: 6,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
      color: 'grey',
      fontSize: 32,
      fontWeight: 'bold',
  },

  buttonWrapper: {
    flex: 2,
    backgroundColor: '#fff',
    width:'100%',
    marginBottom: 10,
  },

  footerWrapper: {
    flex: 1,
    backgroundColor: '#fff',
    width:'100%'
  },
  footerTextWrapper:{
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerText:{
    color: 'grey',
    fontSize: 12,
  },
  footerLinkText:{
    color: 'grey',
    fontSize: 12,
    textDecorationLine: 'underline',
  },
});
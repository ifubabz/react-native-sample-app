import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Linking, WebBrowser, AuthSession } from 'expo';
import LoginButton from 'components/LoginButton';
import DivideLine from 'components/DivideLine';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  getUrlParameter(url, name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(url);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };

  loginWithFacebook = async () =>{
      console.log('loginWithFacebook');
      let result = await WebBrowser.openAuthSessionAsync('https://192.168.40.17/login/oauth/facebook?redirect_uri=exp://192.168.40.17:19000');
      console.log("result", result);
      // this.setState({ result });
      if(result.type == 'success'){
        const token = this.getUrlParameter(result.url, 'token');
        console.log("token::", token);
        
        fetch('https://192.168.40.17/user/me', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log("responseJson::", responseJson);
        })
        .catch((error) => {
          console.log("ERROR::",error);
        });
      }
  };

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
            onPress={() => this.loginWithFacebook()}
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
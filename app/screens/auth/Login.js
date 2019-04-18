import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Linking, WebBrowser, AuthSession } from 'expo';
import LoginButton from 'components/LoginButton';
import DivideLine from 'components/DivideLine';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      user: undefined,
    }
  }

  _handleRedirect = event => {
    console.log('_handleRedirect');
    WebBrowser.dismissBrowser();
    let data = Linking.parse(event.url);
    this.setState({ user: data });
  };

  _addLinkingListener = () => {
    console.log('_addLinkingListener');
    Linking.addEventListener('url', this._handleRedirect);
  };

  _removeLinkingListener = () => {
    console.log('_removeLinkingListener');
    Linking.removeEventListener('url', this._handleRedirect);
  };

  loginWithFacebook = async () =>{
    // let url = 'https://192.168.40.17:9090/login/facebook';
    // let result = await WebBrowser.openBrowserAsync(url);

    // let redirectUrl = AuthSession.getRedirectUrl();
    // console.log("redirectUrl:",redirectUrl);
    // let result = await AuthSession.startAsync({
    //   authUrl: url + `&redirect_uri=${encodeURIComponent(redirectUrl)}`,
    // });
    // console.log("login result:", result);
    // this.setState({ user:result });

      console.log('loginWithFacebook');
      this._addLinkingListener();
      let result = await WebBrowser.openAuthSessionAsync(`https://192.168.40.17:9090/oauth2/authorize/facebook?redirect_uri=exp://192.168.40.17:19000`, 'exp://192.168.40.17:19000');
      this._removeLinkingListener();

      // let redirectUrl = AuthSession.getRedirectUrl();
      // console.log(redirectUrl)
      // let result = await WebBrowser.openAuthSessionAsync('https://192.168.40.17:9090/login/facebook', 'https://192.168.40.17:9090/');
      console.log(result);
      this.setState({ result });



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
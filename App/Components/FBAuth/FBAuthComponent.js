import React from 'react';
import {
  View,
} from 'react-native';
import {
  LoginManager,
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';
import firebase from 'react-native-firebase';
import styles from './styles';
import NavigationService from '../../Services/NavigationService';

const Analytics = firebase.analytics();

export default function FBAuthComponent({ props }) {
  const get_Response_Info = (error, result) => {
    if (error) {
      alert(`Error fetching FB data: ${error.toString()}`);
    } else {
      console.log('## FB response : ', JSON.stringify(result));
      const user = { name: 'dummy_name', password: 'dummy' };
      NavigationService.navigate('HomeTab');
      props.userLogin(user);
    }
  };

  const onLoginFinished = (error, result) => {
    console.log('@@@ result===========', result);
    if (error) {
      console.log('Error', error);
      alert(`login has error: ${result.error}`);
    } else if (result.isCancelled) {
      alert('login is cancelled.');
    } else {
      NavigationService.navigate('HomeTab');
      AccessToken.getCurrentAccessToken().then((data) => {
        Analytics.logEvent('login_method', { type: 'fb', email: '' });
        console.log('## FB access token : ', data.accessToken.toString());
        const processRequest = new GraphRequest(
          '/me?fields=name,picture.type(large)',
          null,
          get_Response_Info
        );
        // Start the graph request.
        new GraphRequestManager().addRequest(processRequest).start();
      });
    }
  };

  return (
    <View>
      <LoginButton
        style={styles.buttonStyle}
        onLoginFinished={
            (error, result) => {
              console.log('Here after login----');
              if (error) {
                console.log(`login has error: ${  result.error}`);
              } else if (result.isCancelled) {
                console.log('login is cancelled.');
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString());
                  }
                );
              }
            }
          }
        onLogoutFinished={LoginManager.logOut}
      />
    </View>
  );
}

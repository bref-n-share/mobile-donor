import React from 'react';
import {
  AsyncStorage,
  View,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: '👨‍💻 Login',
  }

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }

    this.signIn = this.signIn.bind(this);
  }

  onChangeEmail(email) {
    this.setState({email: email});
  }

  onChangePassword(password) {
    this.setState({password: password});
  }

  async signIn() {
    try {
      const response = await global.ApiConsumer.authenticate({
        email: this.state.email,
        password: this.state.password,
      });

      if (200 !== response.status) {
        Alert.alert(
          'Invalid credentials',
          'Wrong email or password'
        );
        return;
      }

      await AsyncStorage.setItem('userToken', response.data.token);
      this.props.navigation.navigate('App');
    } catch(error) {
      alert(error);
    }
  }

  render() {
    return (
      <View style={styles.parentView}>
        <View style={styles.centeredView}>
          <TextInput style={styles.textInput}
            placeholder="Email"
            onChangeText={email => this.onChangeEmail(email)}
            autoCapitalize = 'none'
            keyboardType="email-address"/>
          <TextInput style={styles.textInput}
            placeholder="Password"
            onChangeText={password => this.onChangePassword(password)}
            secureTextEntry={true} />
          <View style={styles.buttonsView}>
            <Button title="Register"
              onPress={() => this.props.navigation.navigate('Register')} />
            <Button title="Login"
              onPress={this.signIn} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    paddingTop: 80,
  },
  centeredView: {
    height: 200,
    justifyContent: 'space-around',
    backgroundColor: '#f2f2f2',
    margin: 20,
    padding: 20,
    borderRadius: 10
  },
  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  textInput: {
    fontSize: 20,
    marginBottom: 10,
  },
});

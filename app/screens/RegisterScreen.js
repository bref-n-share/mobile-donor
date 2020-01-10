import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Alert,
} from 'react-native';

export default class RegisterScreen extends React.Component {
  static navigationOptions = {
    title: '👨‍💻 Register',
  }

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    }

    this.register = this.register.bind(this);
  }

  onChangeEmail(email) {
    this.setState({email: email});
  }

  onChangePassword(password) {
    this.setState({password: password});
  }

  onChangeFirstName(firstName) {
    this.setState({firstName: firstName});
  }

  onChangeLastName(lastName) {
    this.setState({lastName: lastName});
  }

  async register() {
    try {
      const response = await global.ApiConsumer.register({
        email: this.state.email,
        password: this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
      });

      if (201 !== response.status) {
        Alert.alert(
          'Error while register',
          response.data.message
        );
        return;
      }

      Alert.alert(
        'Success',
        'Acount successfuly created, please log in'
      );

      this.props.navigation.goBack();
    } catch(error) {
      alert(error);
    }
  }

  render() {
    return (
      <View style={styles.parentView}>
        <View style={styles.centeredView}>
          <TextInput style={styles.textInput}
            onChangeText={name => this.onChangeLastName(name)}
            placeholder="Name"/>
          <TextInput style={styles.textInput}
            onChangeText={name => this.onChangeFirstName(name)}
            placeholder="Surname"/>
          <TextInput style={styles.textInput}
            placeholder="Password"
            onChangeText={password => this.onChangePassword(password)}
            secureTextEntry={true} />
          <TextInput style={styles.textInput}
            onChangeText={email => this.onChangeEmail(email)}
            autoCapitalize = 'none'
            keyboardType="email-address"
            placeholder="Email"/>
          <Button title="Create" onPress={this.register}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    paddingTop: 20,
  },
  centeredView: {
    backgroundColor: '#f2f2f2',
    margin: 20,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'flex-start'
  },
  textInput: {
    fontSize: 20,
    marginBottom: 10,
  },
  userImage: {
    maxHeight: 120,
    maxWidth: 120,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#adadad'
  },
});

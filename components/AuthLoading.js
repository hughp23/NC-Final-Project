import React from 'react';
import {
  View, Image, StyleSheet, Text,
} from 'react-native';
import profileStyles from '../styles/Profile.styles';

const logo = require('../assets/Connections.png');

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#1D9FBF',
  },
  logo: {
    resizeMode: 'contain',
  },
});

class AuthLoading extends React.Component {
  componentDidMount() {
    this.props.navigation.navigate('loginFlow');
  }

  render() {
    return (
      <View style={styles.background}>
        <Image style={styles.logo} source={logo} />
        <Text style={profileStyles.name}>Vagabonding</Text>
      </View>
    );
  }
}
export default AuthLoading;

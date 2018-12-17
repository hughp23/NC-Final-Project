import React, { Component } from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import { Button, Icon } from 'native-base';
import PropTypes from 'prop-types';
import MenuWrapper from './MenuWrapper';
import Chat from './Chat';
import colours from '../styles/Colours.styles';

export default class ChatScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTransparent: false,
    headerLeft: (
      <Button
        iconLeft
        transparent
        onPress={() => {
          navigation.getParam('buttonChange')();
        }}
        width={50}
      >
        <Icon type="FontAwesome" name="bars" />
      </Button>
    ),
    title: `Chat with ${navigation.getParam('selectedUsername')} (${navigation.getParam(
      'selectedUserUsername',
    )})`,
    headerStyle: {
      backgroundColor: colours.header.backgroundColor,
    },
    headerTintColor: colours.header.color,
  });

  state = {
    button: false,
  };

  componentDidMount() {
    const { navigation } = this.props;
    navigation.setParams({ buttonChange: this.buttonChange });
  }

  buttonChange = () => {
    this.setState((state) => {
      const buttonClick = !state.button;
      return { button: buttonClick };
    });
  };

  render() {
    const { navigation } = this.props;
    const currentUserID = navigation.getParam('currentUserID');
    const currentUsername = navigation.getParam('currentUsername');
    const selectedUserID = navigation.getParam('selectedUserID');

    return (
      <View style={{ flex: 1 }}>
        <MenuWrapper navigation={navigation} currentPage="chat" buttonState={this.state.button}>
          <>
            <KeyboardAvoidingView
              behavior="padding"
              style={{ flex: 1 }}
              keyboardVerticalOffset={30}
            >
              <Chat
                currentUserID={currentUserID}
                currentUsername={currentUsername}
                selectedUserID={selectedUserID}
              />
            </KeyboardAvoidingView>
          </>
        </MenuWrapper>
      </View>
    );
  }
}

ChatScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

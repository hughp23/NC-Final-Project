import React, { Component } from 'react';
import { GiftedChat, Bubble, Avatar } from 'react-native-gifted-chat';
import LoadingComponent from './LoadingComponent';
import { colorSettings } from '../styles/Colors.styles';

const { getPreviousMessages, sendMessage, chatsRef } = require('../Functionality/chatFunctions');

class Chat extends Component {
  state = {
    messages: [],
    doc: '',
    loading: true,
  };

  componentWillMount() {
    const { currentUserID, selectedUserID } = this.props;
    getPreviousMessages(currentUserID, selectedUserID)
      .then((messageObj) => {
        chatsRef.doc(messageObj.doc).onSnapshot((doc) => {
          const messages = doc.data().messages.reverse();
          this.setState({
            doc: messageObj.doc,
            messages,
            loading: false,
          });
        });
      })
      .catch((err) => {
        this.props.navigation.navigate('Error', { error: err });
      });
  }

  onSend(messages = []) {
    sendMessage(messages[0], this.state.doc).catch((err) => {
      this.props.navigation.navigate('Error', { error: err });
    });
  }

  renderBubble = props => (
    <Bubble
      {...props}
      textStyle={{
        left: {
          color: colorSettings.chatThemText,
        },
        right: {
          color: colorSettings.chatYouText,
        },
      }}
      wrapperStyle={{
        left: {
          backgroundColor: colorSettings.chatThemBubble,
        },
        right: {
          backgroundColor: colorSettings.chatYouBubble,
        },
      }}
    />
  );

  renderAvatar = props => (
    <Avatar
      {...props}
      imageStyle={{
        left: { backgroundColor: colorSettings.chatThemBubble },
        right: { backgroundColor: colorSettings.chatThemBubble },
      }}
    />
  );

  render() {
    const { currentUserID, currentUsername } = this.props;
    const { loading } = this.state;
    if (loading) {
      return <LoadingComponent />;
    }
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{ _id: currentUserID, name: currentUsername }}
        renderBubble={this.renderBubble}
        renderAvatar={this.renderAvatar}
      />
    );
  }
}

export default Chat;

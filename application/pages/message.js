/**
 * 消息页
 */

import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Button } from 'react-native';
import { connect } from 'react-redux';
import { s } from '../common/styles';
import TestTwo from './testTwo';

class Message extends Component {
  constructor(...props) {
    super(...props)
    this.state = {
    }
  }
  render() {
    return (
      <View style={s.main}>
        <Text>消息页</Text>
        <Button
          onPress={() => this.props.navigator.push({ name: '测试页1', component: TestTwo })}
          title="点击进入内页"
          color="#35DD82"
          accessibilityLabel="点击进入内页"
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // messageData: state.messageReducer,
  }
}

export default connect(mapStateToProps)(Message);
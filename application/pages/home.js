/**
 * 首页
 */

import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Button } from 'react-native';
import { connect } from 'react-redux';
import { s } from '../common/styles';
import { msgAction } from '../redux/action/messageAction';
import { addBackPressListener } from '../common/backHandler';
import TestOne from './testOne';

class Home extends Component {
  constructor(...props) {
    super(...props)
    this.state = {
    }
    addBackPressListener(this.props.navigator)
  }
  render() {
    let netstatus = this.props.netData.status;
    return (
      <View style={s.main}>
        <Text>首页</Text>
        <Text>当前网络状态：{netstatus}</Text>
        <Button
          onPress={() => this.props.dispatch(msgAction())}
          title="点击改变消息右上角数字"
          color="#841584"
          accessibilityLabel="点击改变消息右上角数字"
        />
        <Button
          onPress={() => this.props.navigator.push({ name: '测试页1', component: TestOne })}
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
    homeData: state.homeReducer,
    netData: state.netReducer,
  }
}

export default connect(mapStateToProps)(Home);
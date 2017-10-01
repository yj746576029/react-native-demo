/**
 * 测试页1
 */

import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Button } from 'react-native';
import { connect } from 'react-redux';
import { s } from '../common/styles';
import { addBackPressListener } from '../common/backHandler';

class TestOne extends Component {
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
        <Text>测试页1</Text>
        <Button
          onPress={() => this.props.navigator.pop()}
          title="返回"
          accessibilityLabel="返回"
        />
      </View>
    );
  }

  componentDidUpdate() {
    alert()
  }

}

const mapStateToProps = (state) => {
  return {
    netData: state.netReducer,
  }
}

export default connect(mapStateToProps)(TestOne);
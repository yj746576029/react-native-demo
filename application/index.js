/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Image, Text, NetInfo } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './pages/home';
import Message from './pages/message';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { connect } from 'react-redux';
import { onlineAction, offlineAction } from './redux/action/netAction'
import { s } from './common/styles';
import Toast from 'react-native-simple-toast';

class Index extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      selectedTab: 'home'
    }
    this._addNetListener();
  }

  _addNetListener() {
    NetInfo.addEventListener('connectionChange', (connectionInfo) => {
      if (connectionInfo.type == 'none') {
        Toast.show('网络已断开');
        this.props.dispatch(offlineAction());
      } else {
        this.props.dispatch(onlineAction());
      }
    });
  }

  render() {
    return (
      <TabNavigator
        sceneStyle={{
          //backgroundColor: 'green',
          //paddingBottom: this.state.defaultTabHeight
        }}
        tabBarStyle={{
          //backgroundColor:'pink',  
          //overflow:'hidden'  
        }}
        tabBarShadowStyle={{
          //backgroundColor: 'green'
        }}
        hidesTabTouch={false}
      >
        <TabNavigator.Item
          title="首页"
          renderIcon={() => <Icon name="home" size={20} />}
          renderSelectedIcon={() => <Icon name="home" size={20} color={'red'} />}
          onPress={() => this.setState({ selectedTab: 'home' })}
          selected={this.state.selectedTab === 'home'}
          //titleStyle={{ color: "#999" }}
          selectedTitleStyle={{ color: "red" }}
        >
          <Home {...this.props} />
        </TabNavigator.Item>
        <TabNavigator.Item
          title="消息"
          renderIcon={() => <Icon name="commenting" size={20} />}
          renderSelectedIcon={() => <Icon name="commenting" size={20} color={'red'} />}
          onPress={() => this.setState({ selectedTab: 'message' })}
          selected={this.state.selectedTab === 'message'}
          //titleStyle={{ color: "#999" }}
          selectedTitleStyle={{ color: "red" }}
          renderBadge={() => <Text style={this.props.messageData.count < 10 ? s.nums : s.numb}>{this.props.messageData.count > 99 ? '99+' : this.props.messageData.count}</Text>}
        >
          <Message {...this.props} />
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messageData: state.messageReducer,
    netData: state.netReducer,
  }
}

export default connect(mapStateToProps)(Index);
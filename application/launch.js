/**
 * 欢迎页面
 */

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Index from './index';
import { Navigator } from 'react-native-deprecated-custom-components'
import { Provider} from 'react-redux';
import Store from "./redux/store/store";

export default class Launch extends Component {
  constructor(...props) {
    super(...props);
  }

  render() {
    let defaultName = 'Welcome';
    let defaultComponent = Welcome;
    return (
      <Provider store={Store}>
        <Navigator
          initialRoute={{ name: defaultName, component: defaultComponent }}
          configureScene={(route) => {
            return Navigator.SceneConfigs.PushFromRight;
          }}
          renderScene={(route, navigator) => {
            let Component = route.component;
            return <Component {...route.params} navigator={navigator} />
          }} />
      </Provider>
    );
  }
}

class Welcome extends Component {
  constructor(...props) {
    super(...props)
    this.state = {
      time: 1,   //倒计时
    }
  }
  
  render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>
            欢迎界面！{this.state.time}秒后跳转！
          </Text>
        </View>
      );
  }

  componentDidMount(){
    this._timeOuter();
  }

  _timeOuter() {
    this.setTimeout = setTimeout(() => {
      this.props.navigator.replace({ name: '导航', component: Index })
    }, this.state.time * 1000);
    this.setInterval = setInterval(() => this.setState({ time: this.state.time - 1 }), 1000)
  }

  componentWillUnmount() {
    this.setTimeout && clearTimeout(this.setTimeout);
    this.setInterval && clearInterval(this.setInterval);
  }
}
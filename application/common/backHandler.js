/**
 * 监听安卓物理back键
 */

import { BackHandler, Platform } from 'react-native';
import Toast from 'react-native-simple-toast';

export const addBackPressListener = (navigator) => {
  let lastBackPressed = 0;
  if (Platform.OS == 'android') {
    BackHandler.addEventListener('hardwareBackPress', () => {
      const nav = navigator;
      const routers = nav.getCurrentRoutes();
      if (routers.length > 1) {
        const top = routers[routers.length - 1];
        if (top.ignoreBack || top.component.ignoreBack) {
          // 路由或组件上决定这个界面忽略back键
          return true;
        }
        const handleBack = top.handleBack || top.component.handleBack;
        if (handleBack) {
          // 路由或组件上决定这个界面自行处理back键
          return handleBack();
        }
        // 默认行为： 退出当前界面。
        nav.pop();
        return true;
      } else {
        if (new Date().getTime() - lastBackPressed <= 3000) {
          //最近3秒内按过back键，可以退出应用。
          return false;
        }
        lastBackPressed = new Date().getTime();
        Toast.show('再按一次退出应用');
        return true;
      }
    });
  }
}

// export const removeBackPressListener = () => {
//   BackHandler.removeEventListener('hardwareBackPress');
// }
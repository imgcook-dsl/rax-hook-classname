'use strict';
import { createElement, useState, useEffect, memo } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Picture from 'rax-picture';

import styles from './CenterTab.css';

export default memo(props => {
  return (
    <View className="main">
      <View className="color_8" />
      <View className="normal_div_4">
        <Text className="text_3" lines={1}>
          精选
        </Text>
        <View className="colorDiv_7" />
      </View>
      <Text className="txt_9" lines={1}>
        上新
      </Text>
      <Text className="word_10" lines={1}>
        男装
      </Text>
      <Text className="text_4" lines={1}>
        电脑
      </Text>
      <Text className="txt_10" lines={1}>
        母婴
      </Text>
      <Text className="word_11" lines={1}>
        进口
      </Text>
      <View className="normal_div_5">
        <View className="block_13">
          <Picture
            className="icon_14"
            source={{ uri: 'https://img.alicdn.com/tfs/TB1vz9ghTM11u4jSZPxXXahcXXa-56-56.png' }}
            autoScaling={false}
          />
          <Text className="text_5" lines={1}>
            搜索
          </Text>
        </View>
      </View>
    </View>
  );
});

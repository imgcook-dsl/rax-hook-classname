'use strict';
import { createElement, useState, useEffect, memo } from 'rax';
import View from 'rax-view';
import Picture from 'rax-picture';
import Text from 'rax-text';

import styles from './Tab.css';

export default memo(props => {
  return (
    <View className="ft">
      <View className="normal_div_8">
        <Picture
          className="icon_17"
          source={{ uri: 'https://img.alicdn.com/tfs/TB16pxhRqL7gK0jSZFBXXXZZpXa-92-74.png' }}
          autoScaling={false}
        />
        <Text className="txt_17" lines={1}>
          推荐
        </Text>
      </View>
      <View className="normal_div_9">
        <View className="icon_18">
          <Picture
            className="icon_19"
            source={{ uri: 'https://img.alicdn.com/tfs/TB1i7laREz1gK0jSZLeXXb9kVXa-86-80.png' }}
            autoScaling={false}
          />
          <Picture
            className="icon_20"
            source={{ uri: 'https://img.alicdn.com/tfs/TB1neJ9eypE_u4jSZKbXXbCUVXa-38-48.png' }}
            autoScaling={false}
          />
        </View>
        <Text className="txt_18" lines={1}>
          品牌
        </Text>
      </View>
      <View className="normal_div_10">
        <View className="icon_21">
          <Picture
            className="icon_22"
            source={{ uri: 'https://img.alicdn.com/tfs/TB1e7XiRrr1gK0jSZFDXXb9yVXa-82-80.png' }}
            autoScaling={false}
          />
          <View className="block_20">
            <Picture
              className="dot_1"
              source={{ uri: 'https://img.alicdn.com/tfs/TB1yHlZcZieb18jSZFvXXaI3FXa-8-8.png' }}
              autoScaling={false}
            />
            <Picture
              className="dot_2"
              source={{ uri: 'https://img.alicdn.com/tfs/TB1hwJuRpP7gK0jSZFjXXc5aXXa-8-8.png' }}
              autoScaling={false}
            />
            <Picture
              className="dot_3"
              source={{ uri: 'https://img.alicdn.com/tfs/TB1g9VzdtTfau8jSZFwXXX1mVXa-8-8.png' }}
              autoScaling={false}
            />
          </View>
          <Picture
            className="icon_23"
            source={{ uri: 'https://img.alicdn.com/tfs/TB1DiBbRxD1gK0jSZFsXXbldVXa-54-24.png' }}
            autoScaling={false}
          />
        </View>
        <Text className="txt_19" lines={1}>
          日历
        </Text>
      </View>
      <View className="normal_div_11">
        <Picture
          className="icon_24"
          source={{ uri: 'https://img.alicdn.com/tfs/TB1aZ73ekcx_u4jSZFlXXXnUFXa-80-80.png' }}
          autoScaling={false}
        />
        <Text className="txt_20" lines={1}>
          我的
        </Text>
      </View>
    </View>
  );
});

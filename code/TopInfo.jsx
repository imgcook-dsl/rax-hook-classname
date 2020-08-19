'use strict';
import { createElement, useState, useEffect, memo } from 'rax';
import View from 'rax-view';
import Picture from 'rax-picture';
import Text from 'rax-text';

import styles from './TopInfo.css';

export default memo(props => {
  return (
    <View className="hd">
      <View className="color" />
      <View className="layerWrap">
        <Picture
          className="layer"
          source={{ uri: 'https://img.alicdn.com/tfs/TB1Svp9eypE_u4jSZKbXXbCUVXa-1500-732.png' }}
          autoScaling={false}
        />
        <View className="block">
          <View className="group">
            <Picture
              className="dot"
              source={{ uri: 'https://img.alicdn.com/tfs/TB1MZRAh8Bh1e4jSZFhXXcC9VXa-6-16.png' }}
              autoScaling={false}
            />
            <Text className="txt" lines={1}>
              9:41
            </Text>
            <View className="container">
              <Picture
                className="mark"
                source={{ uri: 'https://img.alicdn.com/tfs/TB1MJQ3ekcx_u4jSZFlXXXnUFXa-68-44.png' }}
                autoScaling={false}
              />
              <Picture
                className="icon"
                source={{ uri: 'https://img.alicdn.com/tfs/TB1mTFzdtTfau8jSZFwXXX1mVXa-62-44.png' }}
                autoScaling={false}
              />
              <View className="normal_div">
                <View className="colorDiv" />
              </View>
            </View>
          </View>
          <View className="block_1">
            <View className="block_2">
              <Picture
                className="icon_1"
                source={{ uri: 'https://img.alicdn.com/tfs/TB1bxJKiaNj0u4jSZFyXXXgMVXa-96-96.png' }}
                autoScaling={false}
              />
              <Picture
                className="icon_2"
                source={{ uri: 'https://img.alicdn.com/tfs/TB1ZZXZcZieb18jSZFvXXaI3FXa-66-14.png' }}
                autoScaling={false}
              />
            </View>
            <Picture
              className="icon_3"
              source={{ uri: 'https://img.alicdn.com/tfs/TB1o4JKiaNj0u4jSZFyXXXgMVXa-42-74.png' }}
              autoScaling={false}
            />
            <Picture
              className="logo"
              source={{ uri: 'https://img.alicdn.com/tfs/TB1ok0iRrr1gK0jSZFDXXb9yVXa-294-76.png' }}
              autoScaling={false}
            />
          </View>
          <View className="group_1">
            <View className="group_2">
              <Picture
                className="icon_4"
                source={{ uri: 'https://img.alicdn.com/tfs/TB1FEtqRET1gK0jSZFrXXcNCXXa-44-44.png' }}
                autoScaling={false}
              />
              <Text className="word" lines={1}>
                品牌折扣
              </Text>
            </View>
            <View className="group_3">
              <Picture
                className="icon_5"
                source={{ uri: 'https://img.alicdn.com/tfs/TB17uXhREY1gK0jSZFCXXcwqXXa-44-44.png' }}
                autoScaling={false}
              />
              <Text className="word_1" lines={1}>
                正品保障
              </Text>
            </View>
            <View className="group_4">
              <Picture
                className="icon_6"
                source={{ uri: 'https://img.alicdn.com/tfs/TB1e.lrRBr0gK0jSZFnXXbRRXXa-44-44.png' }}
                autoScaling={false}
              />
              <Text className="word_2" lines={1}>
                全场包邮
              </Text>
            </View>
            <View className="marketingWrap">
              <Picture
                className="icon_7"
                source={{ uri: 'https://img.alicdn.com/tfs/TB16nFzdtTfau8jSZFwXXX1mVXa-44-44.png' }}
                autoScaling={false}
              />
              <Text className="marketing" lines={1}>
                7天退换
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
});

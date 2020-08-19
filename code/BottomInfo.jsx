'use strict';
import { createElement, useState, useEffect, memo } from 'rax';
import View from 'rax-view';
import Picture from 'rax-picture';
import Text from 'rax-text';

import styles from './BottomInfo.css';

export default memo(props => {
  return (
    <View className="row">
      <View className="floorBgWrap">
        <Picture
          className="floorBg"
          source={{ uri: 'https://img.alicdn.com/tfs/TB1IgVKiaNj0u4jSZFyXXXgMVXa-1500-208.png' }}
          autoScaling={false}
        />
        <View className="block_18">
          <View className="block_19">
            <Text className="title_1" lines={1}>
              浪琴男士腕表
            </Text>
            <Text className="txt_benifit" lines={1}>
              满2300减200
            </Text>
          </View>
          <View className="group_16">
            <Text className="txt_16" lines={1}>
              30333人
            </Text>
            <Text className="info_3" lines={1}>
              正在抢该优惠券
            </Text>
          </View>
        </View>
        <Picture
          className="smallItem_1"
          source={{ uri: 'https://img.alicdn.com/tfs/TB1MEg8Rhz1gK0jSZSgXXavwpXa-212-208.png' }}
          autoScaling={false}
        />
        <View className="buttonWrap_2">
          <Text className="button_2" lines={1}>
            立即抢券
          </Text>
        </View>
      </View>
      <Picture
        className="smallPic"
        source={{ uri: 'https://img.alicdn.com/tfs/TB1SNRtRuL2gK0jSZFmXXc7iXXa-208-208.png' }}
        autoScaling={false}
      />
      <View className="empty" />
    </View>
  );
});

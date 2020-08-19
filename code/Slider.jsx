'use strict';
import { createElement, useState, useEffect, memo } from 'rax';
import View from 'rax-view';
import Slider from 'rax-slider';
import Picture from 'rax-picture';

import styles from './Slider.css';

export default memo(props => {
  return (
    <View className="block_3">
      <Slider className="normal_div_1" width={'750'} height={'280'} autoPlay={true} loop={true}>
        {[{}, {}, {}].map((item, index) => {
          return (
            <View key={index} className="bgWrap">
              <Picture
                className="bg"
                source={{ uri: 'https://img.alicdn.com/tfs/TB1MzFbRvb2gK0jSZK9XXaEgFXa-1428-560.png' }}
                autoScaling={false}
              />
              <View className="block_4">
                <View className="color_1" />
                <View className="color_2" />
                <View className="color_3" />
              </View>
            </View>
          );
        })}
      </Slider>
    </View>
  );
});

'use strict';
import { createElement, useState, useEffect, memo } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Picture from 'rax-picture';
import Video from 'rax-video';

import styles from './List.css';

export default memo(props => {
  return (
    <View className="submain">
      <View className="normal_div_6">
        <Text className="price_7" lines={1}>
          ¥
        </Text>
        <View className="itemWrap">
          <Picture
            className="item"
            source={{ uri: 'https://img.alicdn.com/tfs/TB1POtnRxv1gK0jSZFFXXb0sXXa-616-590.png' }}
            autoScaling={false}
          />
        </View>
        <Text className="count" lines={1}>
          29.9
        </Text>
        <View className="originPriceWrap">
          <Text className="text_6" lines={1}>
            券后价
          </Text>
          <Text className="originPrice" lines={1}>
            ¥98
          </Text>
        </View>
      </View>
      <View className="backgroundWrap">
        <Picture
          className="background"
          source={{ uri: 'https://img.alicdn.com/tfs/TB17JE3ekcx_u4jSZFlXXXnUFXa-696-582.png' }}
          autoScaling={false}
        />
        <Text className="shopTitle" lines={1}>
          三只松鼠旗舰店
        </Text>
        <Text className="info_2" lines={1}>
          仅剩2天 已售2096件
        </Text>
        <View className="actionBgWrap">
          <Picture
            className="actionBg"
            source={{ uri: 'https://img.alicdn.com/tfs/TB1S2h9eypE_u4jSZKbXXbCUVXa-616-196.png' }}
            autoScaling={false}
          />
          <View className="priceWrap_3">
            <Text className="rmb" lines={1}>
              ¥
            </Text>
            <Text className="price_8" lines={1}>
              50
            </Text>
          </View>
          <View className="block_14">
            <Text className="text_7" lines={1}>
              聚划算专享
            </Text>
            <Text className="txt_11" lines={1}>
              下单立减
            </Text>
          </View>
          <Text className="word_12" lines={2}>
            抢券
          </Text>
        </View>
      </View>
      <Picture
        className="entryPic"
        source={{ uri: 'https://img.alicdn.com/tfs/TB1iZ8mRAY2gK0jSZFgXXc5OFXa-398-200.png' }}
        autoScaling={false}
      />
      <View className="normal_div_7">
        <Text className="money" lines={1}>
          ¥
        </Text>
        <View className="block_15">
          <View className="group_14">
            <Picture
              className="icon_15"
              source={{ uri: 'https://img.alicdn.com/tfs/TB1fVxiRAL0gK0jSZFAXXcA9pXa-20-24.png' }}
              autoScaling={false}
            />
            <Text className="txt_12" lines={1}>
              00:35
            </Text>
          </View>
          <Video
            className="entryPic_1"
            source={{ uri: 'https://img.alicdn.com/tfs/TB1ShpuRpP7gK0jSZFjXXc5aXXa-560-466.png' }}
            autoScaling={false}
            poster={'https://img.alicdn.com/tfs/TB1ShpuRpP7gK0jSZFjXXc5aXXa-560-466.png'}
            autoPlay={true}
            loop={true}
          />
        </View>
        <View className="block_16">
          <View className="block_17">
            <Picture
              className="icon_16"
              source={{ uri: 'https://img.alicdn.com/tfs/TB1wEZ8Rhz1gK0jSZSgXXavwpXa-68-56.png' }}
              autoScaling={false}
            />
          </View>
          <Text className="word_13" lines={1}>
            Midea/美的
          </Text>
        </View>
        <Text className="title" lines={1}>
          美的小型家用电饭煲
        </Text>
        <Text className="txt_13" lines={1}>
          已售7543件
        </Text>
        <View className="buttonWrap_1">
          <Text className="button_1" lines={1}>
            可享24期免息
          </Text>
        </View>
        <View className="originPriceWrap_1">
          <Text className="num_4" lines={1}>
            1599
          </Text>
          <Text className="txt_14" lines={1}>
            券后价
          </Text>
          <Text className="originPrice_1" lines={1}>
            ¥5999
          </Text>
        </View>
        <View className="buttonBgWrap">
          <Picture
            className="buttonBg"
            source={{ uri: 'https://img.alicdn.com/tfs/TB12MpgREH1gK0jSZSyXXXtlpXa-616-158.png' }}
            autoScaling={false}
          />
          <View className="moneyWrap">
            <Text className="rmb_1" lines={1}>
              ¥
            </Text>
            <Text className="money_1" lines={1}>
              200
            </Text>
            <View className="group_15">
              <Text className="word_14" lines={1}>
                聚划算专享
              </Text>
              <Text className="text_8" lines={1}>
                下单立减
              </Text>
            </View>
          </View>
          <Text className="txt_15" lines={2}>
            抢券
          </Text>
        </View>
      </View>
    </View>
  );
});

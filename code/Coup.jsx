'use strict';
import { createElement, useState, useEffect, memo } from 'rax';
import View from 'rax-view';
import Picture from 'rax-picture';
import Text from 'rax-text';
import ScrollView from 'rax-scrollview';
import Countdown from 'rax-countdown';

import styles from './Coup.css';

export default memo(props => {
  return (
    <View className="bd">
      <View className="normal_div_2">
        <View className="colorDiv_1" />
        <View className="block_5">
          <View className="group_5">
            <Picture
              className="icon_8"
              source={{ uri: 'https://img.alicdn.com/tfs/TB1lH39RkL0gK0jSZFtXXXQCXXa-80-68.png' }}
              autoScaling={false}
            />
            <Text className="info" lines={1}>
              拉人抢大额品牌券，最高
            </Text>
            <Text className="num" lines={1}>
              1000
            </Text>
            <Text className="word_3" lines={1}>
              元
            </Text>
          </View>
          <View className="block_6">
            <Text className="info_1" lines={1}>
              每天限量放送
            </Text>
            <Picture
              className="image"
              source={{ uri: 'https://img.alicdn.com/tfs/TB10bpfRuH2gK0jSZJnXXaT1FXa-14-26.png' }}
              autoScaling={false}
            />
          </View>
        </View>
        <View className="color_6" />
        <View className="block_7">
          <Picture
            className="logo_1"
            source={{ uri: 'https://img.alicdn.com/tfs/TB1NDhzdtTfau8jSZFwXXX1mVXa-172-10.png' }}
            autoScaling={false}
          />
          <ScrollView
            className="group_6"
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            <View className="container_1">
              <Picture
                className="largeIcon"
                source={{ uri: 'https://img.alicdn.com/tfs/TB1VXXiRAL0gK0jSZFAXXcA9pXa-140-144.png' }}
                autoScaling={false}
              />
              <Text className="txt_1" lines={1}>
                分期免息
              </Text>
            </View>
            <View className="container_2">
              <Picture
                className="largeIcon_1"
                source={{ uri: 'https://img.alicdn.com/tfs/TB1di4bRvb2gK0jSZK9XXaEgFXa-156-138.png' }}
                autoScaling={false}
              />
              <Text className="txt_2" lines={1}>
                品牌清仓
              </Text>
            </View>
            <View className="group_7">
              <Picture
                className="logo_2"
                source={{ uri: 'https://img.alicdn.com/tfs/TB1g.66fsVl614jSZKPXXaGjpXa-196-128.png' }}
                autoScaling={false}
              />
              <Text className="text" lines={1}>
                大额神券
              </Text>
            </View>
            <View className="container_3">
              <Picture
                className="largeIcon_2"
                source={{ uri: 'https://img.alicdn.com/tfs/TB1gqdhRpT7gK0jSZFpXXaTkpXa-130-148.png' }}
                autoScaling={false}
              />
              <Text className="txt_3" lines={1}>
                领红包
              </Text>
            </View>
            {true && (
              <View className="block_8">
                <Text className="word_4" lines={1}>
                  量贩优选
                </Text>
                <Picture
                  className="largeIcon_3"
                  source={{ uri: 'https://img.alicdn.com/tfs/TB1rsc9RkL0gK0jSZFtXXXQCXXa-146-142.png' }}
                  autoScaling={false}
                />
              </View>
            )}
            {true && (
              <View className="block_8">
                <Text className="word_4" lines={1}>
                  优选量贩
                </Text>
                <Picture
                  className="largeIcon_3"
                  source={{ uri: 'https://img.alicdn.com/tfs/TB1rsc9RkL0gK0jSZFtXXXQCXXa-146-142.png' }}
                  autoScaling={false}
                />
              </View>
            )}
          </ScrollView>
        </View>
        <View className="colorDiv_2" />
        <View className="block_9">
          <View className="block_10">
            <View className="group_8">
              <Text className="text_1" lines={1}>
                淘抢购
              </Text>
              <View className="buttonWrap">
                <Countdown
                  className="button"
                  text={'04:18:26'}
                  lines={1}
                  timeRemaining={3000000}
                  tpl={'{h}:{m}:{s}'}
                  timeStyle={{ color: 'rgba(255, 0, 48, 1.00)', fontSize: '22px' }}
                  secondStyle={{ color: 'rgba(255, 0, 48, 1.00)', fontSize: '22px' }}
                  textStyle={{ color: 'rgba(255, 0, 48, 1.00)', fontSize: '22px' }}
                  timeWrapStyle={{ color: 'rgba(255, 0, 48, 1.00)', fontSize: '22px' }}
                />
              </View>
              <View className="labelWrap">
                <Picture
                  className="label"
                  source={{ uri: 'https://img.alicdn.com/tfs/TB19J0lRAT2gK0jSZFkXXcIQFXa-158-60.png' }}
                  autoScaling={false}
                />
                <Text className="word_5" lines={1}>
                  12点场
                </Text>
              </View>
            </View>
            <View className="grid">
              <View className="col">
                <Picture
                  className="pic"
                  source={{ uri: 'https://img.alicdn.com/tfs/TB1KaC0b4vbeK8jSZPfXXariXXa-296-296.png' }}
                  autoScaling={false}
                />
                <Text className="priceLabel" lines={1}>
                  爆卖3.5万件
                </Text>
                <Text className="price" lines={1}>
                  ¥3999
                </Text>
              </View>
              <View className="col_1">
                <Picture
                  className="pic_1"
                  source={{ uri: 'https://img.alicdn.com/tfs/TB13_xXRuL2gK0jSZPhXXahvXXa-296-296.png' }}
                  autoScaling={false}
                />
                <Text className="priceLabel_1" lines={1}>
                  已售7543件
                </Text>
                <Text className="price_1" lines={1}>
                  ¥599
                </Text>
              </View>
            </View>
          </View>
          <View className="color_7" />
          <View className="group_9">
            <Text className="benifit" lines={1}>
              好货精选
            </Text>
            <View className="grid_1">
              <View className="col_2">
                <View className="normal_div_3">
                  <Picture
                    className="smallItem"
                    source={{ uri: 'https://img.alicdn.com/tfs/TB1bp0hRpT7gK0jSZFpXXaTkpXa-296-296.png' }}
                    autoScaling={false}
                  />
                </View>
                <Text className="priceLabel_2" lines={1}>
                  限时抢购
                </Text>
                <Text className="price_2" lines={1}>
                  ¥24
                </Text>
              </View>
              <View className="col_3">
                <Picture
                  className="normal_image"
                  source={{ uri: 'https://img.alicdn.com/tfs/TB1z5HFh79l0K4jSZFKXXXFjpXa-296-296.png' }}
                  autoScaling={false}
                />
                <Text className="priceLabel_3" lines={1}>
                  抢半价
                </Text>
                <Text className="price_3" lines={1}>
                  ¥68
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View className="block_11">
          <Text className="text_2" lines={1}>
            百亿补贴
          </Text>
          <View className="block_12">
            <Text className="txt_4" lines={1}>
              限量抢购
            </Text>
            <Picture
              className="image_1"
              source={{ uri: 'https://img.alicdn.com/tfs/TB1A.A8Rhz1gK0jSZSgXXavwpXa-14-26.png' }}
              autoScaling={false}
            />
          </View>
        </View>
        <View className="grid_2">
          <View className="col_4">
            <View className="colorDiv_3" />
            <Picture
              className="smallImg"
              source={{ uri: 'https://img.alicdn.com/tfs/TB1jKV9eypE_u4jSZKbXXbCUVXa-298-298.png' }}
              autoScaling={false}
            />
            <View className="group_10">
              <Picture
                className="logo_3"
                source={{ uri: 'https://img.alicdn.com/tfs/TB136o.RXY7gK0jSZKzXXaikpXa-268-60.png' }}
                autoScaling={false}
              />
              <Text className="word_6" lines={1}>
                补贴1000元
              </Text>
              <Picture
                className="icon_9"
                source={{ uri: 'https://img.alicdn.com/tfs/TB1UJU7gBFR4u4jSZFPXXanzFXa-26-60.png' }}
                autoScaling={false}
              />
            </View>
            <View className="priceWrap">
              <Text className="price_4" lines={1}>
                ¥
              </Text>
              <Text className="txt_5" lines={1}>
                补贴价
              </Text>
              <Text className="num_1" lines={1}>
                4400
              </Text>
            </View>
          </View>
          <View className="col_5">
            <View className="colorDiv_4" />
            <Picture
              className="smallImg_1"
              source={{ uri: 'https://img.alicdn.com/tfs/TB1wzs.RXY7gK0jSZKzXXaikpXa-298-298.png' }}
              autoScaling={false}
            />
            <View className="group_11">
              <Picture
                className="logo_4"
                source={{ uri: 'https://img.alicdn.com/tfs/TB1zE4hRAL0gK0jSZFAXXcA9pXa-268-60.png' }}
                autoScaling={false}
              />
              <Text className="word_7" lines={1}>
                补贴500元
              </Text>
              <Picture
                className="icon_10"
                source={{ uri: 'https://img.alicdn.com/tfs/TB1PrXBi639YK4jSZPcXXXrUFXa-26-60.png' }}
                autoScaling={false}
              />
            </View>
            <View className="priceWrap_1">
              <Text className="price_5" lines={1}>
                ¥
              </Text>
              <Text className="txt_6" lines={1}>
                补贴价
              </Text>
              <Text className="num_2" lines={1}>
                1449
              </Text>
            </View>
          </View>
          <View className="col_6">
            <View className="colorDiv_5" />
            <View className="smallImg_2">
              <Picture
                className="logo_5"
                source={{ uri: 'https://img.alicdn.com/tfs/TB1A.w8Rhz1gK0jSZSgXXavwpXa-268-60.png' }}
                autoScaling={false}
              />
              <Text className="txt_7" lines={1}>
                补贴500元
              </Text>
              <Picture
                className="icon_11"
                source={{ uri: 'https://img.alicdn.com/tfs/TB17t8lRAT2gK0jSZFkXXcIQFXa-26-60.png' }}
                autoScaling={false}
              />
            </View>
            <Picture
              className="group_12"
              source={{ uri: 'https://img.alicdn.com/tfs/TB19E4hRAL0gK0jSZFAXXcA9pXa-298-204.png' }}
              autoScaling={false}
            />
            <View className="priceWrap_2">
              <Text className="price_6" lines={1}>
                ¥
              </Text>
              <Text className="txt_8" lines={1}>
                补贴价
              </Text>
              <Text className="num_3" lines={1}>
                682
              </Text>
            </View>
          </View>
          <View className="col_7">
            <View className="colorDiv_6">
              <Picture
                className="img"
                source={{ uri: 'https://img.alicdn.com/tfs/TB1WOTFh79l0K4jSZFKXXXFjpXa-280-280.png' }}
                autoScaling={false}
              />
            </View>
            <View className="smallImg_3">
              <Picture
                className="logo_6"
                source={{ uri: 'https://img.alicdn.com/tfs/TB1OKXlRAT2gK0jSZFkXXcIQFXa-268-60.png' }}
                autoScaling={false}
              />
              <Text className="word_8" lines={1}>
                补贴20元
              </Text>
              <Picture
                className="icon_12"
                source={{ uri: 'https://img.alicdn.com/tfs/TB17QtiRrr1gK0jSZFDXXb9yVXa-26-60.png' }}
                autoScaling={false}
              />
            </View>
            <View className="group_13">
              <Text className="logo_7" lines={1}>
                ¥
              </Text>
              <Text className="word_9" lines={1}>
                补贴价
              </Text>
              <Text className="icon_13" lines={1}>
                43
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
});

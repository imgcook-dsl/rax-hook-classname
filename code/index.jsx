'use strict';
import { createElement, useState, useEffect } from 'rax';
import View from 'rax-view';
import TopInfo from './TopInfo';
import Slider from './Slider';
import Coup from './Coup';
import CenterTab from './CenterTab';
import List from './List';
import BottomInfo from './BottomInfo';
import Tab from './Tab';
import { IndexProvider } from './context';
import styles from './index.css';

export default function Page() {
  return (
    <IndexProvider>
      <View className="page">
        <View className="box">
          <TopInfo />
          <Slider />
          <Coup />
          <CenterTab />
          <List />
          <BottomInfo />
          <Tab />
        </View>
      </View>
    </IndexProvider>
  );
}

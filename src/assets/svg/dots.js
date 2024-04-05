import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const DotsIcon = () => {
  return (
    <View>
      <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
        <Path
          d="M19 13C19.5522 13 20 12.5522 20 12C20 11.4478 19.5522 11 19 11C18.4478 11 18 11.4478 18 12C18 12.5522 18.4478 13 19 13Z"
          fill="white"
          stroke="white"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12 13C12.5522 13 13 12.5522 13 12C13 11.4478 12.5522 11 12 11C11.4478 11 11 11.4478 11 12C11 12.5522 11.4478 13 12 13Z"
          fill="white"
          stroke="white"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M5 13C5.55228 13 6 12.5522 6 12C6 11.4478 5.55228 11 5 11C4.44772 11 4 11.4478 4 12C4 12.5522 4.44772 13 5 13Z"
          fill="white"
          stroke="white"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default DotsIcon;

import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const PlusIcon = () => {
  return (
    <View>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none">
        <Path
          d="M1 9H9M9 9H17M9 9V1M9 9V17"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default PlusIcon;

import React from 'react';
import { StyleSheet } from 'react-native';

import Svg, { Path } from 'react-native-svg';

const Colors = {
  bulbOn: '#F0CA5C',
  bulbOff: '#fff',
};
function BulbSvg({ on, onPress }, ...props) {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 384 512'
      fill={`${on ? '#F0CA5C' : Colors.bulbOff}`}
      height={50}
      width={50}
      style={[styles.bulbSvg, { opacity: on ? 1 : 0.6 }]}
      onPress={onPress}
      {...props}
    >
      <Path d='M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7l.128-39.2H112l.1 39.2zM191.4.013C89.44.326 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8 16.53 18.84 42.34 58.23 52.22 91.45.031.25.094.517.125.782h160.2c.031-.265.094-.516.125-.782 9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1 368 78.61 288.9-.284 191.4.013zm.6 95.997c-44.13 0-80 35.89-80 79.1 0 9.69-7.2 16.89-16 16.89s-16-7.2-16-16c0-61.76 50.25-111.1 112-111.1 8.844 0 16 7.159 16 16s-7.2 15.11-16 15.11z' />
    </Svg>
  );
}

export default BulbSvg;
const styles = StyleSheet.create({
  bulbSvg: {
    transform: [{ rotate: '180deg' }],
    zIndex: 1,
  },
});

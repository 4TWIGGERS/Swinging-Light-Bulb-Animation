import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, {
  Circle,
  Defs,
  LinearGradient,
  Mask,
  Path,
  Stop,
} from 'react-native-svg';
import d from './path';

const textLightOn = '#ebd1a4';
const textLightOff = '#222';

const TextContent = (props) => {
  return (
    <View style={styles.textContextContainer}>
      <Svg width='100%' height='100%'>
        <Defs>
          <LinearGradient
            id='Gradient'
            gradientUnits='userSpaceOnUse'
            x1='230'
            y1='650'
            x2='0'
            y2='0'
          >
            <Stop
              offset='90%'
              stopColor={props.on ? textLightOn : textLightOff}
              stopOpacity={props.on ? '0.8' : '1'}
            />
            <Stop
              offset='75%'
              stopColor={props.on ? textLightOn : textLightOff}
              stopOpacity={props.on ? '0.5' : '1'}
            />
            <Stop
              offset='50%'
              stopColor={props.on ? textLightOn : textLightOff}
              stopOpacity={props.on ? '0.3' : '1'}
            />
          </LinearGradient>
          <Mask
            id='Mask'
            maskUnits='userSpaceOnUse'
            x='0'
            y='0'
            width='400'
            height='500'
          >
            <Circle cx='50' cy='50' r='440' fill='white' />
          </Mask>
        </Defs>
        <Path mask='url (#Mask)' d={d} fill='url(#Gradient)' x={0} y={0} />
      </Svg>
    </View>
  );
};

export default TextContent;

const styles = StyleSheet.create({
  textContextContainer: {
    paddingTop: 270,
    width: '100%',
    height: '100%',
    paddingLeft: 30,
  },
});

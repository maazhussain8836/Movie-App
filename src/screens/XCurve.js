import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';


const { width } = Dimensions.get('window');

const XCurve = ({ data }) => {
  const height = 200;
  const padding = 20;

  // Calculate the x and y coordinates for the curve
  const curvePoints = data.map((value, index) => {
    const x = ((width - padding * 2) / (data.length - 1)) * index + padding;
    const y = height - (value / 100) * height;
    return { x, y };
  });

  // Generate the path for the curve
  const path = curvePoints.reduce(
    (acc, point, index) =>
      `${acc}${index === 0 ? 'M' : 'L'}${point.x},${point.y}`,
    ''
  );

  return (
    <View style={styles.container}>
      <Svg height={height} width={width}>
        <Path d={`${path} L${width},${height} L0,${height} Z`} fill="#E0E0E0" />
      </Svg>
      <View style={styles.labelsContainer}>
        {data.map((value, index) => (
          <Text key={index} style={styles.label}>
            {value}%
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    alignItems: 'center',
  },
  labelsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: -30,
  },
  label: {
    fontSize: 12,
    color: '#333333',
  },
});

export default XCurve;

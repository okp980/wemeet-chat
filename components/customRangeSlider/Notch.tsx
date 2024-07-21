import React, {memo} from 'react';
import {View, StyleSheet, ViewProps} from 'react-native';

const Notch = (props: ViewProps) => {
  return <View style={styles.root} {...props} />;
};

export default memo(Notch);

const styles = StyleSheet.create({
  root: {
    width: 8,
    height: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#E94057',
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 8,
  },
});

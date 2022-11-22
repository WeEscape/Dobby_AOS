import React from 'react';
import { Image } from '@rneui/themed';
import { StyleSheet, SafeAreaView, Text, View, Button, TextInput } from 'react-native';
import { ImageSourcePropType, ImageURISource } from 'react-native';

interface InputBoxProps {
  src?: ImageSourcePropType | ImageURISource;
  title?: string;
  children?: React.ReactNode;
}

const InputBox: React.FC<InputBoxProps> = (props) => {
  const { src, title, children } = props;

  return (
    <View style={styles.InputView}>
      <View style={styles.TitleView}>
        <Image source={src} style={styles.icon} />
        <Text style={styles.text}>{title}</Text>
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  InputView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 24,
  },
  TitleView: {
    flexDirection: 'row',
    width: '15%',
    // marginRight: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  text: {
    paddingLeft: 5,
    color: '#000',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default InputBox;

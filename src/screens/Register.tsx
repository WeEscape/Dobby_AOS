import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View, TextInput, Pressable } from 'react-native';
import InputBox from '../components/screens/register/InputBox';

//Icon image
import Schedule from '../assets/icon/weekly_on.png';
import Refresh from '../assets/icon/refresh.png';
import Profile from '../assets/icon/profile.png';
import Hamburger from '../assets/icon/hamburger_menu.png';
import Memo from '../assets/icon/daily_on.png';

const Register = ({ navigation, router }) => {
  const [title, setTitle] = useState('');
  const [excute, setExcute] = useState();
  const [repeat, setRepeat] = useState();
  const [repeactEndDate, setRepeatEndDate] = useState();
  const [userIds, setUseIds] = useState([]);
  const [categoryId, setCategoryId] = useState('');
  const [memo, setMemo] = useState('');

  return (
    <SafeAreaView style={styles.wrapper}>
      <View>
        <TextInput style={styles.registerInput} placeholder="집안일을 등록하세요" />
        <InputBox src={Schedule} title="일정">
          <TextInput style={styles.input} placeholder="테스트 인풋" />
        </InputBox>
        <InputBox src={Refresh} title="반복">
          <TextInput style={styles.input} placeholder="테스트 인풋" />
        </InputBox>
        <InputBox src={Refresh} title="반복종료">
          <TextInput style={styles.input} placeholder="테스트 인풋" />
        </InputBox>
        <InputBox src={Profile} title="담당자">
          <TextInput style={styles.input} placeholder="테스트 인풋" />
        </InputBox>
        <InputBox src={Hamburger} title="카테고리">
          <TextInput style={styles.input} placeholder="테스트 인풋" />
        </InputBox>
        <InputBox src={Memo} title="메모" />
        <TextInput style={styles.memoInput} placeholder="테스트 인풋" multiline numberOfLines={4} editable maxLength={40} />
      </View>
      <Pressable style={styles.button} onPress={() => console.log('버튼')}>
        <Text style={styles.buttonText}>저장하기</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 30,
    marginRight: 30,
    width: '100%',
    height: '100%',
  },
  icon: {
    width: 20,
    height: 20,
  },
  registerInput: {
    width: '88%',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#AEAEAE',
    fontSize: 14,
  },
  input: {
    width: '65%',
    marginLeft: 30,
    height: 30,
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#AEAEAE',
    fontSize: 14,
  },
  memoInput: {
    width: '88%',
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#AEAEAE',
  },
  button: {
    width: '88%',
    backgroundColor: '#1056FB',
    height: 50,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  buttonText: {
    color: '#FFFFFF',
  },
});
export default Register;

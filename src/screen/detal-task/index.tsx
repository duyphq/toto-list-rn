import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import FixedContainer from '../../components/FixedContainer';
import MyTextInput from '../../components/MyTextInput';
import {Colors, text} from '../../constant/styles';
import {widthScale} from '../../utils/scalingUtils';
import {useDispatch} from 'react-redux';
import {addTodo} from '../../redux/reducer/todoReducer';
import {useNavigation} from '@react-navigation/native';

const DetailTask = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [title, setTitle] = useState<string>('');
  const createTask = () => {
    const todo = {
      id: Date.now().toString(),
      title: title,
      completed: false,
    };
    dispatch(addTodo(todo));
    navigation.goBack();
  };
  const cancel = () => {
    navigation.goBack();
  };
  return (
    <FixedContainer textHeader={'Create To do'}>
      <View style={styles.containContent}>
        <MyTextInput
          style={styles.textTitle}
          placeholder="Title"
          onChangeText={setTitle}
          multiline
        />
      </View>
      <View style={styles.containButton}>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: Colors.red}]}
          onPress={cancel}>
          <Text style={styles.textButton}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={createTask}>
          <Text style={styles.textButton}>Create</Text>
        </TouchableOpacity>
      </View>
    </FixedContainer>
  );
};

export default DetailTask;

const styles = StyleSheet.create({
  containContent: {
    flex: 1,
  },
  button: {
    backgroundColor: Colors.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: widthScale(20),
    flex: 1,
  },
  containButton: {
    flexDirection: 'row',
  },
  textButton: {
    ...text.H3,
    color: Colors.white,
  },
  textTitle: {
    ...text.H1,
  },
});

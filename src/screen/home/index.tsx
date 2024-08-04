import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import FixedContainer from '../../components/FixedContainer';
import {ICON} from '../../assets';
import {FlatList} from 'react-native-gesture-handler';
import ItemTask, {ItemTaskProps} from './components/ItemTask';
import {heightScale, widthScale} from '../../utils/scalingUtils';
import {Colors} from '../../constant/styles';
import {useNavigation} from '@react-navigation/native';
import {ROUTE_KEY} from '../../constant/constant';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTodoList} from '../../redux/reducer/todoReducer';

const Home = () => {
  const navigation = useNavigation();
  const onCreateTask = () => navigation.navigate(ROUTE_KEY.DetailTask);
  const todoList = useSelector((state: any) => state.todoList.todoList);
  console.log('🚀 ~ Home ~ todoList:', todoList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodoList());
  }, []);

  const renderItem = ({item}: {item: ItemTaskProps}) => {
    console.log('🚀 ~ renderItem ~ item:', item);
    return (
      <ItemTask
        id={item.id}
        completed={item.completed}
        title={item.title}
        dispatch={dispatch}
        isPriority={item.isPriority}
      />
    );
  };
  return (
    <FixedContainer>
      <FlatList data={todoList} renderItem={renderItem} />
      <TouchableOpacity style={styles.floatButton} onPress={onCreateTask}>
        <Image style={styles.iconPLus} source={ICON.plus} />
      </TouchableOpacity>
    </FixedContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  floatButton: {
    backgroundColor: Colors.primaryColor,
    width: widthScale(60),
    height: widthScale(60),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: widthScale(40),
    position: 'absolute',
    bottom: widthScale(40),
    right: heightScale(30),
  },
  iconPLus: {
    width: widthScale(20),
    height: widthScale(20),
    tintColor: Colors.white,
  },
});

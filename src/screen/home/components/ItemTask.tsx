import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ICON} from '../../../assets';
import {Colors, text} from '../../../constant/styles';
import {widthScale} from '../../../utils/scalingUtils';
import {
  deleteTodo,
  priorityTodo,
  toggleTodo,
} from '../../../redux/reducer/todoReducer';

export interface ItemTaskProps {
  id: string;
  title: string;
  completed: boolean;
  isPriority: boolean;
  dispatch: any;
}

const ItemTask = ({
  id,
  title,
  completed,
  dispatch,
  isPriority,
}: ItemTaskProps) => {
  const onCompleted = () => {
    dispatch(toggleTodo(id));
  };
  const onDelete = () => {
    dispatch(deleteTodo(id));
  };
  const onPriority = () => {
    dispatch(priorityTodo(id));
  };
  return (
    <View style={styles.contain}>
      <TouchableOpacity onPress={onCompleted}>
        <Image
          style={styles.iconCheck}
          source={completed ? ICON.check : ICON.un_check}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.containGroupButton}>
        <TouchableOpacity onPress={onPriority}>
          <Image
            style={styles.iconStar}
            source={isPriority ? ICON.star_fill : ICON.star_outline}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete}>
          <Image style={styles.iconDelete} source={ICON.delete} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemTask;

const styles = StyleSheet.create({
  contain: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: widthScale(20),
    paddingVertical: widthScale(15),
    marginVertical: widthScale(5),
    marginHorizontal: widthScale(10),
    borderRadius: 10,
    borderWidth: 0.5,
  },
  iconCheck: {
    tintColor: Colors.primaryColor,
    width: widthScale(25),
    height: widthScale(25),
    marginRight: 10,
  },
  iconDelete: {
    width: widthScale(20),
    height: widthScale(20),
  },
  iconStar: {
    width: widthScale(25),
    height: widthScale(25),
    tintColor: Colors.yellow,
    marginRight: widthScale(16),
  },
  title: {
    ...text.H4,
    flex: 1,
  },
  containGroupButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

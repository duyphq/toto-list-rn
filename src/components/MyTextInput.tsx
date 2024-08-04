import React, {forwardRef, useImperativeHandle, useRef, useState} from 'react';
import {TextInput, TextInputProps} from 'react-native';

interface MyTextInputProps extends TextInputProps {
  onChangeText: (text: string) => void;
}

const MyTextInput = forwardRef(({...props}: MyTextInputProps, ref) => {
  const [value, setValue] = useState<string>('');
  const textInputRef = useRef<TextInput>(null);

  useImperativeHandle(ref, () => ({
    getText: () => value,
    setInitialText: (text: string) => setInitialTextFunc(text),
  }));

  const setInitialTextFunc = (text: string) => {
    textInputRef?.current?.setNativeProps({text: text});
    setValue(text);
  };

  const onMyChangeTextFunc = (text: string) => {
    setValue(text);
    if (props?.onChangeText) {
      props?.onChangeText(text);
    }
  };

  return (
    <TextInput
      ref={textInputRef}
      {...props}
      onChangeText={onMyChangeTextFunc}
    />
  );
});

export default MyTextInput;

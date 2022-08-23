import i18n from '../Translation/i18n';
import React, {useState} from 'react';
import {View, Button} from 'react-native';

import { Translator } from "../Translation/Translator";

const TButton = props => {
  console.log(props);
  const [language, setLanguage] = useState('en');

  const handleOnclick =(lang) => {
    e.preventDefault();
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
    // const {i18n} = props
    // const changeLanguage = lng => {i18n.changeLanguage(lng)}
  };
  return (
    <View >
      <Button value="ar" onPress={handleOnclick} title="Arabic"></Button>
      <Button value="en" onPress={handleOnclick} title="English"></Button>
      <Button value="hi" onPress={handleOnclick} title="Hindi"></Button>

      <Translator lang={language} />
    </View>
  );
};

export default TButton;

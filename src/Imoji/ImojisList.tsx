//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';
import EmojiSelector, {Categories} from 'react-native-emoji-selector';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {RfH, RfW} from '../utils/helpers';
import Images from '../themes/Images';

// create a component
const ImojisList = () => {
  const [Emoji, setEmoji] = useState('');
  const [textInput, settextInput] = useState('');
  const [show, setshow] = useState(false);
  const handleOnPress = () => {
    setshow(!show);
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="hello to all"
        style={styles.input}
        onChangeText={settextInput}
        value={textInput}
      />
      <View style={{flex:1, height:50,width:200, justifyContent:'center', alignItems:'center'}}>
        <TouchableOpacity onPress={handleOnPress}>
          <Image source={Images.SmileEmoji} style={{height:30,width:30}}></Image>
        </TouchableOpacity>
      </View>
      {show ? (
        <View
          style={{flex: 1, height: RfH(200), width: RfW(335)}}>
          <EmojiSelector
            category={Categories.symbols}
            onEmojiSelected={emoji => {
              setEmoji(emoji);
              settextInput(textInput + emoji);
            }}
          />
        </View>
      ) : null}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  input: {
    height: 40,
    width: 400,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: Colors.black,
    position:'static'  },
});

//make this component available to the app
export default ImojisList;

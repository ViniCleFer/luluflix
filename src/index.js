import React, {useState, useCallback, useEffect} from 'react';
import {
  Button,
  KeyboardAvoidingView,
  Alert,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import logo from './assets/lulu.png';
// import btn from './assets/but.png';

const App = () => {
  const [playing, setPlaying] = useState(false);
  const [btnVisible, setBtnVisible] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false);
      setBtnVisible(true);
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  useEffect(() => {
    setPlaying((prev) => !prev);
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fc0fc0',
      paddingTop: '60%',
    },
    video: {
      flex: 1,
    },
    btn: {
      alignSelf: 'center',
    },
  });

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar backgroundColor="transparent" barStyle="light-content" />
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={'iee2TATGMyI'}
        onChangeState={onStateChange}
        style={styles.video}
      />
      {btnVisible && (
        // <Image style={styles.btn} source={btn} onPress={togglePlaying} />
        <Icon
          name="play-circle-outline"
          size={80}
          color="#fff"
          onPress={togglePlaying}
          style={styles.btn}
        />
      )}
    </KeyboardAvoidingView>
  );
};

export default App;

import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
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
  const [icon, setIcon] = useState(false);
  const [btnVisible, setBtnVisible] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === 'playing') {
      setIcon(true);
    }
    if (state === 'paused') {
      setBtnVisible(true);
      setIcon(false);
    }
    if (state === 'ended') {
      setBtnVisible(true);
      setIcon(false);
    }
  }, []);

  useEffect(() => {
    setPlaying((prev) => !prev);
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: '#fc0fc0',
      backgroundColor: 'rgba(255,155,183, 0.99)',
      paddingTop: '20%',
    },
    logoContainer: {
      width: 240,
      height: 68,
      alignSelf: 'center',
      marginBottom: 50,
    },
    logo: {
      width: '100%',
      height: '100%',
    },
    video: {
      flex: 1,
    },
    btn: {
      alignSelf: 'center',
      marginTop: -50,
    },
  });

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar backgroundColor="transparent" barStyle="light-content" />
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={logo} onPress={togglePlaying} />
      </View>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={'jfgHwRKFdG8'}
        onChangeState={onStateChange}
        style={styles.video}
      />
      {btnVisible && (
        <Icon
          name={icon ? 'pause-circle-outline' : 'play-circle-outline'}
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

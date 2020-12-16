import React, {useState, useCallback, useEffect} from 'react';
import {Button, View, Alert} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

// import { Container } from './styles';

const App = () => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  // const togglePlaying = useCallback(() => {
  //   setPlaying((prev) => !prev);
  // }, []);

  useEffect(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <View style={{flex: 1}}>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={'iee2TATGMyI'}
        onChangeState={onStateChange}
      />
      {/* <Button title={playing ? 'pause' : 'play'} onPress={togglePlaying} /> */}
    </View>
  );
};

export default App;

import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment';

const Timer = ({label, resetInterval}) => {
  const [elapsedTime, setElapsedTime] = useState(0);

  const loadTime = async () => {
    const savedTime = await AsyncStorage.getItem(label);
    if (savedTime) {
      setElapsedTime(parseInt(savedTime));
    }
  };

  const saveElapsedTime = async () => {
    await AsyncStorage.setItem(label, elapsedTime.toString());
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setElapsedTime(prevTime => prevTime + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const resetTimer = async () => {
      setElapsedTime(0);
      await saveElapsedTime();
    };

    const resetIntervalId = setInterval(
      resetTimer,
      resetInterval * 60 * 60 * 1000,
    );

    return () => clearInterval(resetIntervalId);
  }, [resetInterval]);

  useEffect(() => {
    saveElapsedTime();
  }, [elapsedTime]);

  useEffect(() => {
    loadTime();
  }, []);

  const timer = time => {
    const leftTime = resetInterval * 60 * 60 - time;
    const duration = moment.duration(leftTime, 'seconds');
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();
    return `${hours}:${minutes}:${seconds}`;
  };

  return <Text>{`${timer(elapsedTime)}`}</Text>;
};

export default Timer;

import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import Timer from '../components/Timer';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerStyle}>Duty Status</Text>
      </View>
      <View style={styles.optionsContainer}>
        <View style={styles.optionsView}>
          <Text style={styles.optionText}>Off Duty</Text>
        </View>
        <View
          style={[
            styles.optionsView,
            {backgroundColor: 'red', borderColor: 'red'},
          ]}>
          <Text style={styles.optionText}>On Duty</Text>
        </View>
      </View>
      <View style={styles.optionsContainer}>
        <View style={styles.optionsView}>
          <Text style={styles.optionText}>Sleeper</Text>
        </View>
        <View style={styles.optionsView}>
          <Text style={styles.optionText}>Driving</Text>
        </View>
      </View>

      <View
        style={{
          borderWidth: 1,
          backgroundColor: '#fff',
          borderColor: '#fff',
          elevation: 10,
          borderRadius: 10,
          marginTop: 20,
          paddingVertical: 20,
          position: 'relative',
        }}>
        <View
          style={[
            {
              position: 'absolute',
              top: -10,
              right: 0,
              backgroundColor: '#a0522d',
              borderRadius: 10,
            },
          ]}>
          <Text
            style={[
              styles.optionText,
              {marginHorizontal: 7, marginVertical: 5, fontWeight: 'bold'},
            ]}>
            LogBook
          </Text>
        </View>
        <View style={styles.optionsContainer}>
          <View>
            <Text style={[styles.title, {marginTop: 0}]}>Driving</Text>
            <View style={styles.circle}>
              <Timer label="Driving Clock" resetInterval={1} />
              <Text style={styles.text}>left</Text>
            </View>
          </View>
          <View>
            <Text style={styles.title}></Text>
            <View style={[styles.circle, {borderColor: '#fff'}]}>
              <Text
                style={[
                  styles.text,
                  {
                    color: 'red',
                    fontWeight: 'bold',
                    fontSize: 25,
                    marginTop: -50,
                  },
                ]}>
                N/A
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.optionsContainer}>
          <View>
            <Text style={styles.title}>Shift</Text>
            <View style={styles.circle}>
              <Timer label="Shift Clock" resetInterval={2} />
              <Text style={styles.text}>left</Text>
            </View>
          </View>
          <View>
            <Text style={styles.title}>Cycle </Text>
            <View style={styles.circle}>
              <Timer label="Cycle Clock" resetInterval={24} />
              <Text style={styles.text}>left</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcdcdc',
    alignItems: 'center',
  },
  headerStyle: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  headerView: {
    borderWidth: 1,
    margin: 10,
    borderColor: '#6495ed',
    backgroundColor: '#6495ed',
    width: windowWidth - 50,
    borderRadius: 5,
  },
  optionsView: {
    borderWidth: 1,
    margin: 5,
    borderColor: '#778899',
    backgroundColor: '#778899',
    width: windowWidth / 2.4,
    height: windowHeight / 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  optionText: {
    color: '#fff',
    fontSize: 17,
    marginHorizontal: 35,
  },
  circle: {
    borderWidth: 14,
    marginHorizontal: 15,
    borderColor: '#6495ed',
    width: 130,
    height: 130,
    borderRadius: 70,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    // color: '#000',
    // fontSize: 15,
    // fontWeight: 'bold',
  },
  title: {
    color: '#000',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 10,
  },
});

export default HomeScreen;

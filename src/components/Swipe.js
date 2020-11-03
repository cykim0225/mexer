import React, { useState, useEffect } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, Animated, SafeAreaView, PanResponder } from 'react-native';
import dummyData from '../../dummyData';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Ionicons';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const data = dummyData;

const Swipe = () => {
  const position = new Animated.ValueXY();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemNum, setitemNum] = useState(0);

  const rotate = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: ['-10deg', '0deg', '10deg'],
    extrapolate: 'clamp',
  });
  const rotateAndTranslate = {
    transform:[{
      rotate: rotate,
    },
    ...position.getTranslateTransform()],
  };
  const nextCardOpacity = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [1, 0, 1],
    extrapolate: 'clamp',
  });
  const nextCardScale = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [1, 0.8, 1],
    extrapolate: 'clamp',
  });

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (e, gestureState) => true,
    onPanResponderMove: (e, gestureState) => {
      position.setValue({ x: gestureState.dx, y: gestureState.dy })
    },
    onPanResponderRelease: (e, gestureState) => {
      if (gestureState.dx > 120) {
        Animated.spring(position, {
          toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy },
          useNativeDriver: true,
        }).start(() => {
          setCurrentIndex(currentIndex + 1);
          position.setValue({ x: 0, y: 0 })
        })
      } else if (gestureState.dx < -120) {
        Animated.spring(position, {
          toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy },
          useNativeDriver: true,
        }).start(() => {
          setCurrentIndex(currentIndex + 1);
          position.setValue({ x: 0, y: 0 })
        })
      } else {
        Animated.spring(position, {
          toValue: { x: 0, y: 0 },
          friction: 4,
          useNativeDriver: true,
        }).start()
      }
    }
  })

  const handlePressXorCheck = () => {

  }

  renderFoods = () => {
    return data.map((item, i) => {
      if (i < currentIndex) {
        return null;
      } else if (i === currentIndex) {
        return (
          <Animated.View
            {...panResponder.panHandlers}
            key={item.id}
            style={[rotateAndTranslate, styles.main]}
          >
            <Image
              style={styles.mainImg}
              source={{ uri: item.imageUrl }}
            />
          </Animated.View>
        )
      } else {
        return (
          <Animated.View
            key={item.id}
            style={[{ opacity: nextCardOpacity, transform: [{ scale: nextCardScale }] }, styles.main]}
          >
            <Image
              style={styles.mainImg}
              source={{ uri: item.imageUrl }}
            />
          </Animated.View>
        )
      }

    }).reverse();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Icon2
          onPress={() => console.log('clicked')}
          style={styles.profileIcon}
          name="person-outline"
          size={35}
          color='black'
        />
        <View style={styles.cartItemAmount}>
          <Text style={{ fontSize: 17 }}>{itemNum}</Text>
        </View>
        <Icon2
          onPress={() => console.log('clicked')}
          style={styles.cartIcon}
          name="cart-outline"
          size={40}
          color='black'
        />
      </View>
      <View style={styles.middle}>
        {renderFoods()}
      </View>
      <View style={styles.bottom}>
        {/* <Icon
          style={styles.xIcon}
          name="x-circle"
          size={60}
          color="#ec5288"
        /> */}
        <Icon
          onPress={() => setitemNum(itemNum + 1)}
          style={styles.checkIcon}
          name="check-circle"
          size={60}
          color="#6ee3b4"
        />
      </View>
    </SafeAreaView>
  )
}

export default Swipe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    height: SCREEN_HEIGHT - 250,
    width: SCREEN_WIDTH,
    padding: 10,
    position: 'absolute',
  },
  mainImg: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  top: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  middle: {
    flex: 0.8,
  },
  bottom: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileIcon: {
    alignItems: 'flex-start',
    marginLeft: 30,
    marginTop: 30,
  },
  cartIcon: {
    alignItems: 'flex-end',
    marginRight: 30,
    marginTop: 30,
  },
  xIcon: {
    paddingRight: 60,
    paddingLeft: 60,
  },
  checkIcon: {
    paddingRight: 60,
    paddingLeft: 60,
  },
  cartItemAmount: {
    position: 'absolute',
    height: 30,
    width: 30,
    borderRadius: 50,
    backgroundColor: '#ed1140',
    right: 28,
    bottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
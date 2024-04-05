/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import DotsIcon from '../svg/dots';
import Backgroundimg1 from '../svg/Backgroundimg1';
import PlusIcon from '../svg/Plus';

const DeviceWidth = Dimensions.get('window').width;

const Kitchen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const data = [
    {
      id: '0',
      name: 'Epicurean Haven ',
      title: 'Restaurant',
      color: ['#472101', '#3F0000', '#3F0000'],
      image: require('../images/eh.png'),
      rateno: 13,
      back: <Backgroundimg1 />,
      profiles: [
        require('../images/girl.png'),
        require('../images/boy.png'),
        require('../images/Tu.png'),
        require('../images/man.png'),
        require('../images/lady.png'),
      ],
    },
    {
      id: '1',
      name: 'Our recipes',
      title: 'Family',
      color: ['#21323d', '#191e28', '#191e28'],
      image: require('../images/fam.png'),
      rateno: 13,
      back: <Backgroundimg1 />,
      profiles: [require('../images/girl.png'), require('../images/boy.png')],
    },
    {
      id: '2',
      name: ' ChefCraft Academy',
      title: 'Educational institution',
      color: ['#241f4a', '#221d3d', '#201b2d'],
      image: require('../images/ca.png'),
      rateno: 13,
      back: <Backgroundimg1 />,
      profiles: [
        require('../images/girl.png'),
        require('../images/boy.png'),
        require('../images/Tu.png'),
        require('../images/man.png'),
        require('../images/lady.png'),
        require('../images/lady.png'),
        require('../images/girl.png'),
        require('../images/boy.png'),
      ],
    },
    {
      id: '3',
      name: 'Flavorsome Fusion',
      title: 'Institution franchise',
      color: ['#520759', '#270031'],
      image: require('../images/ff.png'),
      rateno: 17,
      back: <Backgroundimg1 />,
      profiles: [
        require('../images/girl.png'),
        require('../images/boy.png'),
        require('../images/Tu.png'),
        require('../images/man.png'),
        require('../images/lady.png'),
        require('../images/lady.png'),
        require('../images/girl.png'),
        require('../images/boy.png'),
      ],
    },
    {
      id: '4',
      name: 'Nourish Nook',
      title: 'store',
      color: ['#015A2A', '#000D0A'],
      image: require('../images/nn.png'),
      rateno: 13,
      back: <Backgroundimg1 />,
      profiles: [
        require('../images/girl.png'),
        require('../images/boy.png'),
        require('../images/Tu.png'),
        require('../images/man.png'),
        require('../images/lady.png'),
        require('../images/lady.png'),
        require('../images/girl.png'),
        require('../images/boy.png'),
      ],
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 50 : 0,
      }}>
      <Text style={styles.text}>Kitchens</Text>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <View style={styles.container}>
            <LinearGradient
              colors={item.color}
              style={styles.container}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1.7}}>
              <View style={{height: 150, width: DeviceWidth / 2.09}}>
                {item.back}
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  position: 'absolute',
                }}>
                <Image style={styles.img} source={item.image} />

                <View>
                  <Text numberOfLines={1} style={styles.name}>
                    {item.name}
                  </Text>
                  <Text style={styles.title}>{item.title}</Text>
                </View>
                <View style={{flex: 1}} />
                <TouchableOpacity
                  style={styles.dots}
                  onPress={() => {
                    setIsModalVisible(true);
                  }}>
                  <DotsIcon />
                </TouchableOpacity>

                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={isModalVisible}
                  onRequestClose={() => setIsModalVisible(true)}>
                  <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                      <View style={styles.modalContent}>
                        <TouchableOpacity>
                          <Text>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <Text style={{marginTop: 2}}>Delete Kitchen</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => setIsModalVisible(false)}>
                          <Text style={styles.closeButton}>Close Modal</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Modal>
              </View>

              <View style={styles.container1}>
                {index >= 2 ? (
                  <View style={styles.textWrap}>
                    <Text style={styles.rateno}>{`+${item.rateno}`}</Text>
                  </View>
                ) : null}
                <View style={{flex: 1}} />

                <View style={styles.imgWrap}>
                  {item.profiles.map((profile, profileIndex) => (
                    <Image
                      key={profileIndex}
                      source={profile}
                      style={styles.bottomImg}
                    />
                  ))}
                </View>
              </View>
            </LinearGradient>
          </View>
        )}
      />

      <TouchableOpacity activeOpacity={0.9} style={styles.button}>
        <PlusIcon />
      </TouchableOpacity>
    </View>
  );
};

export default Kitchen;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 36,
    padding: 10,
  },
  img: {
    height: 48,
    width: 48,
    borderRadius: 40,
    marginBottom: 20,
    marginLeft: 20,
    marginTop: 20,
    flexDirection: 'row',
    backgroundColor: 'red',
  },
  name: {
    width: 190,
    marginTop: 19,
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    marginLeft: 13,

    lineHeight: 24,
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: '#fff',
    marginLeft: 15,
  },
  dots: {
    width: 24,
    marginRight: 20,
    marginTop: 20,

    height: 24,
  },
  container1: {
    flexDirection: 'row',
    position: 'absolute',
    top: 100,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  textWrap: {
    width: 42,
    height: 30,
    borderRadius: Platform.OS === 'ios' ? 20 : 100,
    backgroundColor: '#F1F2F3',
    justifyContent: 'center',
    left: 20,
  },
  rateno: {color: '#000', textAlign: 'center'},
  imgWrap: {
    marginRight: 23,
    flexDirection: 'row',
  },
  bottomImg: {
    width: 40,
    height: 40,
    marginLeft: -5,
    marginEnd: -10,
  },

  container: {
    width: '95%',
    height: 160,
    marginHorizontal: 10,
    borderRadius: 22,
    marginBottom: 15,
    marginTop: 5,
  },
  button: {
    position: 'absolute',
    backgroundColor: '#FF7604',
    borderRadius: 60,
    width: 64,
    height: 64,
    right: 30,

    bottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 1, height: 0.5},
        shadowOpacity: 0.5,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.9,
        shadowRadius: 6,
      },
    }),
  },
  modalContainer: {
    flex: 1,
    width: 220,
    height: 48,
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: 'white',

    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 10,
    color: 'red',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    alignItems: 'center',
  },
});

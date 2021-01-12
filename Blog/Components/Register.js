import React,{useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacityComponent
} from 'react-native';
import { Block, Checkbox, Text, Button as GaButton, theme,Icon,Button } from 'galio-framework';
import nowTheme from '../Themes'
import Input from './Input';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AxiosSend } from '../Users/AxiosSend';
const { width, height } = Dimensions.get('screen');
export default function Register({navigation}) {
  console.log('hello');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('')

  // const Submit = (e) =>{
  //   e.preventDefault();
  //   //console.log(data);
  //   AxiosSend.post(`users/reg`,{
  //     // email:data.email,
  //     // username:data.username,
  //     // password:data.password,
  //   })
  //   .then((res) =>{
  //     history.push('/login')
  //   })
  //   .catch(error =>{
  //     if (typeof error.response === 'undefined') {
        
  //       return Promise.reject(error);
  //     }
  //     else{
  //     seterror({
  //       username:error.response.data.username,
  //       password:error.response.data.password,
  //       email:error.response.data.email,
  //     })
  //     }  
  //   })
  // }
  return (
    // <Block style={styles.container}>
    //   <Input placeholder="First Name"
    //     style={styles.Input}  />
    // </Block>
    <TouchableWithoutFeedback
    onPress={() => Keyboard.dismiss()}>
      <Block flex middle>
            <Block flex middle>
              <Block style={styles.registerContainer}>
                <Block flex space="evenly">
                  <Block flex={0.4} middle style={styles.socialConnect}>
                    <Block flex={0.5} middle>
                      <Text
                        style={{
                          // fontFamily: 'montserrat-regular',
                          textAlign: 'center'
                        }}
                        color="#333"
                        size={24}
                      >
                        Register
                      </Text>
                    </Block>

                    <Block flex={0.5} row middle space="between" style={{ marginBottom: 18 }}>
                      <GaButton
                        round
                        onlyIcon
                        shadowless
                        icon="twitter"
                        iconFamily="Font-Awesome"
                        iconColor={theme.COLORS.WHITE}
                        iconSize={theme.SIZES.BASE * 1.625}
                        color={nowTheme.COLORS.TWITTER}
                        style={[styles.social, styles.shadow]}
                      />
{/* 
                      <GaButton
                        round
                        onlyIcon
                        shadowless
                        icon="dribbble"
                        iconFamily="Font-Awesome"
                        iconColor={theme.COLORS.WHITE}
                        iconSize={theme.SIZES.BASE * 1.625}
                        color={nowTheme.COLORS.DRIBBBLE}
                        style={[styles.social, styles.shadow]}
                      />
                      <GaButton
                        round
                        onlyIcon
                        shadowless
                        icon="facebook"
                        iconFamily="Font-Awesome"
                        iconColor={theme.COLORS.WHITE}
                        iconSize={theme.SIZES.BASE * 1.625}
                        color={nowTheme.COLORS.FACEBOOK}
                        style={[styles.social, styles.shadow]}
                      /> */}
                    </Block>
                  </Block>
                  <Block flex={0.1} middle>
                    <Text
                      style={{
                        // fontFamily: 'montserrat-regular',
                        textAlign: 'center'
                      }}
                      muted
                      size={16}
                    >
                      or be classicals
                    </Text>
                  </Block>
                  <Block flex={1} middle space="between">
                    <Block center flex={0.1}>
                      <Block flex space="between">
                        <Block>
                          <Block width={width * 0.8} style={{ marginBottom: 5 }}>
                            <Input
                              placeholder="First Name"
                              
                              style={styles.inputs}

                            />
                          </Block>
                          <Block width={width * 0.8} style={{ marginBottom: 5 }}>
                            <Input
                              placeholder="Last Name"
                              style={styles.inputs}
                            />
                          </Block>
                          <Block width={width * 0.8}>
                            <Input
                              placeholder="Email"
                              style={styles.inputs}
                              iconContent={                                  
                                <MaterialCommunityIcons name="email" size={24} color="black" style={styles.inputIcons} />
                              }
                            />
                          </Block>
                          <Block
                            style={{ marginVertical: theme.SIZES.BASE, marginLeft: 15}}
                            row
                            width={width * 0.75}
                          >
                            <TouchableOpacity onPress={() =>{
                              navigation.navigate('Login')
                            }}>
                              <Text style={{marginLeft:30}}>
                                already have an account login
                              </Text>
                            </TouchableOpacity>
                          </Block>
                        </Block>
                        <Block center>
                          <Button color="primary" round style={styles.createButton}>
                            <Text
                              // style={{ fontFamily: 'montserrat-bold' }}
                              size={14}
                              color={nowTheme.COLORS.WHITE}
                            >
                              Get Started
                            </Text>
                          </Button>
                        </Block>
                      </Block>
                    </Block>
                  </Block>
                </Block>
              </Block>
            </Block>
        </Block>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // Input:{
  //   // height: 40, borderColor: 'gray', borderWidth: 1
  //   borderColor:'grey',
  //   borderWidth:1,
  //   width:200,
  //   height:40,
  //   borderRadius:100/2
  // 
  imageBackgroundContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1
  },
  imageBackground: {
    width: width,
    height: height
  },
  registerContainer: {
    marginTop: 55,
    width: width * 0.9,
    height: height < 812 ? height * 0.8 : height * 0.8,
    backgroundColor: nowTheme.COLORS.WHITE,
    borderRadius: 4,
    shadowColor: nowTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: 'hidden'
  },
  socialConnect: {
    backgroundColor: nowTheme.COLORS.WHITE
    // borderBottomWidth: StyleSheet.hairlineWidth,
    // borderColor: "rgba(136, 152, 170, 0.3)"
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: '#fff',
    shadowColor: nowTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1
  },
  socialTextButtons: {
    color: nowTheme.COLORS.PRIMARY,
    fontWeight: '800',
    fontSize: 14
  },
  inputIcons: {
    marginRight: 12,
    color: nowTheme.COLORS.ICON_INPUT
  },
  inputs: {
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius: 21.5,
    height:50
  },
  passwordCheck: {
    paddingLeft: 2,
    paddingTop: 6,
    paddingBottom: 15
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25,
    marginBottom: 40
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: 'center',
    marginHorizontal: 10}
});

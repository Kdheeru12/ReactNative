import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Image, ImageBackground, Platform,StatusBar} from 'react-native';
import { Block, Text, theme, Button as GaButton } from 'galio-framework';
import nowTheme from '../Themes'
import Button from './Button';


export const StatusHeight = StatusBar.currentHeight;
export const HeaderHeight = theme.SIZES.BASE * 3.5 + (StatusHeight || 0);
export const iPhoneX = () => Platform.OS === 'ios' && (height === 812 || width === 812);

const { width, height } = Dimensions.get('screen');

const thumbMeasure = (width - 48 - 10) / 3;

const Profile = () => {
  return (
    <Block style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
    }} >
      <Block flex={0.63} >
          <Block flex style={styles.profileCard}>
            <Block style={{ position: 'absolute', width: width, zIndex: 5, paddingHorizontal: 20 }}>
              <Block middle style={{ top: height * 0.15 }}>
                <Image source={{uri:'https://picsum.photos/id/237/200/300'}} style={styles.avatar} />
              </Block>
              <Block style={{ top: height * 0.17 }}>
                <Block middle >
                  <Text
                    style={{
                      marginBottom: theme.SIZES.BASE / 2,
                      fontWeight: '900',
                      fontSize: 26
                    }}
                    color='black'
                    >
                    Ryan Scheinder
                  </Text>

                  <Text
                    size={16}
                    color="black"
                    style={{
                      marginTop: 5,
                      lineHeight: 20,
                      fontWeight: 'bold',
                      fontSize: 18,
                      opacity: .8
                    }}
                  >
                    Photographer
                  </Text>
                </Block>
                <Block style={styles.info}>
                  <Block row space="around">

                    <Block middle>
                      <Text
                        size={18}
                        color="black"
                        style={{ marginBottom: 4}}
                      >
                        2K
                      </Text>
                      <Text  size={14} color="grey">
                        Friends
                      </Text>
                    </Block>

                    <Block middle>
                      <Text
                        color="black"
                        size={18}
                        style={{ marginBottom: 4 }}
                      >
                        26
                      </Text>
                      <Text  size={14} color="grey">
                        Comments
                        </Text>
                    </Block>

                    <Block middle>
                      <Text
                        color="black"
                        size={18}
                        style={{ marginBottom: 4 }}
                      >
                        48
                      </Text>
                      <Text  size={14} color="grey">
                        Bookmarks
                      </Text>
                    </Block>

                  </Block>
                </Block>
              </Block>

            </Block>


            <Block
              middle
              row
              style={{ position: 'absolute', width: width, top: height * 0.56 - 27, zIndex: 99 }}
            >
              <Button style={{ width: 114, height: 44, marginHorizontal: 5, elevation: 0 }} textStyle={{ fontSize: 16 }} round>
                Follow
              </Button>
              <GaButton
                round
                onlyIcon
                shadowless
                icon="twitter"
                iconFamily="Font-Awesome"
                iconColor={nowTheme.COLORS.WHITE}
                iconSize={nowTheme.SIZES.BASE * 1.375}
                color={'#888888'}
                style={[styles.social, styles.shadow]}
              />
              <GaButton
                round
                onlyIcon
                shadowless
                icon="pinterest"
                iconFamily="Font-Awesome"
                iconColor={nowTheme.COLORS.WHITE}
                iconSize={nowTheme.SIZES.BASE * 1.375}
                color={'#888888'}
                style={[styles.social, styles.shadow]}
              />
            </Block>
          </Block>


      </Block>
      <Block />
      <Block flex={0.4} style={{ padding: theme.SIZES.BASE, marginTop: 90}}>
        <ScrollView showsVerticalScrollIndicator={true}>
          <Block flex style={{ marginTop: 23 }}>
            <Block middle>
              <Text
                style={{
                  color: '#2c2c2c',
                  fontWeight: 'bold',
                  fontSize: 19,
                  marginTop: 15,
                  marginBottom: 30,
                  zIndex: 2
                }}
              >
                About me
                  </Text>
              <Text
                size={16}
                muted
                style={{
                  textAlign: 'center',
                  zIndex: 2,
                  lineHeight: 25,
                  color: '#9A9A9A',
                  paddingHorizontal: 15
                }}
              >
                An artist of considerable range, named Ryan — the name has taken by Melbourne has raised,
                Brooklyn-based Nick Murphy — writes, performs and records all of his own music.
                An artist of considerable range, named Ryan — the name has taken by Melbourne has raised,
                Brooklyn-based Nick Murphy — writes, performs and records all of his own music.
                An artist of considerable range, named Ryan — the name has taken by Melbourne has raised,
                Brooklyn-based Nick Murphy — writes, performs and records all of his own music.
                An artist of considerable range, named Ryan — the name has taken by Melbourne has raised,
                Brooklyn-based Nick Murphy — writes, performs and records all of his own music.
                An artist of considerable range, named Ryan — the name has taken by Melbourne has raised,
                Brooklyn-based Nick Murphy — writes, performs and records all of his own music.
                An artist of considerable range, named Ryan — the name has taken by Melbourne has raised,
                Brooklyn-based Nick Murphy — writes, performs and records all of his own music.
                  </Text>
            </Block>
          </Block>
        </ScrollView>
      </Block>
    </Block>

  )
}





const styles = StyleSheet.create({

  profileContainer: {
    width,
    height,
    padding: 0,
    zIndex: 1
  },
  profileBackground: {
    width,
    height: height * 0.6
  },

  info: {
    marginTop: 30,
    paddingHorizontal: 10,
    height: height * 0.8
  },
  avatarContainer: {
    position: 'relative',
    marginTop: -80
  },
  avatar: {
    width: thumbMeasure,
    height: thumbMeasure,
    borderRadius: 50,
    borderWidth: 0
  },
  nameInfo: {
    marginTop: 35
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: 'center',
    width: thumbMeasure,
    height: thumbMeasure
  },
  social: {
    width: nowTheme.SIZES.BASE * 3,
    height: nowTheme.SIZES.BASE * 3,
    borderRadius: nowTheme.SIZES.BASE * 1.5,
    justifyContent: 'center',
    zIndex: 99,
    marginHorizontal: 5
  }
});

export default Profile;

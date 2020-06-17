import React from "react";
import { View, Text, Dimensions, ImageBackground, Image } from "react-native";
import { Header, Left, Right, Icon, Button, Body, Title } from "native-base";
import images from '../assets/images/index';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Frame2 = ({
    bodyText,
    bodyTextTag,
    buttonText,
    finalButton,
    image,
    pageIndicator
}) => {
    return (
        <View style={{flex: 1, height}}>
            <ImageBackground source={image} style={{flex: 1, width, height, resizeMode: "cover", justifyContent: "center"}}>
                <View style={{flex: 0.6, alignItems: 'center', justifyContent: 'center'}}>
                    <Text
                        style={{
                            fontFamily: 'Nunito Sans',
                            fontSize: 18,
                            lineHeight: 25,
                            textAlign: 'center',
                            color: 'white',
                            fontWeight: '600',
                            width: '84%'
                        }}
                    >{bodyText}</Text>
                    <Text
                        style={{
                            fontFamily: 'Nunito Sans',
                            fontSize: 18,
                            lineHeight: 25,
                            textAlign: 'center',
                            fontWeight: '600',
                            color: 'white',
                            width: '84%'
                        }}
                    >{bodyTextTag}</Text>
                </View>
                <View style={{flex: 0.1, alignItems: 'center', justifyContent: 'center'}}>
                    <Button 
                        onPress={() => {alert('clicked')}}
                        style={{backgroundColor: '#0E76A8', width: '60%',paddingHorizontal: 10}}>
                        <View style={{backgroundColor: 'white', padding: 5, borderRadius: 2, marginRight: 5}}>
                            <Image source={images.linkedinImage} style={{width: 15, height: 15}} />
                        </View>
                        <Text 
                            style={{
                                color: 'white', 
                                fontWeight: '600',
                                fontSize: 15,
                                lineHeight: 20,
                                textAlign: 'center',
                                fontStyle: 'normal'
                            }}
                        >{buttonText}</Text>
                    </Button>
                </View>
                <View style={{flex: 0.2,}}>
                    {pageIndicator}
                </View>
            </ImageBackground>
        </View>
    );
}

export default Frame2;
import React from "react";
import { View, Text, Dimensions, ImageBackground, Image, StyleSheet } from "react-native";
import { Button } from "native-base";
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
            <ImageBackground source={image} style={style.imageCover}>
                <View style={[style.elemento, {flex: 0.5}]}>
                    <Text
                        style={style.joeBuden}
                    >{bodyText}</Text>
                    <Text
                        style={style.joeBuden}
                    >{bodyTextTag}</Text>
                </View>
                <View style={[style.elemento, {flex: 0.1}]}>
                    <Button 
                        onPress={() => {alert('clicked')}}
                        style={[style.button]}>
                        <View style={style.containerButton}>
                            <Image source={images.linkedinImage} style={{width: 15, height: 15}} />
                        </View>
                        <Text 
                            style={style.buttonText}
                        >{buttonText}</Text>
                    </Button>
                </View>
                <View style={[style.elemento, {flex: 0.1}]}>
                    {pageIndicator}
                </View>
            </ImageBackground>
        </View>
    );
}
const style = StyleSheet.create({
    imageCover: {
        flex: 1, 
        width, 
        height, 
        resizeMode: "cover", 
        justifyContent: "center",
    },
    elemento: {
        alignItems: 'center', 
        justifyContent: 'center',
    },
    joeBuden: {
        fontFamily: 'Nunito Sans',
        fontSize: 18,
        lineHeight: 25,
        textAlign: 'center',
        color: 'white',
        fontWeight: '600',
        width: '84%'
    },
    button: {
        backgroundColor: '#0E76A8', 
        width: '60%',
        paddingHorizontal: 10
    },
    containerButton: {
        backgroundColor: 'white', 
        padding: 5, 
        borderRadius: 2, 
        marginRight: 5
    },
    buttonText: {
        color: 'white', 
        fontWeight: '600',
        fontSize: 15,
        lineHeight: 20,
        textAlign: 'center',
        fontStyle: 'normal'
    }
})
export default Frame2;
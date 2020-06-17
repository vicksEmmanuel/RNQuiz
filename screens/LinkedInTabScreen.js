import React, {  Component } from "react";
import { View, SafeAreaView, Text, StatusBar, Dimensions, Image } from "react-native";
import { Tab, Tabs } from "native-base";
import { Pagination } from "react-native-snap-carousel";
import Frame2 from './Frame2';
import {TabScreenData} from '../dummyData/LinkedInData';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class LinkedInTabScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            currentIndexData: TabScreenData[0]
        }
    }
    onTabChange({i}) {
        this.setState({
            currentIndex: i,
            currentIndexData: TabScreenData[i]
        })
    }

    render() {
        return (
            <>
                <StatusBar hidden />
                <SafeAreaView>
                    <View style={{width, height, backgroundColor: 'white', alignItems: 'center'}}>
                        <Tabs
                                tabContainerStyle={{ display: "none" }}
                                onChangeTab={this.onTabChange.bind(this)}
                                page={this.state.currentIndex}
                                locked={this.props.locked}
                            >
                                {
                                    TabScreenData.map(({
                                        screen,
                                        bodyText,
                                        bodyTextTag,
                                        buttonText,
                                        finalButton,
                                        image
                                    }) => {
                                        return (
                                            <Tab heading={screen} key={screen}>
                                                <Frame2
                                                    bodyText={bodyText}
                                                    bodyTextTag={bodyTextTag}
                                                    buttonText={buttonText}
                                                    finalButton={finalButton}
                                                    image={image}
                                                    pageIndicator={
                                                        <Pagination
                                                            dotsLength={TabScreenData.length}
                                                            activeDotIndex={this.state.currentIndex}
                                                            dotContainerStyle={{
                                                                backgroundColor: "transparent",
                                                                marginHorizontal: 2  
                                                            }}
                                                            dotStyle={{
                                                                width: 10,
                                                                height: 10,
                                                                borderRadius: 5,
                                                                marginHorizontal: 1,
                                                                backgroundColor: '#0E76A8'
                                                            }}
                                                            inactiveDotStyle={{
                                                                backgroundColor: '#C4C4C4',
                                                                marginHorizontal: 1,
                                                                width: 17,
                                                                height: 17,
                                                                borderRadius: 10,
                                                                // Define styles for inactive dots here
                                                            }}
                                                            inactiveDotOpacity={0.4}
                                                            inactiveDotScale={0.6}
                                                        />
                                                    }
                                                />
                                            </Tab>
                                        )
                                    })
                                }
                            </Tabs>
                    </View>
                </SafeAreaView>
            </>
        )
    }
}
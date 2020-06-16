import React, {  Component } from "react";
import { View, SafeAreaView, Text, StatusBar, Dimensions, Image } from "react-native";
import { Tab, Tabs } from "native-base";

export default class LinkedInTabScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            currentIndexData: props.data[0]
        }
    }
    onTabChange({i}) {
        this.setState({
            ...this.state,
            currentIndex: i,
            currentIndexData: this.props.data[i]
        })
    }

    render() {
        return (
            <>
                <StatusBar hidden />
                <SafeAreaView>
                    <View>
                        <Tabs
                            tabContainerStyle={{ display: "none" }}
                            onChangeTab={this.onTabChange}
                            page={this.state.currentIndex}
                            locked={this.props.locked}
                        >
                            {
                                this.props.data.map(({
                                    screen,
                                    bodyText,
                                    bodyTagText,
                                    buttonText
                                }) => {
                                    return (
                                        <Tab heading={screen} key={screen}>
                                            <View><Text>{bodyText}</Text></View>
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
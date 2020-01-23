import * as React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, View } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Animated from 'react-native-reanimated';
import Post from "./Post";

export default class HomeContainer extends React.Component{
    constructor() {
        super();
        this.state = {
            demands: [],
            infos: [],
            index: 0,
            routes: [
                { key: 'first', title: 'Demandes' },
                { key: 'second', title: 'Informations' },
            ],
        };
        this.loadDemands();
        this.loadInfos();
    }

    async loadDemands() {
        let demands = await global.ApiConsumer.loadDemands();
        this.setState({demands:demands.data});

    }

    async loadInfos() {
        let infos = await global.ApiConsumer.loadInfos();
        this.setState({infos:infos.data});
    }

    _handleIndexChange = index => this.setState({ index });

    _renderTabBar = props => {
        const inputRange = props.navigationState.routes.map((x, i) => i);

        return (
            <View style={styles.tabBar}>
                {props.navigationState.routes.map((route, i) => {
                    const color = Animated.color(
                        0,
                        Animated.round(
                            Animated.interpolate(props.position, {
                                inputRange,
                                outputRange: inputRange.map(inputIndex =>
                                    inputIndex === i ? 122 : 0
                                ),
                                extrapolate: 'clamp',
                            })
                        ),
                        Animated.round(
                                Animated.interpolate(props.position, {
                                inputRange,
                                outputRange: inputRange.map(inputIndex =>
                                    inputIndex === i ? 255 : 0
                                ),
                                extrapolate: 'clamp',
                            })
                        )
                    );

                    return (
                        <TouchableOpacity
                            style={styles.tabItem}
                            onPress={() => this.setState({ index: i })}>
                            <Animated.Text style={{ color }}>{route.title}</Animated.Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };

    render() {
        let demands = this.state.demands;
        let DemandsRoute = () => (
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}>
                {demands.map((demand, idx) => <Post title={demand.title} text={demand.description} isDemand={true} key={idx}/>)}
            </ScrollView>
        );
        let infos = this.state.infos;
        let InfosRoute = () => (
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}>
                {infos.map((info, idx) => <Post title={info.title} text={info.description} isDemand={false} key={idx}/>)}
            </ScrollView>
        );

        let renderScene = SceneMap({
            first: DemandsRoute,
            second: InfosRoute,
        });

        return (
            <TabView
                navigationState={this.state}
                renderScene={renderScene}
                renderTabBar={this._renderTabBar}
                onIndexChange={this._handleIndexChange}
                style={styles.scene}
            />
        );
    }
}

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
    tabBar: {
        flexDirection: 'row',
        paddingTop: 10
    },
    contentContainer: {
        paddingTop: 10,
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        padding: 1,
    },
});

import React, { Component } from 'react';
import { Text, TouchableOpacity, View, FlatList, Image } from 'react-native';
import styles from '../styles'

export default class Preview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: this.props.route.params.data
        }

    }

    render() {
        console.log("datasource" + JSON.stringify(this.props.route.params.data))
        return (
            <View style={styles.previewContainer}>
                <Text style={styles.txtCount}>{this.state.dataSource.length} images captured. </Text>
                <FlatList
                    // horizontal={true}
                    numColumns={3}
                    data={this.state.dataSource}
                    keyExtractor={(item, index) => item + index}
                    renderItem={(itemData) => {
                        const item = itemData.item
                        return (
                            <Image
                                style={styles.imgCaptured}
                                source={{
                                    uri: item
                                }} />
                        );
                    }}
                />
            </View>
        )
    }
}
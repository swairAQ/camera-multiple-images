import React, { Component } from 'react';
import { Text, TouchableOpacity, View, FlatList, Image } from 'react-native';
import styles from '../styles'

export default class Preview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: this.props.route.params.data,
            selectedIndex: 0,
        }

    }
    goBack(data) {
        this.props.route.params.callBack(data)
        this.props.navigation.goBack()
    }
    render() {
        return (
            <View style={styles.previewContainer}>
                <View style={styles.imgPreview}>
                    <Image
                        resizeMode='contain'
                        style={{ height: '100%', width: '100%' }}
                        source={{
                            uri: this.state.dataSource[this.state.selectedIndex]
                        }} />
                </View>
                <View style={styles.topContainer}>

                    <TouchableOpacity onPress={() => this.goBack(this.state.dataSource)}
                        style={styles.btnIcon}
                    >
                        <Image
                            resizeMode='contain'
                            style={styles.ic_back}
                            source={
                                require("../../assets/image/ic_back.png")
                            } />
                    </TouchableOpacity>

                    <TouchableOpacity
                        disabled={true}
                        // onPress={() =>
                        //     this.props.navigation.navigate("Preview", { data: this.state.dataSource })
                        // }
                        style={styles.btnIcon}
                    >
                        <Image
                            resizeMode='center'
                            style={styles.ic_next}
                            source={require("../../assets/image/edit.png")} />
                    </TouchableOpacity>

                </View>

                {/* <Text style={styles.txtCount}>{this.state.dataSource.length} images captured. </Text> */}
                <FlatList
                    contentContainerStyle={styles.contentContainer}
                    horizontal={true}
                    data={this.state.dataSource}
                    keyExtractor={(item, index) => item + index}
                    renderItem={(itemData) => {
                        const item = itemData.item
                        return (
                            <TouchableOpacity style={styles.vwFlat}
                                onPress={() => {
                                    this.setState({ selectedIndex: itemData.index })

                                }}>
                                <Image
                                    style={styles.imgCaptured}
                                    source={{
                                        uri: item
                                    }} />

                                <TouchableOpacity style={styles.toCross}
                                    onPress={() => {
                                        var array = [...this.state.dataSource];
                                        var index = itemData.index
                                        if (index !== -1) {
                                            array.splice(index, 1);
                                            this.setState({ dataSource: array });
                                        }
                                        if (this.state.dataSource.length <= 1)
                                            this.goBack([])
                                        else if (this.state.dataSource.length - 1 <= this.state.selectedIndex) {
                                            this.setState({ selectedIndex: this.state.dataSource.length - 2 })
                                        }


                                    }}
                                >
                                    <View style={styles.vwCross}>

                                        <Image
                                            style={styles.ic_cross}
                                            source={require("../../assets/image/crossBlack.png")} />
                                    </View>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        );
                    }} />

            </View >
        )
    }
}
import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View, Button, FlatList } from 'react-native';
import { RNCamera } from 'react-native-camera';
import styles from '../styles'
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            flashMode: false,
            frontCamera: false,
            showCrousal: true,
        }
    }

    render() {
        return (
            <View style={styles.subcontainer}>
                <View style={styles.container}>
                    <RNCamera
                        ref={ref => {
                            this.camera = ref;
                        }}
                        style={styles.preview}
                        type={this.state.frontCamera ? RNCamera.Constants.Type.front : RNCamera.Constants.Type.back}
                        flashMode={this.state.flashMode ? RNCamera.Constants.FlashMode.on : RNCamera.Constants.FlashMode.off}
                        permissionDialogTitle={'Permission to use camera'}
                        permissionDialogMessage={'We need your permission to use your camera phone'}
                    />
                    {
                        this.state.dataSource.length ?
                            <TouchableOpacity onPress={() =>
                                this.props.navigation.navigate("Preview", { data: this.state.dataSource })
                            }
                                style={styles.btnPreview}
                            >
                                <Image
                                    resizeMode='center'
                                    style={styles.ic_next}
                                    source={require("../../assets/image/next.png")} />
                            </TouchableOpacity>
                            : null
                    }
                    <View style={styles.vwContainer}>
                        <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
                            <Image
                                style={styles.ic_buttons}
                                source={require("../../assets/image/camera.png")} />
                        </TouchableOpacity>
                        <View style={styles.actionsContainer}>

                            <TouchableOpacity onPress={() => { this.setState({ flashMode: !this.state.flashMode }) }}
                                style={styles.btnParent}
                            >
                                <Image
                                    style={styles.ic_actions}
                                    source={
                                        this.state.flashMode ?
                                            require("../../assets/image/flash.png")
                                            :
                                            require("../../assets/image/flash-off.png")
                                    } />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.setState({ frontCamera: !this.state.frontCamera }) }}
                                style={styles.btnParent}
                            >
                                <Image

                                    style={styles.ic_actions}
                                    source={require("../../assets/image/rotate-camera.png")} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.containerButton}>
                            <TouchableOpacity
                                disabled={!this.state.dataSource.length}
                                onPress={() => {
                                    this.setState({ showCrousal: !this.state.showCrousal })

                                }}
                                style={[styles.btnParent, {
                                    backgroundColor: this.state.dataSource.length ? '#fff' : 'gray',
                                }]}
                            >
                                <Image
                                    style={styles.ic_actions}
                                    source={require("../../assets/image/library.png")} />
                            </TouchableOpacity>

                        </View>

                    </View>


                    {
                        (this.state.showCrousal && this.state.dataSource.length) ?
                            <View style={styles.flatContainer}>
                                <FlatList
                                    horizontal={true}
                                    data={this.state.dataSource}
                                    keyExtractor={(item, index) => item + index}
                                    renderItem={(itemData) => {
                                        const item = itemData.item
                                        return (
                                            <Image
                                                style={styles.imgCapturedThumnail}
                                                source={{
                                                    uri: item
                                                }} />
                                        );
                                    }} />
                            </View>
                            : null
                    }
                </View>

            </View>
        );
    }


    takePicture = async function () {
        if (this.camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options);
            var joined = this.state.dataSource.concat(data.uri);
            this.setState({ dataSource: joined })
        }
    };
}

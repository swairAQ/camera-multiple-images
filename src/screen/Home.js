import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View, Button, FlatList, Animated, SafeAreaView } from 'react-native';
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
            fadeAnimation: new Animated.Value(0),
        }
    }

    fadeOut = () => {
        Animated.timing(this.state.fadeAnimation, {
            toValue: 0,
            duration: 4000,
            useNativeDriver: true
        }).start();
    };
    callBack = (data) => {
        console.log("callBack home")
        this.setState({ dataSource: data })
    }
    // this.camera.stopPreview()
    render() {
        // return (
        //     <Animated.View
        //         style={{ opacity: this.fadeOut }}
        //     >
        //         <Button title="Fade Out" onPress={this.fadeOut} />
        //     </Animated.View>
        // )
        return (

            <View style={styles.subcontainer}>
                <View style={styles.container}>
                    <RNCamera
                        playSoundOnCapture={true}

                        captureAudio={false}
                        ref={ref => {
                            this.camera = ref;
                        }}
                        style={styles.preview}
                        type={this.state.frontCamera ? RNCamera.Constants.Type.front : RNCamera.Constants.Type.back}
                        flashMode={this.state.flashMode ? RNCamera.Constants.FlashMode.on : RNCamera.Constants.FlashMode.off}
                        androidCameraPermissionOptions={{
                            title: "Permisstion to use camera",
                            message: "We need your permission to use your phone's camera"
                        }
                        }
                    // permissionDialogTitle={'Permission to use camera'}
                    // permissionDialogMessage={"We need your permission to use your phone's camera"}
                    >
                        <View style={styles.vwContainer}>
                            <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
                                <Image
                                    style={styles.ic_buttons}
                                    source={require("../../assets/image/camera.png")} />
                            </TouchableOpacity>
                        </View>

                    </RNCamera>
                    <View style={styles.topContainer}>

                        <TouchableOpacity onPress={() => { this.setState({ flashMode: !this.state.flashMode }) }}
                            style={styles.btnIcon}
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
                        {
                            this.state.dataSource.length ?
                                <TouchableOpacity onPress={() =>
                                    this.props.navigation.navigate("Preview", {
                                        data: this.state.dataSource,
                                        callBack: this.callBack
                                    })
                                }
                                    style={styles.btnIcon}
                                >
                                    <Image
                                        resizeMode='center'
                                        style={styles.ic_next}
                                        source={require("../../assets/image/next.png")} />
                                </TouchableOpacity>
                                : null
                        }
                    </View>


                    <View style={styles.flatContainer}>
                        {/* <View style={styles.separator} /> */}
                        {
                            this.state.dataSource.length ?
                                <FlatList
                                    contentContainerStyle={styles.contentContainer}
                                    horizontal={true}
                                    data={this.state.dataSource}
                                    keyExtractor={(item, index) => item + index}
                                    renderItem={(itemData) => {
                                        const item = itemData.item
                                        return (
                                            <TouchableOpacity style={styles.vwFlat}
                                                onPress={() => this.setState({ selectedIndex: itemData.index })}>
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

                                :
                                <Text style={styles.txtNopreview}>No image captured</Text>

                        }
                    </View>
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

import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View, Button, FlatList } from 'react-native';
import { RNCamera } from 'react-native-camera';
import styles from '../styles'
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            value1: null,
            value2: null,
            dataSource: [],
            flashMode: false,
            frontCamera: false,
            showCrousal: true,

        }
    }

    render() {
        return (
            <View style={styles.subcontainer}>
                {/* {
          this.state.isVisible === true
            ? */}
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
                                style={{
                                    backgroundColor: '#fff',
                                    borderRadius: 30 / 2,
                                    // padding: 15,
                                    height: 30, width: 30,
                                    // paddingHorizontal: 20,
                                    alignSelf: 'center',
                                    // margin: 20,
                                    justifyContent: 'center',
                                    position: 'absolute',
                                    top: 15,
                                    right: 15
                                }}
                            >
                                <Image
                                    resizeMode='center'
                                    style={{ height: 14, width: 14, alignSelf: 'center' }}
                                    source={require("../../assets/image/next.png")} />
                            </TouchableOpacity>
                            : null
                    }
                    <View style={{
                        height: '20%',
                        // width: '100%',
                        flexDirection: 'row',
                        // backgroundColor: 'red',
                        justifyContent: 'center',
                        // marginBottom: 130,
                        borderRadius: 6
                    }}>
                        <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
                            <Image
                                style={{ height: 30, width: 30, alignSelf: 'center' }}
                                source={require("../../assets/image/camera.png")} />
                        </TouchableOpacity>
                        <View style={{
                            flex: 1 / 2,
                            marginLeft: 20,
                            marginTop: "25%",
                            // alignSelf: 'flex-start',
                            alignItems: 'center',
                            // backgroundColor: 'green',
                            flexDirection: 'row'
                        }}>

                            <TouchableOpacity onPress={() => { this.setState({ flashMode: !this.state.flashMode }) }}
                                style={{
                                    height: 40, width: 40, backgroundColor: '#fff',
                                    borderRadius: 40 / 2, justifyContent: 'center'
                                }}
                            >
                                <Image
                                    style={{ height: 23, width: 23, alignSelf: 'center' }}
                                    source={
                                        this.state.flashMode ?
                                            require("../../assets/image/flash.png")
                                            :
                                            require("../../assets/image/flash-off.png")
                                    } />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.setState({ frontCamera: !this.state.frontCamera }) }}
                                style={{
                                    marginLeft: 15,
                                    height: 40, width: 40, backgroundColor: '#fff',
                                    borderRadius: 40 / 2, justifyContent: 'center'
                                }}
                            >
                                <Image
                                    style={{ height: 23, width: 23, alignSelf: 'center' }}
                                    source={require("../../assets/image/rotate-camera.png")} />
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            flex: 1,
                            marginRight: 20,
                            marginTop: '25%',
                            justifyContent: 'flex-end',
                            // backgroundColor: 'blue', 
                            alignItems: 'flex-end'
                        }}>
                            <TouchableOpacity
                                disabled={!this.state.dataSource.length}
                                onPress={() => {
                                    this.setState({ showCrousal: !this.state.showCrousal })

                                }}
                                style={{
                                    height: 40, width: 40,
                                    backgroundColor: this.state.dataSource.length ? '#fff' : 'gray',
                                    borderRadius: 40 / 2, justifyContent: 'center'
                                }}
                            >
                                <Image
                                    style={{ height: 23, width: 23, alignSelf: 'center' }}
                                    source={require("../../assets/image/library.png")} />
                            </TouchableOpacity>

                        </View>

                    </View>
                </View>

                {
                    (this.state.showCrousal && this.state.dataSource.length) ?
                        <View style={{
                            width: '100%',
                            paddingTop: 10,
                            backgroundColor: "black"
                        }}>
                            <FlatList
                                horizontal={true}
                                // numColumns={3}
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
        );
    }

    changeState = () => {
        this.setState({ isVisible: true })
    }

    changeState2 = () => {
        this.setState({ isVisible: true })
    }

    showResults = () => {
        console.log('VALUE1: ' + this.state.value1);
        console.log('VALUE2: ' + this.state.value2);
    }

    takePicture = async function () {
        if (this.camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options);
            console.log(data.uri);
            var joined = this.state.dataSource.concat(data.uri);
            this.setState({ dataSource: joined })

            console.log("Array " + JSON.stringify(this.state.dataSource))
            // this.setState({ isVisible: true });
        }
    };
}

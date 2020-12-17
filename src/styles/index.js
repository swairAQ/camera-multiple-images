import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    txtCount: {
        fontSize: 20, color: 'gray', marginTop: '10%',
        marginBottom: '3%',
        width: '100%', textAlign: 'center'
    },
    imgCapturedThumnail: { height: 50, width: 50, borderRadius: 7, marginHorizontal: 3, marginVertical: 5 },
    imgCaptured: { height: 100, width: 100, borderRadius: 7, marginHorizontal: 3, marginVertical: 5 },
    previewContainer: {
        flex: 1,
        marginHorizontal: 20
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
    },
    subcontainer: {
        flex: 1,
        flexDirection: 'column',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        // flex: 0,
        backgroundColor: '#fff',
        borderRadius: 60 / 2,
        // padding: 15,
        height: 60, width: 60,
        // paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
        justifyContent: 'center',
        position: 'absolute',
        top: 5

    },
});
export default styles
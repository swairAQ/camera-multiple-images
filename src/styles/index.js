import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    ic_actions: { height: 23, width: 23, alignSelf: 'center', },
    btnParent: {
        backgroundColor: 'green',

        marginHorizontal: 5,
        height: 40, width: 40, backgroundColor: '#fff',
        borderRadius: 40 / 2, justifyContent: 'center'
    },
    actionsContainer: {
        flex: 1 / 2,
        marginLeft: 10,
        marginTop: "25%",
        // alignSelf: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',


    },
    containerButton: {
        flex: 1 / 2,
        marginRight: 20,
        marginTop: '25%',
        alignItems: 'flex-end',
        justifyContent: 'center'

    },
    ic_buttons: {
        height: 30, width: 30, alignSelf: 'center',
    },
    vwContainer: {
        height: '20%',
        flexDirection: 'row',
        // backgroundColor: 'red',
        justifyContent: 'center',
        // marginBottom: 130,
        borderRadius: 18,

    },
    ic_next: { height: 14, width: 14, alignSelf: 'center' },
    btnPreview: {
        backgroundColor: '#fff',
        borderRadius: 30 / 2,
        height: 30, width: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 15,
        right: 15
    },
    flatContainer: {
        width: '100%',
        marginTop: 10,
        marginLeft: 10,

    },
    txtCount: {
        fontSize: 20, color: 'gray', marginTop: '10%',
        marginBottom: '3%',
        width: '100%', textAlign: 'center'
    },
    imgCapturedThumnail: {
        borderWidth: 0.51,
        borderColor: '#fff',
        height: 50, width: 50, borderRadius: 7, marginHorizontal: 3, marginVertical: 5
    },
    imgCaptured: { height: 100, width: 100, borderRadius: 7, marginHorizontal: 3, marginVertical: 5 },
    previewContainer: {
        flex: 1,
        marginHorizontal: 20
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
        // borderRadius: 100,
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
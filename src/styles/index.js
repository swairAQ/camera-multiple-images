import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    ic_actions: { height: 23, width: 23, alignSelf: 'center', },

    ic_back: { height: 20, width: 20, alignSelf: 'center', },
    btnIcon: {
        // marginHorizontal: 5,
        height: 30, width: 30,
        backgroundColor: '#fff',
        borderRadius: 30 / 2, justifyContent: 'center'
    },
    btnPreview: {
        backgroundColor: '#fff',
        borderRadius: 30 / 2,
        height: 30, width: 30,
        // alignSelf: 'flex-end',
        justifyContent: 'center',

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
        height: 27, width: 27, alignSelf: 'center',
    },
    vwContainer: {
        height: '10%',
        flexDirection: 'row',
        // backgroundColor: 'red',
        justifyContent: 'center',
        // marginBottom: 130,
        // borderRadius: 18,
        marginBottom: '3%',

    },
    imgPreview: { height: '86%', width: '100%' },
    ic_next: { height: 14, width: 14, alignSelf: 'center' },

    topContainer: {
        position: 'absolute',
        top: 20,
        height: 50,
        width: '100%',
        flexDirection: 'row',
        // right: 15,
        // alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,

    },
    separator: {
        borderRadius: 4,
        borderWidth: 0.12,
        borderColor: 'gray',
        marginTop: 1.5,
        // height: 0.6, backgroundColor: 'gray',
        width: '60%',

        alignSelf: 'center'
    },
    flatContainer: {
        width: '100%',
        height: '14%',
        justifyContent: 'center'

    },
    toCross: {
        height: 20,
        width: 20,
        top: 4.4,
        marginLeft: -22,
        justifyContent: 'center',
        alignItems: 'center',
    },
    vwCross: {
        borderRadius: 13 / 2,
        // marginTop: 2,
        justifyContent: 'center',
        height: 13, width: 13,
        alignItems: 'center',
        backgroundColor: "rgba(255,255,255,0.6)"
    },
    ic_cross: {
        height: 6, width: 6
    },
    txtCount: {
        fontSize: 20, color: 'gray', marginTop: '10%',
        marginBottom: '3%',
        width: '100%', textAlign: 'center'
    },
    imgCapturedThumnail: {
        borderWidth: 0.51,
        borderColor: '#fff',
        height: 50, width: 50, borderRadius: 7, marginHorizontal: 3,
        marginVertical: 5
    },
    imgCaptured: { height: 80, width: 80, borderRadius: 7, marginHorizontal: 3, marginVertical: 5 },
    previewContainer: {
        flex: 1,
        backgroundColor: 'black'
        // marginHorizontal: 20
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
    contentContainer: {
        marginLeft: 10,
        marginBottom: 2,
        marginTop: 4,
        paddingRight: 20,
    },
    capture: {
        backgroundColor: '#fff',
        borderRadius: 50 / 2,
        height: 50, width: 50,
        alignSelf: 'center',
        margin: 20,
        justifyContent: 'center',
        position: 'absolute',
        top: 1

    },
    vwFlat: { flexDirection: 'row' },
    txtNopreview: {
        marginTop: 8,
        opacity: 0.8,
        color: 'gray',
        alignSelf: 'center'
    }
});
export default styles
import * as React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function Parent(props) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{
                justifyContent: 'center', alignItems: 'center',
                backgroundColor: 'rgba(211, 198, 169,0.1)', height: windowWidth * 0.56, width: windowWidth * 0.56, borderRadius: windowWidth / 2
            }}>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate("Home")}
                    style={{
                        justifyContent: 'center', alignItems: 'center',
                        backgroundColor: '#ded1b2', height: windowWidth * 0.5, width: windowWidth * 0.5, borderRadius: windowWidth / 2
                    }}>
                    <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}> Start capturing</Text>
                </TouchableOpacity>
            </View>
            <Text style={{ position: 'absolute', bottom: 10, color: 'gray', opacity: 0.6 }}>v1.0.3</Text>
        </View>
    )
}
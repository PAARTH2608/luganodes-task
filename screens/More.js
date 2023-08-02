import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import PageContainer from '../components/PageContainer'
import { COLORS, FONTS } from '../constants'
import {
    AntDesign,
    MaterialIcons,
    MaterialCommunityIcons,
    Ionicons,
    Entypo,
} from '@expo/vector-icons'

const More = () => {
    return (
        <SafeAreaView style={{ flex: 1, color: COLORS.bgcolor }}>
            <PageContainer style="light" color={COLORS.bgcolor}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginHorizontal: 22,
                        backgroundColor: COLORS.bgcolor,
                        marginVertical: 22,
                    }}
                >
                    <Text style={{ ...FONTS.h4, color: COLORS.ci }}>More</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginHorizontal: 22,
                    }}
                >
                    <View
                        style={{
                            height: 60,
                            width: 60,
                            borderRadius: 30,
                            backgroundColor: COLORS.backgroundColor,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <AntDesign name="user" size={24} color={COLORS.ci} />
                    </View>
                    <View
                        style={{
                            flexDirection: 'column',
                            marginHorizontal: 22,
                        }}
                    >
                        <Text style={{ ...FONTS.h4, marginVertical: 6, color: COLORS.white }}>
                            Almayra Zamzamy
                        </Text>
                        <Text style={{ ...FONTS.body3, color: COLORS.gray }}>
                            {' '}
                            + 62 - 1300 - 0000- 0000
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            console.log('pressed')
                        }}
                    >
                        <MaterialIcons
                            name="keyboard-arrow-right"
                            size={24}
                            color={COLORS.ci}
                        />
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        marginTop: 32,
                    }}
                >
                    <TouchableOpacity
                        onPress={() => {
                            console.log('Pressed')
                        }}
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginHorizontal: 22,
                            paddingVertical: 12,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <AntDesign
                                name="user"
                                size={24}
                                color={COLORS.ci}
                            />
                            <Text style={{ ...FONTS.h4, marginLeft: 12, color:COLORS.white }}>
                                {' '}
                                Account
                            </Text>
                        </View>
                        <MaterialIcons
                            name="keyboard-arrow-right"
                            size={24}
                            color={COLORS.ci}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            console.log('Pressed')
                        }}
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginHorizontal: 22,
                            paddingVertical: 12,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <Ionicons
                                name="chatbubble-outline"
                                size={24}
                                color={COLORS.ci}
                            />
                            <Text style={{ ...FONTS.h4, marginLeft: 12, color:COLORS.white }}>
                                {' '}
                                Chats
                            </Text>
                        </View>
                        <MaterialIcons
                            name="keyboard-arrow-right"
                            size={24}
                            color={COLORS.ci}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            console.log('Pressed')
                        }}
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginHorizontal: 22,
                            paddingVertical: 12,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <Entypo
                                name="light-down"
                                size={24}
                                color={COLORS.ci}
                            />
                            <Text style={{ ...FONTS.h4, marginLeft: 12, color:COLORS.white }}>
                                {' '}
                                Appearance
                            </Text>
                        </View>
                        <MaterialIcons
                            name="keyboard-arrow-right"
                            size={24}
                            color={COLORS.ci}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            console.log('Pressed')
                        }}
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginHorizontal: 22,
                            paddingVertical: 12,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <Ionicons
                                name="notifications-outline"
                                size={24}
                                color={COLORS.ci}
                            />
                            <Text style={{ ...FONTS.h4, marginLeft: 12, color: COLORS.white }}>
                                Notifications
                            </Text>
                        </View>
                        <MaterialIcons
                            name="keyboard-arrow-right"
                            size={24}
                            color={COLORS.ci}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            console.log('Pressed')
                        }}
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginHorizontal: 22,
                            paddingVertical: 12,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <MaterialCommunityIcons
                                name="shield-lock-open-outline"
                                size={24}
                                color={COLORS.ci}
                            />
                            <Text style={{ ...FONTS.h4, marginLeft: 12, color: COLORS.white }}>
                                Privacy
                            </Text>
                        </View>
                        <MaterialIcons
                            name="keyboard-arrow-right"
                            size={24}
                            color={COLORS.ci}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            console.log('Pressed')
                        }}
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginHorizontal: 22,
                            paddingVertical: 12,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <AntDesign
                                name="folder1"
                                size={24}
                                color={COLORS.ci}
                            />
                            <Text style={{ ...FONTS.h4, marginLeft: 12, color: COLORS.white }}>
                                Data usage
                            </Text>
                        </View>
                        <MaterialIcons
                            name="keyboard-arrow-right"
                            size={24}
                            color={COLORS.ci}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            console.log('Pressed')
                        }}
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginHorizontal: 22,
                            paddingVertical: 12,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <Ionicons
                                name="help-circle-outline"
                                size={24}
                                color={COLORS.ci}
                            />
                            <Text style={{ ...FONTS.h4, marginLeft: 12, color: COLORS.white }}>
                                Help
                            </Text>
                        </View>
                        <MaterialIcons
                            name="keyboard-arrow-right"
                            size={24}
                            color={COLORS.ci}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            console.log('Pressed')
                        }}
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginHorizontal: 22,
                            paddingVertical: 12,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <MaterialCommunityIcons
                                name="email-outline"
                                size={24}
                                color={COLORS.ci}
                            />
                            <Text style={{ ...FONTS.h4, marginLeft: 12, color: COLORS.white }}>
                                Invite Your Friends
                            </Text>
                        </View>
                        <MaterialIcons
                            name="keyboard-arrow-right"
                            size={24}
                            color={COLORS.ci}
                        />
                    </TouchableOpacity>
                </View>
            </PageContainer>
        </SafeAreaView>
    )
}

export default More

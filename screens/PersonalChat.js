import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect, useState, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, FONTS } from '../constants';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { GiftedChat, Send, Bubble } from 'react-native-gifted-chat';
import DHT from '@hyperswarm/dht-relay'
import { b4a } from 'b4a';

const PersonalChat = ({ route }) => {
    const { userName, publicKey } = route.params // Receiving the server's public key as a parameter
    console.log(userName, publicKey)
    const [messages, setMessages] = useState([])
    const [connection, setConnection] = useState(null)

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ])
    }, [])

    const onSend = useCallback(
        (messages = []) => {
            setMessages((previousMessages) =>
                GiftedChat.append(previousMessages, messages)
            )

            if (connection) {
                // Send the message using the established connection
                connection.send(JSON.stringify(messages[0]))
            }
        },
        [connection]
    )

    // Customized send button
    const renderSend = (props) => {
        return (
            <Send {...props}>
                <View
                    style={{
                        height: 36,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 36,
                        borderRadius: 18,
                        backgroundColor: COLORS.ciDark,
                        marginRight: 5,
                        marginBottom: 5,
                    }}
                >
                    <FontAwesome name="send" size={12} color={COLORS.white} />
                </View>
            </Send>
        )
    }

    // Customized sender messages
    const renderBubble = (props) => {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: COLORS.backgroundColor,
                    },
                }}
                textStyle={{
                    right: {
                        color: COLORS.white,
                    },
                }}
            />
        )
    }

    // Establish connection to the server on component mount
    useEffect(() => {
        const dht = new DHT()

        const serverPublicKey = b4a.from(publicKey, 'hex')
        const connection = dht.connect(serverPublicKey);

        connection.on('connect', () => {
            console.log('Connected to the server!')
            setConnection(connection)
        })

        connection.on('data', (data) => {
            // Handle incoming data, e.g., received messages
            console.log('Received data:', data.toString())
        })

        connection.on('close', () => {
            console.log('Connection closed')
            setConnection(null)
        })

        // Cleanup function to close the connection when the component unmounts
        return () => {
            if (connection) {
                connection.destroy()
            }
        }
    }, [publicKey])
    return (
        <SafeAreaView style={{ flex: 1, color: COLORS.bgcolor }}>
            <StatusBar style="light" backgroundColor={COLORS.bgcolor} />
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 22,
                    backgroundColor: COLORS.bgcolor,
                    height: 60,
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Contacts')}
                    >
                        <MaterialIcons
                            name="keyboard-arrow-left"
                            size={24}
                            color={COLORS.ci}
                        />
                    </TouchableOpacity>
                    <Text
                        style={{ ...FONTS.h4, marginLeft: 8, color: COLORS.ci }}
                    >
                        {userName}
                    </Text>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <TouchableOpacity
                        onPress={() => console.log('search')}
                        style={{
                            marginRight: 8,
                        }}
                    >
                        <MaterialIcons
                            name="search"
                            size={24}
                            color={COLORS.ci}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => console.log('Menu')}
                        style={{
                            marginRight: 8,
                        }}
                    >
                        <MaterialIcons
                            name="menu"
                            size={24}
                            color={COLORS.ci}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <GiftedChat
                messages={messages}
                onSend={(messages) => onSend(messages)}
                user={{
                    _id: 1,
                }}
                renderBubble={renderBubble}
                renderSend={renderSend}
                scrollToBottom
                alwaysShowSend
                textInputStyle={{
                    color: COLORS.white,
                    borderRadius: 22,
                    marginRight: 6,
                    paddingHorizontal: 12,
                    backgroundColor: COLORS.backgroundColor,
                }}
                messagesContainerStyle={{
                    backgroundColor: COLORS.bgcolor,
                }}
                scrollToBottomStyle={{
                    backgroundColor: COLORS.backgroundColor,
                }}
            />
        </SafeAreaView>
    )
}

export default PersonalChat

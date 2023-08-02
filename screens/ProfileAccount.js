import { View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import PageContainer from '../components/PageContainer';
import { COLORS } from '../constants';
import { AntDesign } from '@expo/vector-icons';
import Input from '../components/Input';
import Button from '../components/Button';
import PageTitle from '../components/PageTitle';

const ProfileAccount = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.bgcolor }}>
            <PageContainer color={COLORS.bgcolor}>
                <PageTitle
                    title="Profile"
                    onPress={() => navigation.navigate('Verification')}
                    color
                />
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <View
                        style={{
                            width: 100,
                            height: 100,
                            backgroundColor: COLORS.backgroundColor,
                            borderRadius: 50,
                            marginVertical: 48,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <AntDesign
                            name="user"
                            size={64}
                            color={COLORS.ciDark}
                        />
                        <View
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                right: 0,
                            }}
                        >
                            <AntDesign
                                name="pluscircle"
                                size={24}
                                color={COLORS.ci}
                            />
                        </View>
                    </View>

                    <View style={{ width: '100%', paddingHorizontal: 22 }}>
                        <Input
                            id="firstName"
                            placeholder="First Name (Required) "
                            backgroundColor={COLORS.backgroundColor}
                        />
                        <Input
                            id="lastName"
                            placeholder="Last Name (Optional) "
                        />

                        <Button
                            title="Save"
                            style={{
                                width: '100%',
                                paddingVertical: 12,
                                marginTop: 10,
                                marginBottom: 48,
                            }}
                            color={COLORS.ciDark}
                            onPress={() =>
                                navigation.navigate('BottomTabNavigation')
                            }
                        />
                    </View>
                </View>
            </PageContainer>
        </SafeAreaView>
    )
}

export default ProfileAccount

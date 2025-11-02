import ShareButton from "@/component/button/share.botton";
import ShareInput from "@/component/input/share.input";
import { APP_BUTTON, APP_COLOR } from "@/utils/constant";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
    },
});
function SignUpPage() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Đăng ký tài khoản</Text>
            </View>
            <ShareInput label="Họ và tên" value={name} setValue={setName} />
            <ShareInput label="Email" keyboardType="email-address" value={email} setValue={setEmail} />
            <ShareInput label="Mật khẩu" secureTextEntry={true} value={password} setValue={setPassword} />

            <ShareButton
                title="Đăng ký"
                onPress={() => console.log(name, email, password)}
                pressedStyle={{ alignSelf: "stretch" }}
                textStyle={{ color: APP_COLOR.WHITE }}
                btnStyle={{
                    backgroundColor: APP_COLOR.ORANGE,
                    borderRadius: APP_BUTTON.BORDER_RADIUS,
                    justifyContent: "center",
                    marginHorizontal: 50,
                    marginVertical: 10,
                    borderWidth: 1,
                    borderColor: "#ffffff33",
                    shadowColor: "#000",
                    shadowOpacity: 0.2,
                    shadowRadius: 8,
                    shadowOffset: { width: 0, height: 4 },
                    elevation: 5,
                }}
            />
        </SafeAreaView>
    );
}

export default SignUpPage;

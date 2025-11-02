import { APP_COLOR } from "@/utils/constant";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
const styles = StyleSheet.create({
    labelInput: {
        fontSize: 16,
        marginBottom: 6,
    },
    input: {
        height: 40,
        paddingHorizontal: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#ccc",
        paddingVertical: 8,
        borderRadius: 8,
        marginBottom: 20,
    },
});
interface IProps {
    label?: string;
    keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
    secureTextEntry?: boolean;
    value?: any;
    setValue: (v: any) => void;
}
const ShareInput = (props: IProps) => {
    const [isFocused, setIsFocus] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const { label, keyboardType, secureTextEntry = false, value, setValue } = props;
    return (
        <View>
            {label && <Text style={styles.labelInput}>{label}</Text>}
            <View>
                <TextInput
                    value={value}
                    onChangeText={(text) => setValue(text)}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    secureTextEntry={secureTextEntry && !showPassword}
                    style={[styles.input, { borderColor: isFocused ? APP_COLOR.ORANGE : APP_COLOR.GRAY }]}
                    keyboardType={keyboardType}
                    placeholder={`Nhập ${label}`}
                />
                {secureTextEntry && (
                    <FontAwesome5
                        name={showPassword ? "eye-slash" : "eye"}
                        size={20}
                        color={isFocused ? APP_COLOR.ORANGE : APP_COLOR.GRAY}
                        style={{ position: "absolute", right: 10, top: 10 }}
                        onPress={() => setShowPassword(!showPassword)}
                    />
                )}
            </View>
        </View>
    );
};
export default ShareInput;

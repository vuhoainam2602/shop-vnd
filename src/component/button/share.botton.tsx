import { Pressable, StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";

const styles = StyleSheet.create({
    btnContainer: {
        flexDirection: "row",
        paddingHorizontal: 15,
        paddingVertical: 10,
        gap: 10,
        alignItems: "center",
    },
});

interface IProps {
    title: string;
    onPress: () => void;
    textStyle?: StyleProp<TextStyle>;
    pressedStyle?: StyleProp<ViewStyle>;
    btnStyle?: StyleProp<ViewStyle>;
    icon?: React.ReactNode;
}

export default function ShareButton({ title, onPress, textStyle, pressedStyle, btnStyle, icon }: IProps) {
    return (
        <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }, pressedStyle]} onPress={onPress}>
            <View style={[styles.btnContainer, btnStyle]}>
                {icon}
                <Text style={[textStyle]}>{title}</Text>
            </View>
        </Pressable>
    );
}

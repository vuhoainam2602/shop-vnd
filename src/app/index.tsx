import bg from "@/assets/images/auth/bg.jpg";
import { APP_BUTTON, APP_COLOR } from "@/utils/constant";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { LinearGradient } from "expo-linear-gradient";
import { Link, Redirect } from "expo-router";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import ShareButton from "../component/button/share.botton";
export default function Index() {
    if (1 == 1) {
        return <Redirect href="/(auth)/signup" />;
    }
    return (
        <ImageBackground source={bg} style={{ flex: 1 }}>
            <LinearGradient style={{ flex: 1 }} colors={["transparent", "#5b5b5bff"]} locations={[0.2, 0.8]}>
                <View style={styles.container}>
                    <View style={styles.welcomeText}>
                        <Text style={styles.heading}>Welcome to </Text>
                        <Text style={styles.body}>Gym VND</Text>
                        <Text style={styles.footer}>Sống khỏe sống đẹp</Text>
                    </View>
                    <View style={styles.welcomeBtn}>
                        <View style={styles.dividerRow}>
                            <View style={styles.dividerLine} />
                            <View style={styles.dividerLabelWrap}>
                                <Text style={styles.dividerLabel}>Đăng nhập với</Text>
                            </View>
                            <View style={styles.dividerLine} />
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-around",
                                marginHorizontal: 30,
                                marginVertical: 10,
                            }}>
                            <ShareButton
                                title="Google"
                                onPress={() => alert("Google")}
                                textStyle={{ textTransform: "uppercase" }}
                                pressedStyle={{ alignSelf: "flex-start" }}
                                btnStyle={{
                                    backgroundColor: APP_COLOR.WHITE,
                                    borderRadius: APP_BUTTON.BORDER_RADIUS,
                                    justifyContent: "center",
                                    shadowColor: "#000",
                                    shadowOpacity: 0.15,
                                    shadowRadius: 6,
                                    shadowOffset: { width: 0, height: 3 },
                                    elevation: 4,
                                }}
                                icon={<FontAwesome5 name="google" size={20} color="black" />}
                            />
                            <ShareButton
                                title="Facebook"
                                onPress={() => alert("Facebook")}
                                textStyle={{ textTransform: "uppercase" }}
                                pressedStyle={{ alignSelf: "flex-start" }}
                                btnStyle={{
                                    backgroundColor: APP_COLOR.WHITE,
                                    borderRadius: APP_BUTTON.BORDER_RADIUS,
                                    justifyContent: "center",
                                    shadowColor: "#000",
                                    shadowOpacity: 0.15,
                                    shadowRadius: 6,
                                    shadowOffset: { width: 0, height: 3 },
                                    elevation: 4,
                                }}
                                icon={<FontAwesome5 name="facebook" size={20} color="#1877F2" />}
                            />
                        </View>
                        <View>
                            <ShareButton
                                title="Đăng nhập với Email"
                                onPress={() => alert("Facebook")}
                                pressedStyle={{ alignSelf: "stretch" }}
                                textStyle={{ color: APP_COLOR.WHITE }}
                                btnStyle={{
                                    backgroundColor: APP_COLOR.LIGHT_BLACK,
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
                                icon={<FontAwesome5 name="envelope" size={18} color={APP_COLOR.WHITE} />}
                            />
                        </View>
                        <Link href={"/(auth)/signup"}>
                            <View>
                                <Text>Chưa có tài khoản? Đăng ký</Text>
                            </View>
                        </Link>
                    </View>
                </View>
            </LinearGradient>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    welcomeText: {
        flex: 0.6,
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: 24,
    },
    welcomeBtn: {
        flex: 0.4,
        justifyContent: "flex-start",
    },
    heading: { fontSize: 28, fontWeight: "600", color: APP_COLOR.BLACK, opacity: 0.9 },
    body: {
        fontSize: 48,
        fontWeight: "800",
        color: APP_COLOR.ORANGE,
        marginVertical: 6,
        letterSpacing: 0.5,
    },
    footer: { fontSize: 18, fontStyle: "italic", marginTop: 4, color: APP_COLOR.WHITE, opacity: 0.85 },
    btnContainer: {},
    btnContent: {},
    dividerRow: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 30,
        marginVertical: 14,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: "#f2b7b7",
    },
    dividerLabelWrap: {
        paddingHorizontal: 12,
        paddingVertical: 2,
        borderRadius: 999,
        backgroundColor: APP_COLOR.WHITE,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
    },
    dividerLabel: {
        color: "#4a4a4a",
        fontSize: 14,
        fontWeight: "600",
    },
});

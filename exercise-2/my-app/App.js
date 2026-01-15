import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" />

        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Đăng nhập</Text>
        </View>

        {/* CONTENT */}
        <View style={styles.content}>
          <Text style={styles.title}>Nhập số điện thoại</Text>

          <Text style={styles.description}>
            Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại
            OneHousing Pro
          </Text>

          <TextInput
            placeholder="Nhập số điện thoại của bạn"
            keyboardType="phone-pad"
            style={styles.input}
          />
        </View>

        {/* BUTTON */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.buttonDisabled} disabled>
            <Text style={styles.buttonText}>Tiếp tục</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  /* HEADER */
  header: {
    height: 56,
    justifyContent: "center",
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
  },

  /* CONTENT */
  content: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },

  title: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 8,
  },

  description: {
    fontSize: 14,
    color: "#666",
    marginBottom: 24,
  },

  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    fontSize: 16,
    paddingVertical: 4,
  },

  /* FOOTER */
  footer: {
    padding: 16,
  },

  buttonDisabled: {
    height: 48,
    backgroundColor: "#f0f0f0",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    fontSize: 16,
    color: "#aaa",
    fontWeight: "500",
  },
});

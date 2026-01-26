import { StatusBar } from "expo-status-bar";
import { useState } from "react";
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
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  // Regex số điện thoại
  const phoneRegex = /^0\d{9}$/;
  const isValid = phoneRegex.test(phoneNumber);

  const handleChangePhone = (text) => {
    // Chỉ cho nhập số
    const formattedText = text.replace(/[^0-9]/g, "");
    setPhoneNumber(formattedText);

    if (formattedText.length === 0) {
      setError("");
    } else if (!phoneRegex.test(formattedText)) {
      setError("Số điện thoại không hợp lệ");
    } else {
      setError("");
    }
  };

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
            value={phoneNumber}
            onChangeText={handleChangePhone}
            maxLength={10}
          />

          {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>

        {/* FOOTER */}
        <View style={styles.footer}>
          <TouchableOpacity
            style={isValid ? styles.button : styles.buttonDisabled}
            disabled={!isValid}
            onPress={() => {
              alert("Đăng nhập thành công");
            }}
          >
            <Text style={isValid ? styles.buttonTextActive : styles.buttonText}>
              Tiếp tục
            </Text>
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
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 6,
  },

  /* FOOTER */
  footer: {
    padding: 16,
  },
  button: {
    height: 48,
    backgroundColor: "#007AFF",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonDisabled: {
    height: 48,
    backgroundColor: "#f0f0f0",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTextActive: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "500",
  },
  buttonText: {
    fontSize: 16,
    color: "#aaa",
    fontWeight: "500",
  },
});

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Alert,
} from "react-native";

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const handleSend = () => {
    if (!email.trim()) {
      Alert.alert("Lỗi", "Vui lòng nhập email của bạn.");
      return;
    }
    Alert.alert("Đã gửi!", `Link đặt lại mật khẩu đã được gửi đến ${email}`, [
      { text: "OK", onPress: () => navigation.navigate("SignIn") },
    ]);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#F2F2F2" />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.subtitle}>
          Enter your email and we'll send you a link to reset your password.
        </Text>

        <View style={styles.fieldGroup}>
          <Text style={styles.label}>Email ID</Text>
          <View style={styles.inputWrap}>
            <TextInput
              style={styles.input}
              placeholder="Enter your email!"
              placeholderTextColor="#B0B0B0"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.btnPrimary}
          onPress={handleSend}
          activeOpacity={0.85}
        >
          <Text style={styles.btnPrimaryText}>Send Reset Link</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#F2F2F2" },
  container: { flex: 1, paddingHorizontal: 28, paddingTop: 24 },
  backBtn: { marginBottom: 24 },
  backText: { fontSize: 14, color: "#F5A623", fontWeight: "700" },
  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#1A1A1A",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#777777",
    lineHeight: 22,
    marginBottom: 32,
  },
  fieldGroup: { marginBottom: 28 },
  label: { fontSize: 14, fontWeight: "700", color: "#1A1A1A", marginBottom: 8 },
  inputWrap: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "#E0E0E0",
    borderRadius: 10,
    paddingHorizontal: 14,
  },
  input: { paddingVertical: 14, fontSize: 14, color: "#333333" },
  btnPrimary: {
    backgroundColor: "#F5A623",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    shadowColor: "#F5A623",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.45,
    shadowRadius: 12,
    elevation: 6,
  },
  btnPrimaryText: { color: "#FFFFFF", fontSize: 16, fontWeight: "800" },
});

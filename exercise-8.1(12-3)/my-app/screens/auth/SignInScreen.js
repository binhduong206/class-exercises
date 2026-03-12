import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useAppContext } from "../../AppContext";

const VALID_EMAIL = "user@example.com";
const VALID_PASSWORD = "password123";

const SignInScreen = ({ navigation }) => {
  const { setIsLoggedIn } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPass] = useState(false);
  const [error, setError] = useState("");

  const handleSignIn = () => {
    setError("");
    if (!email.trim() || !password.trim()) {
      setError("Vui lòng nhập đầy đủ email và mật khẩu.");
      return;
    }
    if (email.trim() === VALID_EMAIL && password === VALID_PASSWORD) {
      setIsLoggedIn(true); // ✅ Chuyển sang MainStack
    } else {
      setError(
        "Email hoặc mật khẩu không đúng.\nDemo: user@example.com / password123",
      );
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#F2F2F2" />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.title}>Sign In</Text>

          {error ? (
            <View style={styles.errorBox}>
              <Text style={styles.errorText}>{error}</Text>
            </View>
          ) : null}

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Email ID</Text>
            <View style={styles.inputWrap}>
              <TextInput
                style={styles.input}
                placeholder="Enter your email here!"
                placeholderTextColor="#B0B0B0"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={(t) => {
                  setEmail(t);
                  setError("");
                }}
              />
            </View>
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.inputWrap}>
              <TextInput
                style={[styles.input, { flex: 1 }]}
                placeholder="Enter your password here!"
                placeholderTextColor="#B0B0B0"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={(t) => {
                  setPassword(t);
                  setError("");
                }}
              />
              <TouchableOpacity
                onPress={() => setShowPass(!showPassword)}
                style={styles.eyeBtn}
              >
                <Text style={styles.eyeIcon}>{showPassword ? "🙈" : "👁️"}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.hint}>Demo: user@example.com / password123</Text>

          <TouchableOpacity
            style={styles.forgotRow}
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text style={styles.forgotText}>Forgot password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnPrimary}
            onPress={handleSignIn}
            activeOpacity={0.85}
          >
            <Text style={styles.btnPrimaryText}>Sign In</Text>
          </TouchableOpacity>

          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>Or sign in with</Text>
            <View style={styles.dividerLine} />
          </View>

          <View style={styles.socialRow}>
            <TouchableOpacity style={styles.btnGoogle}>
              <Text style={styles.googleG}>G</Text>
              <Text style={styles.btnGoogleText}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnFacebook}>
              <Text style={styles.facebookF}>f</Text>
              <Text style={styles.btnFacebookText}>Facebook</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.signupRow}>
            <Text style={styles.signupText}>Not yet a member? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={styles.signupLink}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#F2F2F2" },
  container: {
    flexGrow: 1,
    paddingHorizontal: 28,
    paddingTop: 40,
    paddingBottom: 36,
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#1A1A1A",
    textAlign: "center",
    marginBottom: 24,
  },
  errorBox: {
    backgroundColor: "#FFE8E8",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    borderLeftWidth: 3,
    borderLeftColor: "#FF4444",
  },
  errorText: { color: "#CC0000", fontSize: 13, fontWeight: "600" },
  hint: {
    textAlign: "center",
    color: "#AAAAAA",
    fontSize: 12,
    fontStyle: "italic",
    marginBottom: 4,
  },
  fieldGroup: { marginBottom: 18 },
  label: { fontSize: 14, fontWeight: "700", color: "#1A1A1A", marginBottom: 8 },
  inputWrap: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "#E0E0E0",
    borderRadius: 10,
    paddingHorizontal: 14,
  },
  input: { paddingVertical: 14, fontSize: 14, color: "#333333", flex: 1 },
  eyeBtn: { padding: 4 },
  eyeIcon: { fontSize: 16 },
  forgotRow: { alignItems: "flex-end", marginTop: 6, marginBottom: 28 },
  forgotText: { color: "#F5A623", fontSize: 13, fontWeight: "700" },
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
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
    gap: 10,
  },
  dividerLine: { flex: 1, height: 1, backgroundColor: "#D8D8D8" },
  dividerText: { color: "#999999", fontSize: 13, fontWeight: "700" },
  socialRow: { flexDirection: "row", gap: 12, marginBottom: 28 },
  btnGoogle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "#E0E0E0",
    borderRadius: 10,
    paddingVertical: 13,
    gap: 8,
  },
  googleG: { fontSize: 15, fontWeight: "800", color: "#4285F4" },
  btnGoogleText: { fontSize: 14, fontWeight: "700", color: "#333333" },
  btnFacebook: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1877F2",
    borderRadius: 10,
    paddingVertical: 13,
    gap: 8,
  },
  facebookF: { fontSize: 16, fontWeight: "800", color: "#FFFFFF" },
  btnFacebookText: { fontSize: 14, fontWeight: "700", color: "#FFFFFF" },
  signupRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  signupText: { fontSize: 14, color: "#777777", fontWeight: "600" },
  signupLink: { fontSize: 14, color: "#F5A623", fontWeight: "800" },
});

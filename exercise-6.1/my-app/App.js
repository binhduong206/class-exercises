import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  AppState,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [phone, setPhone] = useState(""); // raw number
  const [error, setError] = useState("");
  const [appState, setAppState] = useState(AppState.currentState);

  // =========================
  // useEffect 1 - chạy 1 lần khi mở app
  // =========================
  useEffect(() => {
    console.log("App started!");
  }, []);

  // =========================
  // useEffect 2 - lắng nghe AppState
  // =========================
  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextState) => {
      console.log("AppState changed:", nextState);
      setAppState(nextState);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  // =========================
  // useEffect 3 - validate khi phone thay đổi
  // =========================
  useEffect(() => {
    if (phone.length === 0) {
      setError("");
      return;
    }

    if (phone.length < 10) {
      setError("Số điện thoại phải đủ 10 số");
      return;
    }

    const regex = /^0[0-9]{9}$/;

    if (!regex.test(phone)) {
      setError("Số điện thoại không đúng định dạng");
    } else {
      setError("");
    }
  }, [phone]);

  // =========================
  // Format chỉ để hiển thị
  // =========================
  const formatPhone = (number) => {
    if (number.length <= 4) return number;
    if (number.length <= 7) return number.slice(0, 4) + " " + number.slice(4);
    return (
      number.slice(0, 4) + " " + number.slice(4, 7) + " " + number.slice(7, 10)
    );
  };

  const isValid = phone.length === 10 && error === "";

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <Text style={styles.title} numberOfLines={1} adjustsFontSizeToFit>
          Đăng nhập
        </Text>

        <Text style={styles.heading}>Nhập số điện thoại</Text>

        <Text style={styles.desc}>
          Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Nhập số điện thoại của bạn"
          keyboardType="number-pad"
          maxLength={12}
          value={formatPhone(phone)}
          onChangeText={(text) => {
            const onlyNumber = text.replace(/[^0-9]/g, "");
            setPhone(onlyNumber);
          }}
        />

        {error !== "" && <Text style={styles.errorText}>{error}</Text>}

        <TouchableOpacity
          disabled={!isValid}
          style={[
            styles.button,
            { backgroundColor: isValid ? "#6C63FF" : "#CCCCCC" },
          ]}
          onPress={() => alert("Đăng nhập thành công!!!")}
        >
          <Text style={styles.btnText}>Tiếp tục</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  heading: {
    marginTop: 24,
    fontSize: 18,
    fontWeight: "bold",
  },
  desc: {
    marginTop: 8,
    fontSize: 14,
    color: "#555",
  },
  input: {
    marginTop: 16,
    borderBottomWidth: 1,
    borderColor: "#aaa",
    fontSize: 16,
    paddingVertical: 8,
  },
  errorText: {
    color: "red",
    marginTop: 4,
    fontSize: 13,
  },
  button: {
    marginTop: 32,
    height: 48,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

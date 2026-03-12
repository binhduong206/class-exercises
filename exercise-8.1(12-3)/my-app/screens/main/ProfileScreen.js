import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useAppContext } from "../../AppContext";

const ProfileScreen = () => {
  const { setIsLoggedIn } = useAppContext();

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Account</Text>
      </View>

      <View style={styles.banner} />

      <View style={styles.card}>
        <View style={styles.avatarWrap}>
          <View style={styles.avatar}>
            <Text style={styles.avatarEmoji}>👤</Text>
          </View>
        </View>

        <Text style={styles.name}>Ban Binh Duong</Text>
        <Text style={styles.role}>Mobile developer</Text>
        <Text style={styles.bio}>
          I have above 5 years of experience in native mobile apps development,
          now i am learning React Native
        </Text>

        {/* ✅ Sign Out → set isLoggedIn = false → về AuthStack */}
        <TouchableOpacity
          style={styles.btnSignOut}
          onPress={() => setIsLoggedIn(false)}
          activeOpacity={0.85}
        >
          <Text style={styles.btnSignOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#F2F2F2" },
  header: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  headerTitle: { fontSize: 18, fontWeight: "800", color: "#1A1A1A" },
  banner: { height: 140, backgroundColor: "#4FC3F7" },
  card: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 32,
    paddingBottom: 20,
  },
  avatarWrap: { marginTop: -44, marginBottom: 16 },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: "#E0E0E0",
    borderWidth: 4,
    borderColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
  avatarEmoji: { fontSize: 40 },
  name: { fontSize: 22, fontWeight: "800", color: "#1A1A1A", marginBottom: 6 },
  role: { fontSize: 14, fontWeight: "700", color: "#F5A623", marginBottom: 14 },
  bio: {
    fontSize: 14,
    color: "#777777",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 28,
  },
  btnSignOut: {
    backgroundColor: "#F5A623",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 48,
    alignItems: "center",
    elevation: 6,
  },
  btnSignOutText: { color: "#FFFFFF", fontSize: 15, fontWeight: "800" },
});

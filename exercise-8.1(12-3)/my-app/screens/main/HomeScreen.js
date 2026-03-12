import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";

const CATEGORIES = [
  { id: "1", name: "Pizza", emoji: "🍕", bg: "#FFE8D6" },
  { id: "2", name: "Burgers", emoji: "🍔", bg: "#D6EAFF" },
  { id: "3", name: "Steak", emoji: "🥩", bg: "#D6FFE8" },
  { id: "4", name: "Sushi", emoji: "🍣", bg: "#FFD6F5" },
];

const POPULAR_1 = [
  {
    id: "1",
    name: "Food 1",
    origin: "By Viet Nam",
    price: "1$",
    discount: null,
    bg: "#F5F0E8",
  },
  {
    id: "2",
    name: "Food 2",
    origin: "By Japan",
    price: "3$",
    discount: null,
    bg: "#E8F5EE",
  },
];

const POPULAR_2 = [
  {
    id: "3",
    name: "Food 3",
    origin: "By Korea",
    price: "5$",
    discount: "10% OFF",
    bg: "#FFF0E8",
  },
  {
    id: "4",
    name: "Food 4",
    origin: "By Italy",
    price: "4$",
    discount: null,
    bg: "#E8EEFF",
  },
];

const FoodCard = ({ item }) => (
  <TouchableOpacity style={styles.itemCard}>
    <View style={[styles.itemImg, { backgroundColor: item.bg }]}>
      <Text style={styles.itemEmoji}>🍽️</Text>
      {item.discount && (
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>{item.discount}</Text>
        </View>
      )}
    </View>
    <Text style={styles.itemName}>{item.name}</Text>
    <Text style={styles.itemOrigin}>{item.origin}</Text>
    <Text style={styles.itemPrice}>{item.price}</Text>
  </TouchableOpacity>
);

const HomeScreen = () => (
  <SafeAreaView style={styles.safe}>
    <StatusBar barStyle="dark-content" backgroundColor="#F7F7F7" />
    <ScrollView
      contentContainerStyle={styles.scroll}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Explorer</Text>
      </View>

      <View style={styles.searchBar}>
        <Text style={styles.searchPin}>📍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for meals or area"
          placeholderTextColor="#BBBBBB"
        />
        <Text style={styles.searchIcon}>🔍</Text>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Top Categories</Text>
        <Text style={styles.filterText}>▼ Filter</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.catRow}
      >
        {CATEGORIES.map((cat) => (
          <TouchableOpacity key={cat.id} style={styles.catCard}>
            <View style={[styles.catImgBox, { backgroundColor: cat.bg }]}>
              <Text style={styles.catEmoji}>{cat.emoji}</Text>
            </View>
            <Text style={styles.catName}>{cat.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Items</Text>
        <Text style={styles.viewAll}>View all</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.itemRow}
      >
        {POPULAR_1.map((item) => (
          <FoodCard key={item.id} item={item} />
        ))}
      </ScrollView>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Items</Text>
        <Text style={styles.viewAll}>View all</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.itemRow}
      >
        {POPULAR_2.map((item) => (
          <FoodCard key={item.id} item={item} />
        ))}
      </ScrollView>

      <View style={{ height: 20 }} />
    </ScrollView>
  </SafeAreaView>
);

export default HomeScreen;

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#F7F7F7" },
  scroll: { paddingBottom: 20 },
  header: { paddingHorizontal: 20, paddingTop: 16, paddingBottom: 8 },
  headerTitle: { fontSize: 22, fontWeight: "800", color: "#1A1A1A" },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginHorizontal: 16,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#EEEEEE",
    elevation: 2,
  },
  searchPin: { fontSize: 16, marginRight: 6 },
  searchInput: { flex: 1, fontSize: 14, color: "#333" },
  searchIcon: { fontSize: 16 },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  sectionTitle: { fontSize: 16, fontWeight: "800", color: "#1A1A1A" },
  filterText: { fontSize: 13, color: "#F5A623", fontWeight: "700" },
  viewAll: { fontSize: 13, color: "#F5A623", fontWeight: "700" },
  catRow: { paddingLeft: 16, marginBottom: 24 },
  catCard: { alignItems: "center", marginRight: 16, width: 72 },
  catImgBox: {
    width: 72,
    height: 64,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 6,
  },
  catEmoji: { fontSize: 28 },
  catName: { fontSize: 12, fontWeight: "700", color: "#333" },
  itemRow: { paddingLeft: 16, marginBottom: 24 },
  itemCard: {
    width: 160,
    marginRight: 14,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    overflow: "hidden",
    elevation: 2,
  },
  itemImg: {
    width: "100%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  itemEmoji: { fontSize: 40 },
  discountBadge: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "#FF4444",
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  discountText: { color: "#FFF", fontSize: 10, fontWeight: "800" },
  itemName: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1A1A1A",
    paddingHorizontal: 10,
    paddingTop: 8,
  },
  itemOrigin: {
    fontSize: 12,
    color: "#999",
    paddingHorizontal: 10,
    marginTop: 2,
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: "800",
    color: "#F5A623",
    paddingHorizontal: 10,
    paddingBottom: 10,
    marginTop: 4,
  },
});

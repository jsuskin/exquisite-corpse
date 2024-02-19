import React from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "../../../styles/messages";

export default function ({ item }: any) {
  const { from, message } = item;
  
  return (
    <Pressable
      style={styles.message}
      onPress={() => {
        console.log({ item });
      }}
    >
      <View style={styles.senderInfo}>
        <Text style={styles.boldText}>From </Text>
        <Text style={styles.boldText}>{from}</Text>
      </View>
      <Text>{message}</Text>
    </Pressable>
  );
}

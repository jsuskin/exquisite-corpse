import React, { useEffect, useState } from "react";
import { FlatList, Text, View, Pressable } from "react-native";
import { styles } from "../../styles/messages";
import { readDataFromCollection } from "../../util/helper-methods/firebase";
import Message from "../../components/Messages/Message";

export default function () {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await readDataFromCollection("messages");
      setMessages(response);
    })();
  }, []);

  useEffect(() => {
    console.log({ messages });
  }, [messages]);

  return (
    <View style={styles.container}>
      <View style={styles.messages}>
        <FlatList
          ListHeaderComponent={() => (
            <View>
              <Text style={styles.headerText}>Messages</Text>
            </View>
          )}
          ListHeaderComponentStyle={styles.header}
          keyExtractor={(_, i) => "" + i}
          data={messages}
          renderItem={Message}
        />
      </View>
    </View>
  );
}

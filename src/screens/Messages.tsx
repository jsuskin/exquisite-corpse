import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import Message from "../components/Messages/Message";
import { styles } from "../styles/messages";
import { readDataFromCollection } from "../util/helper-methods/firebase";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function () {
  const [messages, setMessages] = useState([]);
  const [selectedMessageId, setSelectedMessageId] = useState<null | string>(
    null
  );
  const navigation: NavigationProp = useNavigation();

  useEffect(() => {
    (async () => {
      const response = await readDataFromCollection("messages");
      setMessages(response);
    })();
  }, []);

  useEffect(() => {
    console.log({ messages });
  }, [messages]);

  useEffect(() => {
    if(selectedMessageId) {
      console.log({selectedMessageId})
      navigation.navigate("Message", { selectedMessageId })
    };
  }, [selectedMessageId]);

  const renderMessage = (
    item: any,
    setSelectedMessageId: (prev: string | null) => void
  ) => <Message {...{ item, setSelectedMessageId }} />;

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
          renderItem={({ item }) => renderMessage(item, setSelectedMessageId)}
        />
      </View>
    </View>
  );
}

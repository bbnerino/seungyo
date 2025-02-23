import { theme } from "@/constants/theme";
import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface Props {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  buttons?: { text: string; onPress: () => void }[];
}

const CustomModal = ({ visible, onClose, children, buttons = [] }: Props) => {
  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <TouchableOpacity
        style={styles.modalBackground}
        activeOpacity={1}
        onPress={onClose}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity activeOpacity={1}>
            <View style={styles.modalText}>{children}</View>
            {/* 버튼 렌더링 */}
            <View
              style={
                buttons.length === 2 ? styles.buttonRow : styles.buttonColumn
              }
            >
              {buttons.map((button, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    buttons.length === 2 ? styles.twoButton : styles.oneButton,
                    buttons.length === 2 &&
                      index === 0 &&
                      styles.twoButtonFirst,
                  ]}
                  onPress={button.onPress}
                >
                  <Text
                    style={[
                      styles.buttonText,
                      buttons.length === 2 &&
                        index === 0 &&
                        styles.buttonTextWhite,
                    ]}
                  >
                    {button.text}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: 280,
  },
  buttonColumn: {
    width: "100%",
    marginTop: 10,
  },
  buttonRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 10,
  },
  modalText: {
    marginBottom: 15,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  oneButton: {
    backgroundColor: theme.color.green,
    padding: 12,
    height: 48,
    borderRadius: 12,
    width: "100%", // 긴 버튼
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  twoButton: {
    backgroundColor: theme.color.green,
    padding: 12,
    borderRadius: 12,
    width: "48%", // 좌우 버튼
    alignItems: "center",
  },
  twoButtonFirst: {
    backgroundColor: theme.color.gray50,
    color: theme.color.green,
    padding: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonTextWhite: {
    color: theme.color.green,
  },
});

export default CustomModal;

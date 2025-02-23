import { Linking, Modal, StyleSheet, Text, View } from "react-native";
import Button from "../button/Button";

type props = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
};
export default function PhotoPermissionModal(props: props) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => props.setModalVisible(false)}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          justifyContent: "center",
          alignItems: "center",
          padding: 27,
        }}
      >
        <View style={styles.ModalBox}>
          <View>
            <Text style={styles.ModalTitle}>사진 접근 권한 요청</Text>
            <Text style={styles.ModalContent}>
              프로필 사진 설정을 위해{"\n"}휴대폰 설정 페이지로 이동합니다.
              {"\n"}
              전체 접근 권한을 허용해 주세요.
            </Text>
          </View>

          <View style={styles.ButtonWrap}>
            <Button
              style={styles.CancleButton}
              onPress={() => props.setModalVisible(false)}
            >
              <Text style={{ color: "#02C37D" }}>취소</Text>
            </Button>
            <Button
              style={styles.ConfirmButton}
              onPress={() => {
                Linking.openSettings();
                props.setModalVisible(false);
              }}
            >
              확인
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  ModalBox: {
    width: "100%",
    height: 227,
    backgroundColor: "#FBFBFB",
    borderRadius: 12,
    borderWidth: 0.8,
    borderColor: "#EFEFEF",
    paddingTop: 26,
    paddingHorizontal: 20,
    paddingBottom: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  ModalTitle: {
    fontWeight: 600,
    fontSize: 18,
    lineHeight: 27,
    color: "#161717",
    textAlign: "center",
    marginBottom: 10,
  },
  ModalContent: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 24,
    color: "#636363",
    textAlign: "center",
  },
  ButtonWrap: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    gap: 10,
  },
  CancleButton: {
    flex: 1,
    height: 48,
    backgroundColor: "#EFEFEF",
    borderRadius: 12,
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 24,
    color: "#02C37D",
  },
  ConfirmButton: {
    flex: 1,
    height: 48,
    backgroundColor: "#02C37D",
    borderRadius: 12,
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 24,
    color: "#FCFCFC",
  },
});

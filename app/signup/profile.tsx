import Button from "@/components/ui/button/Button";
import { Layout } from "@/components/ui/layout/Layout";
import { theme } from "@/constants/theme";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Alert,
} from "react-native";
import PhotoPermissionModal from "@/components/ui/modal/PhotoPermissionModal";
import useHandleImage from "@/hooks/useHandleImage";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function SignupProfileScreen() {
  const router = useRouter();
  const inputRef = useRef<TextInput>(null);
  const [buttonEnable, setButtonEnable] = useState<boolean>(false);

  const { image, modal, setModal, onPreesImage } = useHandleImage();

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("닉네임을 입력해주세요")
      .matches(/^[a-zA-Z0-9가-힣]+$/, "특수문자나 공백 없이 입력해주세요.")
      .max(12, "닉네임은 최대 12자까지 입력할 수 있습니다."),
  });

  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data: any) => {
    console.log("입력된 데이터:", data);
  };
  const onError = (err: any) => {
    console.log(err);

    setButtonEnable(false);

    if (err.name) {
      Alert.alert(err.name.message);
      return;
    }
  };

  return (
    <Layout>
      <PhotoPermissionModal modalVisible={modal} setModalVisible={setModal} />
      <View style={styles.title_container}>
        <Layout.Title>프로필을 설정해 주세요!</Layout.Title>
        <Layout.SubTitle>
          어떤 이름으로 불리고 싶나요?{"\n"}
          사진은 나중에 추가해도 괜찮아요.
        </Layout.SubTitle>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.profileWrap} onPress={onPreesImage}>
          {image && (
            <Image source={{ uri: image }} style={styles.profileImage} />
          )}
          {!image && (
            <Image
              source={require("@/assets/images/character/eagles.png")}
              style={styles.profileImage}
            />
          )}
          <TouchableOpacity style={styles.cameraButton}>
            <ImageBackground
              style={styles.cameraIcon}
              source={require("@/assets/images/button/camera.png")}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </TouchableOpacity>
        <Controller
          control={control}
          name="name"
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => (
            <View style={{ width: "100%" }}>
              <View style={styles.inputBox}>
                <TouchableOpacity
                  style={styles.inputWrap}
                  onPress={() => inputRef.current?.focus()}
                >
                  <Text style={styles.inputTitle}>닉네임</Text>
                  <TextInput
                    {...field}
                    ref={inputRef}
                    maxLength={12}
                    style={styles.input}
                    placeholder="12자 이내, 특수문자(공백) 불가"
                    placeholderTextColor={"#8C8C8C"}
                  />
                </TouchableOpacity>
                {field.value?.length > 0 && (
                  <TouchableOpacity
                    style={styles.clearButton}
                    onPress={() => setValue("name", "")}
                  >
                    <Image
                      source={require("@/assets/images/button/delete_icon.png")}
                      // style={styles.del}
                    />
                  </TouchableOpacity>
                )}
              </View>
              <Text style={styles.TextLength}>
                {field.value?.length ?? 0} / 12
              </Text>
            </View>
          )}
        />
      </View>
      <Button
        position="bottom"
        // disabled={!buttonEnable}
        // style={[!buttonEnable && styles.disabledButton]}
        // onPress={() => {
        //   handleSubmit(onSubmit);
        //   // router.push("/signup/profile");
        // }}
        onPress={handleSubmit(onSubmit, onError)}
      >
        가입 완료
      </Button>
    </Layout>
  );
}

const styles = StyleSheet.create({
  title_container: {
    height: 56,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 8,
  },
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    padding: 20,
    gap: 20,
  },
  profileWrap: {
    position: "relative",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderWidth: 1.5,
    borderColor: "#EFEFEF",
    objectFit: "cover",
    borderRadius: "100%",
  },
  cameraButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 32,
    height: 32,
    borderWidth: 1.5,
    borderColor: "#FFFFFF",
    backgroundColor: "#EFEFEF",
    borderRadius: "100%",
    justifyContent: "center", // ⬅ 추가
    alignItems: "center", // ⬅ 추가
  },
  cameraIcon: {
    width: 16.67,
    height: 15,
    marginBottom: 2,
  },
  inputBox: {
    width: "100%",
    height: 80,
    borderWidth: 0.8,
    borderColor: "#EFEFEF",
    borderRadius: 12,
    backgroundColor: "#FBFBFB",
    paddingHorizontal: 16,
    position: "relative",
  },
  inputWrap: {
    gap: 4,
    paddingVertical: 16,
    // width: "calc(100% - 48px)",
    width: "85%",
  },
  inputTitle: {
    fontWeight: 600,
    fontSize: 13,
    lineHeight: 19,
    color: "#CACACA",
  },
  input: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 24,
    // TODO : 인풋입력 시 컬러 디자인 팀에 문의
    // color: "#8C8C8C",
  },
  clearButton: {
    position: "absolute",
    bottom: 18,
    right: 18,
  },
  disabledButton: {
    backgroundColor: "#8BE3C3",
  },
  TextLength: {
    width: "100%",
    textAlign: "left",
    fontWeight: 400,
    fontSize: 13,
    color: "#CACACA",
    paddingHorizontal: 15,
    marginTop: 8,
  },
});

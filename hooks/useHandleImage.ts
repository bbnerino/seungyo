import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useActionSheet } from "@expo/react-native-action-sheet";

export default function useHandleImage() {
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  const { showActionSheetWithOptions } = useActionSheet();
  const [image, setImage] = useState<string | null>(null);
  const [modal, setModal] = useState<boolean>(false);

  const onPreesImage = () => {
    if (image) {
      handlePhotoOption();
    } else {
      handleSelectPhoto();
    }
  };

  // 사진 있을 때, 옵션 선택
  const handlePhotoOption = () => {
    const options = ["취소", "사진 변경", "사진 삭제"];
    const cancelButtonIndex = 0;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
      },
      (buttonIndex) => {
        if (buttonIndex === 1) {
          handleSelectPhoto();
        } else if (buttonIndex === 2) {
          setImage(null);
        }
      }
    );
  };

  // 사진 없을 때, 권한 띄우기
  const handleSelectPhoto = async () => {
    if (!status?.granted) {
      const permission = await requestPermission();
      if (!permission.granted) {
        setModal(true);
        return;
      }
    }

    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return { image, modal, setModal, onPreesImage };
}

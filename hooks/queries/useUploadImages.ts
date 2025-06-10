import uploadImages from "@/api/image";
import { useMutation } from "@tanstack/react-query";

const useUploadImages = () => {
  return useMutation({
    mutationFn: uploadImages,
  });
};

export default useUploadImages;

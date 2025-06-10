import $axios from "@/api/axios";

const uploadImages = async (body: FormData): Promise<string[]> => {
  const { data } = await $axios.post("/images", body, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

export default uploadImages;

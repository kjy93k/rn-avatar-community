import $axios from "@/api/axios";

const setHeader = (key: string, value: string) => {
  $axios.defaults.headers.common[key] = value;
};

const removeHeader = (key: string) => {
  if (!$axios.defaults.headers.common[key]) return;
  delete $axios.defaults.headers.common[key];
};

export { removeHeader, setHeader };

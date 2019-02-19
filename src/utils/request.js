import { request } from "@tarojs/taro";

export default opt => {
  return request(opt).then(res => {
    const { statusCode, data } = res;
    if (statusCode >= 200 && statusCode <= 300) {
      return data;
    } else {
      throw new Error("Failed to retrieve data, status code: " + statusCode);
    }
  });
};

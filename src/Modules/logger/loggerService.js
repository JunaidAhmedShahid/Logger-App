import axios from "axios";

export const getMockedData = async () => {
  return axios.get(
    "https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f"
  );
};

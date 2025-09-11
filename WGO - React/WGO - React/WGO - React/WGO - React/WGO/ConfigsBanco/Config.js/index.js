import Constants from "expo-constants";

let host = "localhost"; // fallback para evitar erro
if (Constants.expoConfig?.hostUri) {
  host = Constants.expoConfig.hostUri.split(":")[0];
}

export const API_URL = `http://${host}:8800`;
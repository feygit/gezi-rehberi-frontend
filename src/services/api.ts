import axios from "axios";

const API_BASE_URL = "https://turistik-yerler.vercel.app";

export interface LoginData {
  eposta: string;
  sifre: string;
}

export interface RegisterData {
  ad: string;
  soyad: string;
  eposta: string;
  sifre: string;
}

export const api = {
  login: async (data: LoginData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/giris`, data);
      return response.data;
    } catch (error) {
      console.error("Login Error:", error);
      console.log(error);
    }
  },

  register: async (data: RegisterData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/kullanici`, data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

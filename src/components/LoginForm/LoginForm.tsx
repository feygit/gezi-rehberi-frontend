import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import toast from "react-hot-toast";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    eposta: "",
    sifre: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = () => {
    navigate("/Home");
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      setLoading(true);
      const response = await api.login(formData);
      console.log(response);
      if (response.hata === false) {
        console.log(response);
        toast.success("Başarılı Giriş");
        handleLogin();
      } else {
        toast.error("Eposta yada Şifre Hatalıdır");
      }
    } catch (error) {
      console.log("Login Error:", error);
      toast.error("Giriş hatası oluştu lütfen tekrar giriş yapınız");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form dir="ltr" action="post" onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
          <Mail className="w-5 h-5" />
        </div>
        <input
          type="email"
          name="eposta"
          value={formData.eposta}
          onChange={handleChange}
          placeholder="E-Posta"
          className="w-full pr-3 pl-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-left"
          required
        />
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
          <Lock className="w-5 h-5" />
        </div>
        <input
          type="password"
          name="sifre"
          value={formData.sifre}
          onChange={handleChange}
          placeholder="Şifre"
          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-left"
          required
        />
      </div>

      <div className="flex items-center justify-between text-sm">
        <button
          type="button"
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          Şifremi Unuttum
        </button>
        <label className="flex items-center">
          <input type="checkbox" className="ml-2" />
          <span className="text-gray-600">Beni Hatırla</span>
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? "Oturum açıyorum..." : "Oturum aç"}
      </button>
    </form>
  );
};

export default LoginForm;

import React, { useState } from "react";
import { User, Mail, Lock } from "lucide-react";
import toast from "react-hot-toast";
import { api } from "../../services/api";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    ad: "",
    soyad: "",
    eposta: "",
    sifre: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    const response = await api.register({
      ad: formData.ad,
      soyad: formData.soyad,
      eposta: formData.eposta,
      sifre: formData.sifre,
    });
    toast.success("Hesap başarıyla oluşturuldu");
    console.log("Registration successful:", response);
  };

  return (
    <form action="POST" onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
          <User className="w-5 h-5" />
        </div>
        <input
          type="text"
          name="ad"
          value={formData.ad}
          onChange={handleChange}
          placeholder="Ad"
          className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-right"
          required
        />
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
          <User className="w-5 h-5" />
        </div>
        <input
          type="text"
          name="soyad"
          value={formData.soyad}
          onChange={handleChange}
          placeholder="Soyad"
          className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-right"
          required
        />
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
          <Mail className="w-5 h-5" />
        </div>
        <input
          type="email"
          name="eposta"
          value={formData.eposta}
          onChange={handleChange}
          placeholder="E-Posta"
          className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-right"
          required
        />
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
          <Lock className="w-5 h-5" />
        </div>
        <input
          type="password"
          name="sifre"
          value={formData.sifre}
          onChange={handleChange}
          placeholder="Şifre"
          className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-right"
          required
        />
      </div>

      <div className="flex items-center justify-end text-sm">
        <label className="flex items-center">
          <input type="checkbox" className="ml-2" required />
          <span className="text-gray-600">
            Şartları ve koşulları kabul ediyorum
          </span>
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? "Hesap oluşturuluyor..." : "Bir hesap oluşturun"}
      </button>
    </form>
  );
};

export default RegisterForm;

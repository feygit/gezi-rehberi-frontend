import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import toast from "react-hot-toast";
import { api } from "../services/api";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
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

    try {
      const response = await api.login(formData);
      if (response.success) {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("حدث خطأ غير متوقع");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form action="post" onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
          <Mail className="w-5 h-5" />
        </div>
        <input
          type="email"
          name="eposta"
          value={formData.eposta}
          onChange={handleChange}
          placeholder="البريد الإلكتروني"
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
          placeholder="كلمة المرور"
          className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-right"
          required
        />
      </div>

      <div className="flex items-center justify-between text-sm">
        <button
          type="button"
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          نسيت كلمة المرور؟
        </button>
        <label className="flex items-center">
          <input type="checkbox" className="ml-2" />
          <span className="text-gray-600">تذكرني</span>
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
      </button>
    </form>
  );
};

export default LoginForm;

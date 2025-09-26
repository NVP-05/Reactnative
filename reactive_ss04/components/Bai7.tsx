import React, { useState } from "react";

interface FormState {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

type ErrorState = Partial<Record<keyof FormState, string>>;

export default function RegisterForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<ErrorState>({});
  const [success, setSuccess] = useState(false);

  const validateField = (name: keyof FormState, value: string): string => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) error = "Vui lòng nhập họ tên.";
        break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) error = "Vui lòng nhập email.";
        else if (!emailRegex.test(value)) error = "Email không đúng định dạng.";
        break;
      case "password":
        if (!value) error = "Vui lòng nhập mật khẩu.";
        else if (value.length < 6) error = "Mật khẩu phải có ít nhất 6 ký tự.";
        break;
      case "confirmPassword":
        if (value !== form.password) error = "Mật khẩu không trùng khớp.";
        break;
    }
    return error;
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name as keyof FormState, value),
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    const newErrors: ErrorState = {};
    (Object.keys(form) as (keyof FormState)[]).forEach((key) => {
      const error = validateField(key, form[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccess(true);
    }
  };

  return (
    <div className="form-container">
      <h2>Tạo tài khoản</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Họ và tên"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="Mật khẩu"
            value={form.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <div>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Xác nhận mật khẩu"
            value={form.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={
            !form.name || !form.email || !form.password || !form.confirmPassword
          }
        >
          Đăng ký
        </button>
      </form>

      {success && (
        <div className="success">
          <p>✅ Đăng ký tài khoản thành công!</p>
        </div>
      )}
    </div>
  );
}

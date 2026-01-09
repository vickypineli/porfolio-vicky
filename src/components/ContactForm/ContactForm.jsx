// src/components/ContactForm/ContactForm.jsx

import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import AnimatedItem from "../Animation/AnimatedItem";
import styles from "./ContactForm.module.scss";

export default function ContactForm() {
  const { t } = useTranslation("contact");

  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
  });

  const [errors, setErrors] = useState({});
  const firstErrorRef = useRef(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = (data) => {
    const newErrors = {};

    if (!data.name.trim()) {
      newErrors.name = t("errors.name_required");
    }

    if (!data.email.trim()) {
      newErrors.email = t("errors.email_required");
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = t("errors.email_invalid");
    }

    if (!data.message.trim()) {
      newErrors.message = t("errors.message_required");
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    if (form.company) return; // honeypot

    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/abcdwxyz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      setForm({ name: "", email: "", message: "", company: "" });
    } catch {
      setStatus("error");
    }
  };

  /* 🔽 Scroll automático al primer error */
  useEffect(() => {
    if (firstErrorRef.current) {
      firstErrorRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      firstErrorRef.current.focus();
    }
  }, [errors]);

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      noValidate
      aria-live="polite"
    >
      {/* NAME */}
      <label>
        {t("form_name")}
        <input
          ref={errors.name ? firstErrorRef : null}
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <AnimatedItem as="p" className={styles.error}>
            {errors.name}
          </AnimatedItem>
        )}
      </label>

      {/* EMAIL */}
      <label>
        {t("form_email")}
        <input
          ref={!errors.name && errors.email ? firstErrorRef : null}
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <AnimatedItem as="p" className={styles.error}>
            {errors.email}
          </AnimatedItem>
        )}
      </label>

      {/* MESSAGE */}
      <label>
        {t("form_message")}
        <textarea
          ref={
            !errors.name && !errors.email && errors.message
              ? firstErrorRef
              : null
          }
          name="message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <AnimatedItem as="p" className={styles.error}>
            {errors.message}
          </AnimatedItem>
        )}
      </label>

      {/* HONEYPOT */}
      <label className={styles.honeypot}>
        {t("form_company")}
        <input
          type="text"
          name="company"
          tabIndex="-1"
          autoComplete="off"
          onChange={handleChange}
        />
      </label>

      <button
        type="submit"
        className={styles.button}
        disabled={status === "sending" || hasErrors}
        aria-disabled={status === "sending" || hasErrors}
      >
        {status === "sending" ? t("form_sending") : t("form_submit")}
      </button>

      {status === "success" && (
        <AnimatedItem as="p" className={styles.success} direction="up">
          {t("form_success")}
        </AnimatedItem>
      )}

      {status === "error" && (
        <p className={styles.error}>{t("form_error")}</p>
      )}
    </form>
  );
}

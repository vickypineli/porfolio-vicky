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
    company: "", // Honeypot
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const firstErrorRef = useRef(null);

  // Auto-focus al primer error
  useEffect(() => {
    if (submitted && firstErrorRef.current) firstErrorRef.current.focus();
  }, [errors, submitted]);

  const validate = (data) => {
    const newErrors = {};
    if (!data.name.trim()) newErrors.name = t("errors.name_required");
    if (!data.email.trim()) {
      newErrors.email = t("errors.email_required");
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = t("errors.email_invalid");
    }
    if (!data.message.trim()) newErrors.message = t("errors.message_required");
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedForm = { ...form, [name]: value };
    setForm(updatedForm);

    // Validación en tiempo real
    if (submitted) {
      const validationErrors = validate(updatedForm);
      setErrors(validationErrors);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;
    if (form.company) return; // honeypot

    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/xykkggzb", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();

      setStatus("success");
      setForm({ name: "", email: "", message: "", company: "" });
      setErrors({});
      setSubmitted(false);
    } catch {
      setStatus("error");
    }
  };

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate aria-live="polite">
      {/* Nombre */}
      <label>
        {t("form_name")}
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          ref={submitted && errors.name ? firstErrorRef : null}
          aria-invalid={!!(submitted && errors.name)}
          aria-describedby={submitted && errors.name ? "error-name" : undefined}
        />
        {submitted && errors.name && (
          <AnimatedItem as="p" id="error-name" className={styles.error} direction="up">
            {errors.name}
          </AnimatedItem>
        )}
      </label>

      {/* Email */}
      <label>
        {t("form_email")}
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          ref={submitted && errors.email && !firstErrorRef.current ? firstErrorRef : null}
          aria-invalid={!!(submitted && errors.email)}
          aria-describedby={submitted && errors.email ? "error-email" : undefined}
        />
        {submitted && errors.email && (
          <AnimatedItem as="p" id="error-email" className={styles.error} direction="up">
            {errors.email}
          </AnimatedItem>
        )}
      </label>

      {/* Mensaje */}
      <label>
        {t("form_message")}
        <textarea
          name="message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
          ref={submitted && errors.message && !firstErrorRef.current ? firstErrorRef : null}
          aria-invalid={!!(submitted && errors.message)}
          aria-describedby={submitted && errors.message ? "error-message" : undefined}
        />
        {submitted && errors.message && (
          <AnimatedItem as="p" id="error-message" className={styles.error} direction="up">
            {errors.message}
          </AnimatedItem>
        )}
      </label>

      {/* Honeypot */}
      <label className={styles.honeypot} aria-hidden="true">
        {t("form_company")}
        <input type="text" name="company" tabIndex="-1" autoComplete="off" onChange={handleChange} />
      </label>

      <button type="submit" className={styles.button} disabled={status === "sending" || hasErrors}>
        {status === "sending" ? t("form_sending") : t("form_submit")}
      </button>

      {status === "success" && (
        <AnimatedItem as="p" className={styles.success} direction="up">
          {t("form_success")}
        </AnimatedItem>
      )}

      {status === "error" && (
        <AnimatedItem as="p" className={styles.error} direction="up">
          {t("form_error")}
        </AnimatedItem>
      )}
    </form>
  );
}

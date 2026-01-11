// src/pages/ContactPage/ContactPage.jsx
import { useTranslation, Trans } from "react-i18next";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ContactForm from "../../components/ContactForm/ContactForm";
import AnimatedGroup from "../../components/Animation/AnimatedGroup";
import AnimatedItem from "../../components/Animation/AnimatedItem";
import styles from "./ContactPage.module.scss";

import { FaMapMarkerAlt, FaEnvelope, FaTelegramPlane, FaGithub, FaLinkedin, FaInstagram, FaCodepen } from "react-icons/fa";
import { RiBlueskyLine } from "react-icons/ri";

export default function ContactPage() {
  const { t } = useTranslation("contact");

  return (
    <section className={styles.contactPage}>
      <div className={styles.inner}>
        <Breadcrumbs />
          <AnimatedGroup className={styles.titleWrapper} key={styles.image} stagger={0.15}>
            <AnimatedItem as="h1">{t("title")}</AnimatedItem>
            <AnimatedItem as="p">
              <Trans
                t={t}
                i18nKey={"intro"}
                components={{ strong: <strong /> }}
              />
            </AnimatedItem>
          </AnimatedGroup>
        <div className={styles.contentWrapper}>
          {/* Formulario */}
          <AnimatedGroup className={styles.formWrapper}>
            <ContactForm />
          </AnimatedGroup>
          
              {/* INFO + REDES */}
          <AnimatedGroup className={styles.contactWrapper} key={styles.contact} stagger={0.15}>
             {/* LISTA DE CONTACTO */}
            <ul className={styles.contactList}>
              <AnimatedItem as="li" className={styles.listItem}>
                <FaMapMarkerAlt />
                <span>{t("contact_info.city_value")}</span>
              </AnimatedItem>

              <AnimatedItem as="li" className={styles.listItem}>
                <FaEnvelope />
                <a href={`mailto:${t("contact_info.email")}`}>
                  {t("contact_info.email")}
                </a>
              </AnimatedItem>

              <AnimatedItem as="li" className={styles.listItem}>
                <FaTelegramPlane />
                <a
                  href={t("contact_info.telegram_link")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Telegram
                </a>
              </AnimatedItem>
            </ul>

            <AnimatedItem as="hr" />


            {/* REDES SOCIALES */}
            <ul className={styles.socialMediaList}>
              <AnimatedItem as="li">
                <a href={t("socials.github")} target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
              </AnimatedItem>

              <AnimatedItem as="li">
                <a href={t("socials.linkedin")} target="_blank" rel="noreferrer">
                  <FaLinkedin />
                </a>
              </AnimatedItem>

              <AnimatedItem as="li">
                <a href={t("socials.instagram")} target="_blank" rel="noreferrer">
                  <FaInstagram />
                </a>
              </AnimatedItem>

              <AnimatedItem as="li">
                <a href={t("socials.codepen")} target="_blank" rel="noreferrer">
                  <FaCodepen />
                </a>
              </AnimatedItem>

              <AnimatedItem as="li">
                <a href={t("socials.bluesky")} target="_blank" rel="noreferrer">
                  <RiBlueskyLine />
                </a>
              </AnimatedItem>
            </ul>
            <AnimatedItem as="hr" />

            <AnimatedItem as="p" className={styles.copyright}>
              © {new Date().getFullYear()} {t("contact_info.copyright")}
            </AnimatedItem>
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}
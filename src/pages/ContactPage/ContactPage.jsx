// src/pages/ContactPage/ContactPage.jsx

import { useTranslation, Trans } from "react-i18next";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import AnimatedGroup from "../../components/Animation/AnimatedGroup";
import AnimatedItem from "../../components/Animation/AnimatedItem";
import ContactForm from "../../components/ContactForm/ContactForm";

import styles from "./ContactPage.module.scss";

export default function ContactPage() {
    const {t} = useTranslation("contact");
    
  return (
    <section className={styles.contact}>
      <div className={styles.inner}>
        <Breadcrumbs />

        <AnimatedGroup>
          <AnimatedItem as="h1">
            {t("page_title")}
          </AnimatedItem>

          <AnimatedItem as="p">
            <Trans
              t={t}
              i18nKey="intro"
              components={{ strong: <strong /> }}
            />
          </AnimatedItem>
        </AnimatedGroup>

        <AnimatedGroup className={styles.content}>
          <AnimatedItem as="div" className={styles.block}>
            {/* <h3>{t("contact_title")}</h3> */}
            <ContactForm />
          </AnimatedItem>

          <AnimatedItem as="div" className={styles.block}>
            <h3>{t("social_title")}</h3>
            <ul className={styles.socials}>
              <li>
                <a
                  href="https://github.com/tuusuario"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/tuusuario"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/tuusuario"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/tuusuario"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://codepen.io/mariavictoriapinero"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Codepen
                </a>
              </li>
            </ul>
          </AnimatedItem>
          <AnimatedItem as="div" className={styles.block}>
                    <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
          </AnimatedItem>
        </AnimatedGroup>
      </div>
    </section>
  );
}
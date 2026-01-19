// src/components/DownloadCv/DownloadCv.jsx

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { BsFiletypePdf } from "react-icons/bs";
import styles from './DownloadCv.module.scss'; 

export default function DownloadCv({ className }) {
  const { t } = useTranslation("homeAbout");
  const handleDownload = () => {
    // 1. Ruta al archivo en tu carpeta /public
    const pdfUrl = "/assets/pdf/CV06-25.pdf";
    
    // 2. Crear un elemento ancla invisible
    const link = document.createElement("a");
    link.href = pdfUrl;
    
    // 3. Nombre con el que se guardará el archivo en el PC del usuario
    link.setAttribute("download", "CV_MVPinero.pdf");
    
    // 4. Ejecutar la descarga
    document.body.appendChild(link);
    link.click();
    
    // 5. Limpiar el DOM
    document.body.removeChild(link);
  };

return (
    <Link
      onClick={handleDownload}
      className={`${styles.cvBtn} ${className}`}
      aria-label={t("cv")} 
    >
      <span className={styles.icon}>
        <BsFiletypePdf />
      </span>
      <span className={styles.icon}>
      {t("cv")}
      </span>
      </Link>

  );
};


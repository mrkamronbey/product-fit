import { useTranslation } from "react-i18next";
import { Wrapper } from "./styled-index";

function LanguageHeader({ }) {
  const { t, i18n } = useTranslation();
  const handleLang = (e) => {
    const lang = e.currentTarget.id;
    i18n.changeLanguage(lang);
    window.location.reload();
  };
  function LanguValue() {
    return window.localStorage.getItem("i18nextLng");
  }

  return (
    <Wrapper>
      <div className="lang_btn_wrapp">
        <button
          style={
            LanguValue() === "ru"
              ? { fontWeight: "bold", color: "#fff", fontSize: "22px", background: "#f05670" }
              : { fontWeight: "bold", color: "#f05670", fontSize: "16px", background: "trasparent" }
          }
          onClick={handleLang}
          id="ru"
        >
          RU
        </button>
        <button
          style={
            LanguValue() === "uz"
              ? { fontWeight: "bold", color: "#fff", fontSize: "22px", background: "#f05670" }
              : { fontWeight: "bold", color: "#f05670", fontSize: "16px", background: "trasparent" }
          }
          onClick={handleLang}
          id="uz"
        >
          UZ
        </button>
      </div>
    </Wrapper>
  );
}
export default LanguageHeader;

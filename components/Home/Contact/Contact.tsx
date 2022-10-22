import userData from "../../userData";
import { useTranslation } from "next-i18next";


const Contact = () => {
  const { t } = useTranslation("");
  return (
    <>
      <h1 className="text-xl mt-36 mb-5 items-center justify-center">{t("contact.do you want to start investing?")}</h1>
      <a
        target="_blank"
        rel="noreferrer"
        href={userData.twitter}
        className="bg-white text-gray-800 font-bold text-lg pt-3 pb-2 px-5 rounded-full "
      >
        {t("contact.send us a message")}
      </a>
      {/* <div className="text-sm mt-3 text-gray-200">
        open for early-stage investments and collaborations
      </div> */}
    </>
  );
};

export default Contact;

import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import { TypeAnimation } from "react-type-animation";
import developing from "/images/developing.gif";

const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          filter: "contrast(130%)",
          backgroundImage: `url(${developing})`,
        }}
      >
        <header className="h-[650px] w-[100%] pt-80">
          <div className="flex h-full flex-col items-center justify-center gap-5">
            <h1 className="mt-64 text-4xl font-bold text-gray-dark text-white">
              {t("basic_info.name")}
            </h1>

            <TypeAnimation
              sequence={t("basic_info.titles", { returnObjects: true }).flatMap(
                (title: string) => [title, 1000],
              )}
              wrapper="span"
              speed={50}
              className="text-regular text-2xl text-white"
              repeat={Infinity}
            />
          </div>
        </header>

        <div className="flex justify-center gap-5 pb-2.5 pt-40">
          <Icon
            className={clsx(
              "h-full cursor-pointer text-[50px] text-gray-dark ",
              i18n.language === "en" && "brightness-50",
            )}
            icon="twemoji-flag-for-flag-united-kingdom"
            onClick={() => i18n.changeLanguage("en")}
          />
          <Icon
            className={clsx(
              "h-full cursor-pointer text-[50px] text-gray-dark ",
              i18n.language === "pl" && "brightness-50",
            )}
            icon="twemoji-flag-for-flag-poland"
            onClick={() => i18n.changeLanguage("pl")}
          />
        </div>
      </div>
    </>
  );
};

export default Header;

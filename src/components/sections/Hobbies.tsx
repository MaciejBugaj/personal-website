import { AwesomeButton } from "react-awesome-button";
import { useTranslation } from "react-i18next";
import "react-awesome-button/dist/styles.css";

import { useBoolean } from "@/hooks";
import { useState } from "react";
import { HobbyType } from "@/i18n/config";
import HobbyDialog from "../dialog/HobbyDialog";
import { Icon } from "@iconify/react";

const Hobbies = () => {
  const [isOpen, setIsOpen] = useBoolean();
  const { t } = useTranslation();
  const [selectedHobby, setSelectedHobby] = useState<HobbyType | undefined>();
  const handleHobbyDetails = (hobby: HobbyType) => {
    setSelectedHobby(hobby);
    setIsOpen.on();
  };
  return (
    <section className="bg-[#00000] px-3 py-5 pb-20 md:px-0">
      <h2 className="t py-10 text-center text-xl font-medium uppercase tracking-widest text-black">
        {t("hobbies.title")}
      </h2>
      <ul className="flex flex-wrap justify-center  gap-8">
        {t("hobbies.hobbies", { returnObjects: true }).map((hobby) => (
          <li key={hobby.name}>
            <AwesomeButton
              type="primary"
              onMouseDown={() => handleHobbyDetails(hobby)}
            >
              {hobby.name}
              <Icon icon={hobby.icon} width={30} />{" "}
            </AwesomeButton>
          </li>
        ))}
      </ul>
      <HobbyDialog
        open={isOpen}
        onClose={setIsOpen.off}
        hobby={selectedHobby}
      />
    </section>
  );
};

export default Hobbies;

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

interface BadgeProps {
  text: string;
}

const Badge = ({ text }: BadgeProps) => (
  <span className="rounded-xl bg-white px-[5px] py-[2px] text-sm text-black">
    {text}
  </span>
);

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white px-3 py-10 pb-20 md:px-0">
      <h2 className="py-10 text-center text-xl font-medium uppercase tracking-widest text-black">
        {t("experience.title")}
      </h2>

      <VerticalTimeline lineColor="#1f1f1f">
        {t("experience.experiences", { returnObjects: true }).map((exp) => (
          <VerticalTimelineElement
            key={exp.title}
            date={exp.years}
            icon={<Icon icon={exp.mainTechIcon} />}
            iconStyle={{
              backgroundColor: "#1f1f1f",
              boxShadow: "0 0 0 4px #1f1f1f",
            }}
            contentStyle={{ backgroundColor: "#1f1f1f" }}
            contentArrowStyle={{
              borderRight: "7px solid #1f1f1f",
            }}
          >
            <Badge text={exp.mainTech} />

            <h3 className="text-lg font-bold text-white">{exp.title}</h3>
            <h4 className="text-md font-bold text-white">{exp.company}</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <Badge key={tech} text={tech} />
              ))}
            </div>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconClassName="bg-white text-white"
          icon={<Icon icon="eos-icons:hourglass" />}
          iconStyle={{
            backgroundColor: "#1f1f1f",
            boxShadow: "0 0 0 4px #1f1f1f",
          }}
        />
      </VerticalTimeline>
    </section>
  );
};

export default Experience;

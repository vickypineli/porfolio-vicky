//src/conponents/GitHubCalendarSection/GitHubCalendarSection.jsx

import GitHubCalendar from "react-github-calendar";
import { useThemeColors } from "../../hooks/useThemeColors";
import AnimatedGroup from "../Animation/AnimatedGroup";
import AnimatedItem from "../Animation/AnimatedItem";
import styles from "./GitHubCalendarSection.module.scss";

export default function GitHubCalendarSection() {
    const theme = useThemeColors();

  const calendarTheme =
    theme === "light"
      ? {
          dark: [
            "#2a0a1f",
            "#5a0f3c",
            "#9d174d",
            "#ec4899",
            "#f9a8d4",
          ],
        }
      : {
          light: [
            "#fde2f3",
            "#ff9ded",
            "#ff27d8",
            "#ff14d5",
            "#890071",
          ],
        };

  return (
    <section className={styles.calendar}>
      <AnimatedGroup>
        <AnimatedItem as="h3">
          Actividad en GitHub
        </AnimatedItem>
        <AnimatedItem as="p">
          Contribuciones recientes y constancia en el desarrollo.
        </AnimatedItem>

        <AnimatedItem>
          <div className={styles.calendarWrapper}>
            <GitHubCalendar
              username="VICKYPINELI"
              blockSize={14}
              blockMargin={4}
              fontSize={14}
            //   showWeekdayLabels
              showMonthLabels
              colorScheme="light"
              theme={calendarTheme}
            />
          </div>
        </AnimatedItem>
      </AnimatedGroup>
    </section>
  );
}



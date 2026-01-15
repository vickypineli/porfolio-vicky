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
            "#8d0031",
            "#c80045",
            "#ff045a",
            "#ff3f81",
            "#ff7aa8",
          ],
        }
      : {
          light: [
            "#ffdce8",
            "#ff3f81",
            "#ff045a",
            "#c80045",
            "#8d0031",
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



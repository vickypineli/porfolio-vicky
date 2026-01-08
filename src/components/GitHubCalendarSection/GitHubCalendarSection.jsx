//src/conponents/GitHubCalendarSection/GitHubCalendarSection.jsx

import GitHubCalendar from "react-github-calendar";
import AnimatedGroup from "../Animation/AnimatedGroup";
import AnimatedItem from "../Animation/AnimatedItem";
import styles from "./GitHubCalendarSection.module.scss";

export default function GitHubCalendarSection() {
  return (
    <section className={styles.calendar}>
      <AnimatedGroup>
        <AnimatedItem as="h3">
          GitHub Activity
        </AnimatedItem>

        <AnimatedItem>
          <GitHubCalendar
            username="VICKYPINELI"
            blockSize={14}
            blockMargin={4}
            fontSize={14}
            colorScheme="light"
            theme={{
              light: [
                "#fde2f3", // muy claro
                "#f9b3d1",
                "#f472b6",
                "#ec4899",
                "#ac1252ff", // accent fuerte
              ],
            }}
          />
        </AnimatedItem>
      </AnimatedGroup>
    </section>
  );
}



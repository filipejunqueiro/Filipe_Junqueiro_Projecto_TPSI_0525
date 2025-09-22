import { Image, Text, Title } from "@mantine/core";
import classes from "./About.module.css";
import avatar from "../../assets/filipe_junqueiro_avatar.png";

function About() {
  return (
    <div className={classes.inner}>
      <div className={classes.content}>
        <Title className={classes.title}>
          <span className={classes.highlight}>Filipe Junqueiro</span>
          <br />
          Just a Junior Software Developer
        </Title>
        <Text c="dimmed" mt="md">
          An enthusiastic and motivated junior developer with a solid foundation
          in software development principles and a keen interest in building
          clean, efficient, and user-friendly applications. Skilled in
          collaborating within a team environment, learning new technologies
          quickly, and applying problem-solving abilities to deliver quality
          code. Eager to grow technical expertise, contribute to meaningful
          projects, and continuously improve both personal and professional
          skills in a dynamic development setting.
        </Text>
      </div>
      <Image src={avatar} className={classes.image} />
    </div>
  );
}

export default About;

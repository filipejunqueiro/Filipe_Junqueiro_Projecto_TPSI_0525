import { Carousel } from "@mantine/carousel";
import { Button, Paper, Title, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import classes from "./Projects.module.css";
import type { ProjectCardProps } from "../../types/ProjectCardProps";
import { ProjectSlides } from "./ProjectSlides";

function openWin(link: string) {
  window.open(link, "_blank");
}

function Card({ image, title, link }: ProjectCardProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{
        backgroundImage: `url(${image})`,
      }}
      className={classes.card}
    >
      <div>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button
        onClick={(event) => {
          event.preventDefault();
          openWin(link);
        }}
      >
        Open
      </Button>
    </Paper>
  );
}

function Projects() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = ProjectSlides.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <div className={classes.container}>
      <div className={classes.carousel}>
        <Carousel
          slideSize={{ base: "100%", sm: "50%" }}
          slideGap={20}
          emblaOptions={{ align: "start", slidesToScroll: mobile ? 1 : 2 }}
        >
          {slides}
        </Carousel>
      </div>
    </div>
  );
}

export default Projects;

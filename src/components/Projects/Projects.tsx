import { Carousel } from "@mantine/carousel";
import { Button, Paper, Text, Title, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import classes from "./Projects.module.css";

interface CardProps {
  image: string;
  title: string;
  link: string;
}

function openWin(link: string) {
  window.open(link, "_blank");
}

function Card({ image, title, link }: CardProps) {
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

const data = [
  {
    image:
      "https://files.gta5mod.net/mods/2025/09/Benefactor-Panto-ForFour-480x360.png",
    title:
      "A simple and modular vehicle system built for FiveM (W.I.P | Repo sill private)",
    link: "https://github.com/PFScripts/pf_vehicles",
  },
  {
    image:
      "https://storage.googleapis.com/medium-feed.appspot.com/images%2F9353691196%2Fd584cef5994fe-O-que-e-Svelte-e-por-que-voce-deve-considera-lo.jpg",
    title: "A simple boilerplate to build svelte apps for FiveM",
    link: "https://github.com/PFScripts/fivem_lua_svelte_boilerplate",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAKfo4KCYDLhxEmXOngH0KYfOyApAf59lzKQ&s",
    title: "A simple boilerplate to build react apps for FiveM",
    link: "https://github.com/PFScripts/fivem_react_vite_mantine_boilerplate",
  },
  {
    image: "https://cdn.hswstatic.com/gif/water-update.jpg",
    title: "A simple water refill system built for FiveM",
    link: "https://github.com/PFScripts/pf_wrs",
  },
];

function Projects() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
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

import { Image, Container, Group } from "@mantine/core";
import classes from "./Header.module.css";
import type { HeaderProps } from "../../types/HeaderProps";
import avatar from "../../assets/filipe_junqueiro_avatar.png";

function Header(props: HeaderProps) {
  const items = props?.components?.map((c) => (
    <span
      key={c.label}
      className={classes.link}
      data-active={props?.component?.label === c.label || undefined}
      onClick={(event) => {
        event.preventDefault();
        props.setComponent?.(c);
      }}
    >
      {c.label}
    </span>
  ));

  return (
    <header className={classes.header}>
      <Container fluid className={classes.inner}>
        <div className={classes.logo}>
          <Image src={avatar} alt="Filipe Junqueiro" h="80%" w="auto" />
          <span>Filipe Junqueiro</span>
        </div>
        <Group gap={5}>{items}</Group>
      </Container>
    </header>
  );
}

export default Header;

import { Container } from "@mantine/core";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <span>Filipe Junqueiro &#169; 2025</span>
      </Container>
    </div>
  );
}

export default Footer;

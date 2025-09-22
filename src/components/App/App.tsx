import { useState } from "react";
import type { Component } from "../../types/Component";
import classes from "./App.module.css";
import Header from "../Header/Header";
import About from "../About/About";
import Footer from "../Footer/Footer";

const components: Component[] = [
  {
    label: "About",
    component: About,
    default: true,
  },
];

function App() {
  const [component, setComponent] = useState(components.find((c) => c.default));
  const ActiveComponent = component?.component;

  return (
    <div className={classes.main_container}>
      <header>
        <Header
          components={components}
          component={component}
          setComponent={setComponent}
        />
      </header>
      <main>{ActiveComponent && <ActiveComponent />}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

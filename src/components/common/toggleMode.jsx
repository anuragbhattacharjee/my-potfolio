import React from "react";
import { ThemeConsumer } from "styled-components";
import Button from "./button";

export default function ToggleMode() {
  return (
    <ThemeConsumer>
      {(theme) => (
        <Button
          variant="normal"
          onClick={(e) =>
            theme.setTheme(
              theme.mode === "dark"
                ? { ...theme, mode: "light" }
                : { ...theme, mode: "dark" }
            )
          }
        >
          <i className="fa fa-sun-o" aria-hidden="true"></i>
        </Button>
      )}
    </ThemeConsumer>
  );
}

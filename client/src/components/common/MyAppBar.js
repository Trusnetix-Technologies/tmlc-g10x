import Link from "next/link";
import { useState } from "react";

// MUI Imports
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
// import { CssBaseline, ThemeProvider } from "@mui/material";

import { useTheme } from "@mui/material";

// Icons
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

// import { darkTheme, theme } from "@/styles/mui/theme";

export default function MyAppBar(props) {
  const theme = useTheme();

  // const [currentTheme, setCurrentTheme] = useState("dark");

  return (
    <>
      {/* <ThemeProvider theme={currentTheme === "dark" ? darkTheme : theme}> */}
      {/* <CssBaseline /> */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="Box" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() =>
                props.setCurrentTheme(
                  props.currentTheme === "dark" ? "light" : "dark"
                )
              }
            >
              {props.currentTheme === "dark" ? (
                <LightModeIcon />
              ) : (
                <DarkModeIcon />
              )}
            </IconButton>
            <Link href="/blog">
              <Button sx={{ color: theme.palette.icon.main }}>Blog</Button>
            </Link>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      {/* </ThemeProvider> */}
    </>
  );
}

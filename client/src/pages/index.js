import Head from "next/head";
import { useState } from "react"; //React Hook for State

// MUI Imports
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Home() {
  const [visible, setVisible] = useState(false); // Always call hooks at the top of the function.

  const movies = [
    {
      name: "Avengers",
      img: "https://imgix.ranker.com/list_img_v2/18864/1998864/original/the-best-the-avengers-quotes",
      desc: "Directed By Joss Whedon",
    },
    {
      name: "Terminator",
      img: "https://townsquare.media/site/295/files/2019/10/Terminator-Orion.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89",
      desc: "Directed By James Cameron",
    },
    {
      name: "Inception",
      img: "https://images5.alphacoders.com/112/1122037.jpg",
      desc: "Directed By Chris Nolan",
    },
    {
      name: "Jurassic Park",
      img: "https://i.ytimg.com/vi/Rc_i5TKdmhs/maxresdefault.jpg",
      desc: "Directed By Steven Spielberg",
    },
    {
      name: "Superman",
      img: "https://image.tmdb.org/t/p/original/3rGzY1RaVgWIP4GuOTwdHwHXSgM.jpg",
      desc: "Directed by James Gunn",
    },
  ];

  return (
    <>
      <Head>
        <title>The Movie Lovers Club | Your Favourite Movie Articles!</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
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
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
        
        <Button onClick={() => setVisible(!visible)}>Toggle</Button>
        
        <Box height="20px" />

        {visible ? (
          <Box height="200px" sx={{ background: "pink", width: "500px" }} />
        ) : (
          <></>
        )}
      </Box>
    </>
  );
}

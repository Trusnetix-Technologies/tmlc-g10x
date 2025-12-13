import Head from "next/head";
import { useState } from "react"; //React Hook for State
import Link from "next/link";

// Material
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  ThemeProvider,
} from "@mui/material";
import { useTheme } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import MyAppBar from "@/components/common/MyAppBar";

import { lightTheme, darkTheme } from "@/styles/mui/theme";
import { MyCard } from "@/styles/mui/customComponents";

export default function Home() {
  const [visible, setVisible] = useState(false); // Always call hooks at the top of the function.
  const [currentTheme, setCurrentTheme] = useState("light");

  const theme = useTheme();

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
      <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
        <CssBaseline />
        <Head>
          <title>The Movie Lovers Club | Your Favourite Movie Articles!</title>
          <meta name="description" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <MyAppBar
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
        />
        <Box>
          <Container>
            <Button onClick={() => setVisible(!visible)}>Toggle</Button>

            <Box height="20px" />

            {visible ? (
              <Box height="200px" sx={{ background: "pink", width: "500px" }} />
            ) : (
              <></>
            )}

            <Grid container spacing={2} direction="row" justifyContent="center">
              <Grid size={4}>
                <MyCard sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image="https://images.unsplash.com/photo-1761839256545-4268b03606c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Not Lizard
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </MyCard>
              </Grid>
              <Grid size={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image="https://images.unsplash.com/photo-1761839256545-4268b03606c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Not Lizard
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </ThemeProvider>
    </>
  );
}

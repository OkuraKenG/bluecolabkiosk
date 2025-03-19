import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { AppBar, Button, Dialog, IconButton, Slide, Toolbar, Typography } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import CC from '../assets/cronincruise.jpg';
import SF from '../assets/splashyfish.jpg';
import J from '../assets/jeopardy.jpg';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<unknown>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="left" ref={ref} {...props} />;
});

export default function Games() {
    const [currentGameIndex, setCurrentGameIndex] = React.useState(0);

    const gameList = [
        {
            name: 'Jeopardy',
            description: 'Learn more about water while having fun.',
            creator: 'Keathson Lam',
            img: J,
            child: <Box sx={{
                p: 1,
                height: "100%",
                width: "100%",
                background: "#000080"
            }}>
                <iframe
                    style={{
                        width: "100%",
                        height: "100%",
                        border: "none",
                    }}
                    src="https://bluecolab.github.io/BlueCoLab-Jeopardy/"></iframe>
            </Box>
        },
        {
            name: 'Cronin Cruise',
            description: 'The one and only Cronin hops over sharks. Based off of Google Chrome dinesor game.',
            creator: 'Daniel White & Jack Sullivan',
            img: CC,
            child: <Box sx={{
                p: 1,
                height: "100%",
                width: "100%",
                background: "#000080"
            }}>
                <iframe height="167" frameBorder="0" src="https://itch.io/embed/2699888" width="552"><a href="https://bluecolab.itch.io/cronin-cruise">Cronin Cruise by BlueColab</a></iframe>            </Box>
        },
        {
            name: 'Splashy Fish',
            description: 'Flappy bird remake.',
            creator: 'Daniel White & Jack Sullivan',
            img: SF,
            child: <Box sx={{
                p: 1,
                height: "100%",
                width: "100%",
                background: "#000080"
            }}>
                <iframe frameBorder="0" src="https://itch.io/embed/2699916" width="552" height="167"><a href="https://bluecolab.itch.io/splashy-fish">Splashy Fish by BlueColab</a></iframe>
            </Box>
        }
    ]

    const [open, setOpen] = React.useState(false);


    return (<Box sx={{ p: 1, height: "100%", width: "100%", textAlign: 'center', background: '#eeeeee' }}>
        <Dialog
            fullScreen
            open={open}
            onClose={() => setOpen(false)}
            slots={{ transition: Transition }}
        >
            <AppBar sx={{ position: 'relative', background: "#000080" }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={() => setOpen(false)}
                        aria-label="close"
                    >
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                        {gameList[currentGameIndex].name}
                    </Typography>
                </Toolbar>

            </AppBar>
            {gameList[currentGameIndex].child}
        </Dialog>

        <div>Play interactive games to learn about water!</div>

        <Grid container spacing={2}>
            <Grid size={3}>
                {
                    gameList.map((game, index) => {
                        return (<Item key={index} sx={{ my: 1 }}
                            onClick={() => setCurrentGameIndex(index)}
                        >{game.name}</Item>)
                    })
                }
            </Grid>
            <Grid size={9} sx={{ my: 1 }}>
                <Box sx={{ background: 'white', pb: 1 }}
                >
                    <Typography variant="h3">{
                        gameList[currentGameIndex].name
                    }</Typography>
                    <Typography variant="h6">
                        Created by:{" "}
                        {
                            gameList[currentGameIndex].creator
                        }</Typography>
                    <Typography variant="body1">
                        {
                            gameList[currentGameIndex].description
                        }
                    </Typography>

                    <img src={gameList[currentGameIndex].img} alt="game" className="mb-4" height={500} />
                    
                    <br />

                    <Button variant="contained" onClick={() => { setOpen(true) }}>Play Game</Button>
                </Box>
            </Grid>
        </Grid>
    </Box>)
}
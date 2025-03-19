import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Box } from '@mui/material';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="left" ref={ref} {...props} />;
});

interface CardForCarouselProps {
  title: string,
  image: string,
  children: React.ReactNode;
}

export default function CardForCarousel(
  { title, image, children }: CardForCarouselProps
) {
  const [open, setOpen] = React.useState(false);
  const [isDragging, setIsDragging] = React.useState(false);
  const startPos = React.useRef<{ x: number; y: number } | null>(null);

  const handleMouseDown = (event: React.MouseEvent) => {
    startPos.current = { x: event.clientX, y: event.clientY };
    setIsDragging(false);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (startPos.current) {
      const dx = Math.abs(event.clientX - startPos.current.x);
      const dy = Math.abs(event.clientY - startPos.current.y);
      if (dx > 5 || dy > 5) {
        setIsDragging(true);
      }
    }
  };

  const handleMouseUp = () => {
    if (!isDragging) {
      setOpen(true);
    }
    startPos.current = null;
  };

  return (
    <>
      <Dialog
        fullScreen
        open={open}
        onClose={() => setOpen(false)}
        slots={{ transition: Transition }}
      >
        <AppBar sx={{ position: 'relative', background: "#000080"}}>
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
              {title}
            </Typography>
          </Toolbar>
         
        </AppBar>
        {children}
      </Dialog>

      <Card
        sx={{ minWidth: 275, m: 2, pb: 2, background: 'transparent' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
      <Box sx={{ userSelect: 'none', pointerEvents: 'none' }}>
          <CardContent>
            <Typography variant="h5"  align="center"  color="white">
              {title}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ height: 200, width: 'auto', maxWidth: '100%', mx: 'auto' }}
            image={image}
            title=""
          />
        </Box>
      </Card>
    </>
  );
}

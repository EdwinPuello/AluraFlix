import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onOpenNewVideo: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenNewVideo }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          AluraFlix
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" onClick={onOpenNewVideo}>
          Nuevo Video
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

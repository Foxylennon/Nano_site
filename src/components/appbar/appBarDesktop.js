import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

import ChromIcon from "../../assets/img/chrom.png";

import { AppbarHeader, NavBox } from '../../styles/appbar';

const pages = [
  { label: "Home", to: "/" },
  { label: "Download", to: "/download" },
  { label: "How to play", to: "/tutorials" },
  { label: "wiki", to: "/wiki" },
  { label: "About us", to: "/chromo_team" },
];

export default function AppbarDesktop({matches}){

  return (
    <AppBar id='my-appbar' position="sticky">
      <Container maxWidth="breakpoint">
        <Toolbar disableGutters>
          <a href="/" sx={{width: "10%"}}>
            <Button sx={{ my: 0 }}>
              <img src={ChromIcon} alt="Chromo Icon" style={{ 
                height: 'auto',
                width: '5%',
                marginRight: '10px'}}/>
                <AppbarHeader variant="h4" noWrap component="a">NANO</AppbarHeader>
            </Button>
          </a>
          <Box sx={{mr: 3}}> </Box>
          <NavBox>
            <NavList pages={pages}/>
          </NavBox>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

function NavList({ pages }) {
  return (
    <>
      {pages.map(({ label, to }) => (
        <Button
          key={label}
          component={Link}
          to={to}
          sx={{ my: 3, color: "white", display: "block", fontFamily: 'Pixelcraft' }}
        >
          {label}
        </Button>
      ))}
    </>
  );
}

'use client';

import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Box,
  Button,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navItems = ['Home', 'How it Works', 'Community Service', 'About'];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  
  // Fix hydration mismatch by using null initially, then setting after mount
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  
  // Move media query evaluation to useEffect to ensure it only runs on client
  useEffect(() => {
    setIsSmallScreen(window.innerWidth < theme.breakpoints.values.md);
    
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < theme.breakpoints.values.md);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [theme.breakpoints.values.md]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const gradientText = (text: string, colors: string[]) => (
    <Box
      component="span"
      sx={{
        background: `linear-gradient(to right, ${colors.join(', ')})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 'bold',
      }}
    >
      {text}
    </Box>
  );

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {gradientText('Skill', ['#3b82f6', '#60a5fa'])}{' '}
        {gradientText('Swap', ['#93c5fd', '#bfdbfe'])}
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItemButton key={item}>
            <ListItemText primary={item} sx={{ textAlign: 'center' }} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#1c1c25' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo */}
          <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
            {gradientText('Skill', ['#3b82f6', '#60a5fa'])}{' '}
            {gradientText('Swap', ['#93c5fd', '#bfdbfe'])}
          </Typography>

          {/* Navigation Items or Menu Icon */}
          {isSmallScreen ? (
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Stack direction="row" spacing={4} alignItems="center">
              {navItems.map((item, idx) => (
                <Typography
                  key={item}
                  sx={{
                    color: idx === 0 ? '#fff' : '#e5e7eb',
                    fontWeight: idx === 0 ? 'bold' : 'normal',
                    cursor: 'pointer',
                    '&:hover': { color: '#fff' },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Stack>
          )}

          {/* Login and Sign up Buttons */}
          <Stack direction="row" spacing={2} alignItems="center">
            <Button
              variant="outlined"
              sx={{
                color: '#e5e7eb',
                borderColor: '#4b5563',
                '&:hover': {
                  borderColor: '#6b7280',
                  backgroundColor: '#2d2d35',
                },
              }}
            >
              Login
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#3b82f6',
                '&:hover': {
                  backgroundColor: '#2563eb',
                },
              }}
            >
              Sign up
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Drawer for Small Screens */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

'use client';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const navItems = ['Home', 'How it Works', 'Community Service', 'About'];

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1c1c25', boxShadow: 'none' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo */}
        <Typography variant="h6" noWrap component="div">
          <Box component="span" sx={{ color: '#3b82f6', fontWeight: 'bold' }}>Skill </Box>
          <Box component="span" sx={{ color: '#e5e7eb' }}>Swap</Box>
        </Typography>

        {/* Center Nav Links */}
        <Stack direction="row" spacing={4}>
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

        {/* Right Buttons */}
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" sx={{
            color: '#e5e7eb',
            borderColor: '#4b5563',
            '&:hover': {
              borderColor: '#6b7280',
              backgroundColor: '#2d2d35',
            },
          }}>
            Login
          </Button>
          <Button variant="contained" sx={{
            backgroundColor: '#3b82f6',
            '&:hover': {
              backgroundColor: '#2563eb',
            },
          }}>
            Sign up
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

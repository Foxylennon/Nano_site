import { Box, Typography } from '@mui/material';
import { Colors } from '../../styles/theme';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box 
      sx={{
        width: '100%',
        bgcolor: Colors.dark,
        py: 2,
        px: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderTop: '3px solid rgba(255, 255, 255, 0.2)',
      }}
    >
      <Typography 
        sx={{
          color: Colors.secondary,
          textAlign: 'center',
          fontSize: '0.9rem',
          fontFamily: 'PixelOperator',
          fontWeight: 500,
        }}
      >
        © {currentYear} Chromo Team. All rights reserved.
      </Typography>
    </Box>
  );
}

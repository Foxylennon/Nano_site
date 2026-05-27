import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Colors } from '../../styles/theme';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  return (
    <Box 
      sx={{
        width: '100%',
        bgcolor: Colors.dark,
        py: 3,
        px: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        borderTop: '3px solid rgba(255, 255, 255, 0.2)',
      }}
    >
      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Button
          onClick={() => navigate('/chromo_team')}
          sx={{
            fontFamily: 'Pixelcraft',
            fontSize: '0.85rem',
            color: Colors.secondary,
            border: '2px solid rgba(255, 255, 255, 0.3)',
            padding: '6px 16px',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderColor: Colors.secondary,
            }
          }}
        >
          About Us
        </Button>
        <Button
          onClick={() => navigate('/contact')}
          sx={{
            fontFamily: 'Pixelcraft',
            fontSize: '0.85rem',
            color: Colors.secondary,
            border: '2px solid rgba(255, 255, 255, 0.3)',
            padding: '6px 16px',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderColor: Colors.secondary,
            }
          }}
        >
          Contact Us
        </Button>
      </Box>
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

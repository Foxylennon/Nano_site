import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Colors } from "../../styles/theme";
import { BannerContent, BannerText } from '../../styles/banner';
import { TitleStyles, BodyTextStyles } from '../../styles/contentBoxes';
import img2 from "../../assets/img/Nano.png"
import banner from "../../assets/img/banner.jpg"
import Footer from '../Footer';

export default function Download() {
  const navigate = useNavigate();

  const installationSteps = [
    { step: 1, title: 'Download', description: 'Click the "Download for Windows" button below to get the installer' },
    { step: 2, title: 'Run Installer', description: 'Execute the downloaded .exe file and follow the installation wizard' },
    { step: 3, title: 'Complete Setup', description: 'Choose your installation location and complete the setup process' },
    { step: 4, title: 'Launch Game', description: 'Start Nano from your Start Menu or Desktop shortcut' }
  ];

  return (
    <Container maxWidth="false" disableGutters sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      {/* Title Banner */}
      <Box display='flex' justifyContent='center' width='100%' height='40vh' bgcolor={Colors.primary}
        sx={{
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${banner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            filter: 'blur(10px)',
            zIndex: 0,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: Colors.primary,
            opacity: 0.8,
            zIndex: 1,
          }
        }}>
        <BannerContent sx={{ position: 'relative', zIndex: 2 }}>
          <BannerText>Download Nano</BannerText>
        </BannerContent>
      </Box>

      {/* Download Section */}
      <Box sx={{
        py: 4,
        px: { xs: 2, sm: 4, md: 6 },
        display: "flex",
        justifyContent: "flex-end",
        bgcolor: 'white',
        position: 'relative',
        zIndex: 1,
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255,255,255,0.95)',
          zIndex: 0,
        }
      }}>
        <Box sx={{ flex: 1 }}></Box>

        <Box sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          position: 'relative',
          zIndex: 1
        }}>
          <Button
            sx={{
              fontFamily: 'PixelGamer',
              fontSize: '1.2rem',
              padding: '15px 30px',
              border: '4px solid black',
              color: 'black',
              backgroundColor: 'white',
              marginBottom: 3,
              '&:hover': {
                backgroundColor: '#f0f0f0'
              }
            }}
          >
            Download for Windows
          </Button>

          <Typography sx={{ ...BodyTextStyles.descriptionText }}>
            Nano is exclusively available for Windows at this time. Make sure your system meets the minimum requirements before downloading.
          </Typography>

          <Typography sx={{ ...BodyTextStyles.descriptionText, mt: 2, fontSize: '0.85rem', color: '#666' }}>
            Minimum Requirements: Windows 10 or later, 4GB RAM, 1GB disk space, NVIDIA/AMD GPU
          </Typography>
        </Box>

        <Box sx={{ flex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={img2} style={{ 
            height: '80%',
            width: 'auto',
            maxHeight: '300px'
          }} alt="Nano Game Preview"/>
        </Box>
      </Box>

      {/* Installation Steps */}
      <Box sx={{
        py: 4,
        px: { xs: 2, sm: 4, md: 6 },
        bgcolor: '#f5f5f5',
        position: 'relative',
        zIndex: 1
      }}>
        <Typography sx={{ ...TitleStyles.sectionTitle, marginBottom: 3 }}>
          Installation Steps
        </Typography>

        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' },
          gap: 2
        }}>
          {installationSteps.map((item) => (
            <Box
              key={item.step}
              sx={{
                backgroundColor: 'white',
                border: '2px solid #ddd',
                borderRadius: '8px',
                padding: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: 1,
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: Colors.primary,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }
              }}
            >
              <Box
                sx={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: Colors.primary,
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  fontFamily: 'PixelGamer',
                  fontSize: '1.5rem',
                  fontWeight: 'bold'
                }}
              >
                {item.step}
              </Box>

              <Typography sx={{ ...TitleStyles.sectionTitle, fontSize: '1rem' }}>
                {item.title}
              </Typography>

              <Typography sx={{ ...BodyTextStyles.descriptionText, fontSize: '0.85rem' }}>
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Contact Box */}
      <Box sx={{
        py: 4,
        px: { xs: 2, sm: 4, md: 6 },
        bgcolor: 'white',
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        textAlign: 'center',
        borderTop: '2px solid #eee'
      }}>
        <Typography sx={{ ...TitleStyles.sectionTitle }}>
          Got any trouble?
        </Typography>

        <Typography sx={{ ...BodyTextStyles.descriptionText, maxWidth: '600px' }}>
          If you're experiencing issues with the installation or have any questions, don't hesitate to reach out to our support team.
        </Typography>

        <Button
          onClick={() => navigate('/contact')}
          sx={{
            fontFamily: 'PixelGamer',
            border: '3px solid black',
            color: 'black',
            padding: '10px 20px',
            '&:hover': {
              backgroundColor: '#f0f0f0'
            }
          }}
        >
          Contact us
        </Button>
      </Box>

      <Footer />
    </Container>
  );
}

import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Colors } from "../../styles/theme";
import { BannerContent, BannerText } from '../../styles/banner';
import { TitleStyles, BodyTextStyles } from '../../styles/contentBoxes';
import img2 from "../../assets/img/Nano.png"
import logo from "../../assets/img/logo.png"
import banner from "../../assets/img/banner.jpg"
import Footer from '../Footer';

export default function Content() {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Galerie d'images (placeholder - remplacer par images réelles du gameplay)
  const galleryImages = [img2, img2, img2];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <Container maxWidth="false" disableGutters sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      {/* Hero Banner with Logo */}
      <Box sx={{ 
        py: 4, 
        px: 20, 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "flex-end",
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
          zIndex: 0,
        }
      }}>
        <img src={logo} style={{ 
          height: 'auto',
          width: '50%',
          marginRight: '-40px',
          position: 'relative',
          zIndex: 1
        }} alt="Nano Logo"/>
        <Button
          onClick={() => navigate('/download')}
          sx={{
            fontSize: '30px',
            my: 3, 
            color: "white", 
            display: "block",
            fontFamily: 'Pixelcraft',
            border: '4px solid white',
            position: 'relative',
            zIndex: 1,
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.1)'
            }
          }}
        >
          Download Game
        </Button>
      </Box>

      {/* Tagline Banner */}
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
          <BannerText>Become the ultimate antibody. No more pills. The best cure... is you.</BannerText>
        </BannerContent> 
      </Box>

      {/* Main Content Section */}
      <Box sx={{ 
        py: 4, 
        px: { xs: 2, sm: 4, md: 6 },
        display: "flex", 
        justifyContent: "flex-end",
        bgcolor: 'white',
        position: 'relative',
        zIndex: 1,
        flex: 1
      }}>
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
          <Typography sx={TitleStyles.mainTitle}>
            A 2D ROGUE LIKE SET IN THE HUMAN BODY
          </Typography>

          <Typography sx={{ ...BodyTextStyles.defaultText, mt: 2, pl: 4 }}>
            Pharmacology is history. To save the patient, you must shrink down and strike the evil at its core. The body is your battlefield.
          </Typography>

          <Typography sx={{ ...BodyTextStyles.descriptionText, mt: 3 }}>
            Navigate through the intricate systems of the human body as a microscopic surgeon. Eliminate viruses, bacteria, and tumors using innovative technologies and strategic combat. Every cell is a challenge, every organ system a new battlefield. Work alone or cooperate with fellow surgeons to save lives and complete your medical missions.
          </Typography>

          <Button
            onClick={() => navigate('/download')}
            sx={{ 
              my: 3, 
              color: "black", 
              display: "block",
              fontFamily: 'Pixelcraft',
              border: '4px solid black',
              padding: '10px 20px',
              '&:hover': {
                backgroundColor: '#f0f0f0'
              }
            }}
          >
            Download
          </Button>
        </Box>

        <Box sx={{ flex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={img2} style={{ 
            height: '80%',
            width: 'auto',
            maxHeight: '300px'
          }} alt="Nano Game Preview"/>
        </Box>
      </Box>

      {/* Gallery Section */}
      <Box display='flex' alignItems='center' width='100%' minHeight='50vh' bgcolor={Colors.primary} sx={{
        position: 'relative',
        justifyContent: 'space-between',
        px: 4,
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
          opacity: 0.7,
          zIndex: 1,
        }
      }}>
        {/* Left Arrow */}
        <Button
          onClick={prevImage}
          sx={{
            color: 'white',
            fontSize: '3rem',
            fontFamily: 'Pixelcraft',
            position: 'relative',
            zIndex: 2,
            minWidth: 'auto',
            padding: '0 20px',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.2)'
            }
          }}
        >
          ◀
        </Button>

        {/* Gallery Content */}
        <Box sx={{
          flex: 1,
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2
        }}>
          <Box sx={{
            height: '300px',
            width: '100%',
            maxWidth: '500px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: '8px',
            border: '2px solid rgba(255,255,255,0.3)'
          }}>
            <img 
              src={galleryImages[currentImageIndex]} 
              style={{ 
                height: 'auto',
                width: '90%',
                maxHeight: '280px'
              }}
              alt={`Gameplay ${currentImageIndex + 1}`}
            />
          </Box>
          <Typography sx={{
            color: 'white',
            fontFamily: 'PixelOperator',
            fontSize: '0.9rem',
            textAlign: 'center'
          }}>
            Gameplay Gallery - {currentImageIndex + 1} / {galleryImages.length}
          </Typography>
        </Box>

        {/* Right Arrow */}
        <Button
          onClick={nextImage}
          sx={{
            color: 'white',
            fontSize: '3rem',
            fontFamily: 'Pixelcraft',
            position: 'relative',
            zIndex: 2,
            minWidth: 'auto',
            padding: '0 20px',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.2)'
            }
          }}
        >
          ▶
        </Button>
      </Box>

      {/* Discover More Section */}
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
        textAlign: 'center'
      }}>
        <Typography sx={TitleStyles.sectionTitle}>
          Discover more about Nano
        </Typography>
        <Typography sx={{ ...BodyTextStyles.descriptionText, maxWidth: '600px' }}>
          Explore the world of Nano, learn how to master the game, and discover the team behind this innovative medical action experience.
        </Typography>
        <Box sx={{
          display: 'flex',
          gap: 2,
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <Button
            onClick={() => navigate('/tutorials')}
            sx={{
              fontFamily: 'Pixelcraft',
              border: '3px solid black',
              color: 'black',
              padding: '10px 20px',
              '&:hover': {
                backgroundColor: '#f0f0f0'
              }
            }}
          >
            How to play
          </Button>
          <Button
            onClick={() => navigate('/wiki')}
            sx={{
              fontFamily: 'Pixelcraft',
              border: '3px solid black',
              color: 'black',
              padding: '10px 20px',
              '&:hover': {
                backgroundColor: '#f0f0f0'
              }
            }}
          >
            Wiki
          </Button>
          <Button
            onClick={() => navigate('/chromo_team')}
            sx={{
              fontFamily: 'Pixelcraft',
              border: '3px solid black',
              color: 'black',
              padding: '10px 20px',
              '&:hover': {
                backgroundColor: '#f0f0f0'
              }
            }}
          >
            About us
          </Button>
        </Box>
      </Box>

      <Footer />
    </Container>
  );
};
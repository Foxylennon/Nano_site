import { Box, Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Colors } from "../../styles/theme";
import { BannerContent, BannerText } from '../../styles/banner';
import { TitleStyles, BodyTextStyles } from '../../styles/contentBoxes';
import banner from "../../assets/img/banner.jpg"
import Footer from '../Footer';

// Import images from concept_travaux
import bannerBeta from '../../assets/img/concept_travaux/banner-beta.png';
import bannerGamma from '../../assets/img/concept_travaux/banner-gamma.png';
import conceptChrom from '../../assets/img/concept_travaux/concept_chrom.png';
import boss from '../../assets/img/concept_travaux/boss.png';
import carteMentale from '../../assets/img/concept_travaux/carte_mentale.png';
import chirurgienBg from '../../assets/img/concept_travaux/chirurgien_bg.png';
import mobsEtChirurgiens from '../../assets/img/concept_travaux/mobs_et_chirurgiens.png';
import playerAtk from '../../assets/img/concept_travaux/player-atk.png';
import playerDash from '../../assets/img/concept_travaux/player-dash.png';
import playerIdle from '../../assets/img/concept_travaux/player-idle.png';
import playerWalk from '../../assets/img/concept_travaux/player-walk.png';
import rapport from '../../assets/img/concept_travaux/rapport_mars.png';
import tumeur from '../../assets/img/concept_travaux/tumeur.png';

const resources = [
  { type: 'Hébergement site web', tools: 'GitHub Pages, Vercel' },
  { type: 'Environnement de développement', tools: 'React, Node.js, npm, VS Code' },
  { type: 'Illustrations', tools: 'Aseprite, Krita, Photoshop' },
  { type: 'Modélisations 3D', tools: 'Blender, Unity' },
  { type: 'Production audio', tools: 'Audacity, FL Studio' },
  { type: 'Documentation et rédaction', tools: 'Markdown, GitHub Wiki' },
  { type: 'Contrôle de version', tools: 'Git, GitHub' }
];

const galleryImages = [
  bannerBeta, bannerGamma, conceptChrom, boss,
  carteMentale, chirurgienBg, mobsEtChirurgiens, playerAtk,
  playerDash, playerIdle, playerWalk, rapport,
  tumeur
];

export default function Credits() {
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
          <BannerText>About Chromo Team</BannerText>
        </BannerContent>
        <Box
          component="svg"
          viewBox="0 0 1440 320"
          sx={{
            position: 'absolute',
            bottom: -4,
            left: 0,
            width: '100%',
            height: 'auto',
            display: 'block',
            zIndex: 0,
          }}>
          <path
            fill={Colors.primary}
            fillOpacity="1"
            d="M0,160L80,176C160,192,320,224,480,224C640,224,800,192,960,176C1120,160,1280,160,1360,160L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
          </path>
        </Box>  
      </Box>

      {/* Box 1: About Chromo Team */}
      <Box sx={{
        py: 4,
        px: { xs: 2, sm: 4, md: 6 },
        bgcolor: 'white',
        position: 'relative',
        zIndex: 1
      }}>
        <Typography sx={{ ...TitleStyles.sectionTitle, marginBottom: 2 }}>
          About Chromo Team
        </Typography>
        <Typography sx={{ ...BodyTextStyles.descriptionText }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </Typography>
      </Box>

      {/* Box 2: Game Idea */}
      <Box sx={{
        py: 4,
        px: { xs: 2, sm: 4, md: 6 },
        bgcolor: '#f0f0f0',
        position: 'relative',
        zIndex: 1
      }}>
        <Typography sx={{ ...TitleStyles.sectionTitle, marginBottom: 2 }}>
          The Original Idea
        </Typography>
        <Typography sx={{ ...BodyTextStyles.descriptionText }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </Typography>
      </Box>

      {/* Box 3: Resources Table */}
      <Box sx={{
        py: 4,
        px: { xs: 2, sm: 4, md: 6 },
        bgcolor: 'white',
        position: 'relative',
        zIndex: 1
      }}>
        <Typography sx={{ ...TitleStyles.sectionTitle, marginBottom: 3 }}>
          Resources & Tools
        </Typography>
        
        <TableContainer sx={{ border: '2px solid #ddd', borderRadius: '8px' }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: Colors.primary }}>
                <TableCell sx={{ ...TitleStyles.sectionTitle, color: 'white', fontSize: '1rem' }}>
                  Resource Type
                </TableCell>
                <TableCell sx={{ ...TitleStyles.sectionTitle, color: 'white', fontSize: '1rem' }}>
                  Tools & Software
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {resources.map((row, index) => (
                <TableRow key={index} sx={{ 
                  '&:nth-of-type(odd)': { backgroundColor: '#f9f9f9' },
                  '&:hover': { backgroundColor: '#f0f0f0' }
                }}>
                  <TableCell sx={{ ...BodyTextStyles.defaultText, fontWeight: 600 }}>
                    {row.type}
                  </TableCell>
                  <TableCell sx={BodyTextStyles.defaultText}>
                    {row.tools}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Box 4: Gallery Pinterest Style */}
      <Box sx={{
        py: 4,
        px: { xs: 2, sm: 4, md: 6 },
        bgcolor: '#f0f0f0',
        position: 'relative',
        zIndex: 1
      }}>
        <Typography sx={{ ...TitleStyles.sectionTitle, marginBottom: 3 }}>
          Development Artwork
        </Typography>
        
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' },
          gap: 2,
          autoRows: 'max-content'
        }}>
          {galleryImages.map((image, index) => (
            <Box
              key={index}
              sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
                }
              }}>
              <img
                src={image}
                alt={`Artwork ${index + 1}`}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      <Footer />
    </Container>
  );
}














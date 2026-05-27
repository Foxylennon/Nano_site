import { Box, Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Colors } from "../../styles/theme";
import { BannerContent, BannerText } from '../../styles/banner';
import { TitleStyles, BodyTextStyles } from '../../styles/contentBoxes';
import banner from "../../assets/img/banner.jpg"
import Footer from '../Footer';
import team from '../../assets/img/chromo_team/equipe-s2.png';

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
import travaux from '../../assets/img/concept_travaux/travaux.png';
import modeltumeur from '../../assets/img/concept_travaux/3d-tumeur.png';
import modelbacterie from '../../assets/img/concept_travaux/3d-bacterie.png';
import modelvirus from '../../assets/img/concept_travaux/3d-virus.png';
import modelcaillot from '../../assets/img/concept_travaux/3d-caillot.png';

const resources = [
  { type: 'Hébergement site web', tools: 'GitHub Pages' },
  { type: 'Environnement de développement', tools: 'React, Node.js, npm, VS Code, PyCharm' },
  { type: 'Illustrations', tools: 'Ibis Paint X' },
  { type: 'Modélisations et rendus 3D', tools: 'Blender, ezgif' },
  { type: 'Production audio', tools: 'FL Studio' },
  { type: 'Documentation et rédaction', tools: 'Markdown, Microsoft Word, LibreOffice Writer' },
];

const galleryImages = [
  bannerBeta, bannerGamma, conceptChrom, boss,
  carteMentale, chirurgienBg, mobsEtChirurgiens, playerAtk,
  playerDash, playerIdle, playerWalk, rapport,
  tumeur, travaux, modeltumeur, modelbacterie, modelvirus, modelcaillot
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
        display: "flex", 
        justifyContent: "flex-end",
        bgcolor: 'white',
        position: 'relative',
        zIndex: 1,
        flex: 1
      }}>
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
          <Typography sx={{ ...TitleStyles.sectionTitle, marginBottom: 2 }}>
            About Chromo Team
          </Typography>
          <Typography sx={{ ...BodyTextStyles.descriptionText }}>
            The Chromo team is a team of 4 students at the Paris-Villejuif EPITA campus. Its members are :<br />
            - Dante Zanon<br />
            - Diana Nguyen<br />
            - Lucas Isambert<br />
            - Saad Ichkarran<br />
            <br /><br />
          </Typography>
        </Box>
        <Box sx={{ flex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={team} style={{ 
            height: '100%',
            width: 'auto',
            maxHeight: '800px'
          }} alt="Team"/>
        </Box>
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
          
          We were looking for an original and easy-to-implement idea before the deadline. With that in mind, I came up with a chromosome survival game called "Chrom."<br />
          <br />
          In this concept, the game would be divided into two main modes:<br />
          <br />
          • Survival Mode<br />
          ◦ The chromosome(s) continuously run to the right of the screen to progress while being chased by tumors from the left. The goal is to run as long as possible while avoiding collisions or being caught by a tumor.<br />
          • Boss Battle<br />
          ◦ The chromosome(s) travel to different boss arenas (organs) via "genetic rails." Players must collect as many bonuses as possible along the way before facing a boss.<br />
          <br />
          The mechanics shared by both modes are:<br />
          <br />
          • Game over when the player dies<br />
          • The only attack from the chromosome, a kick<br />
          • The random appearance of tumors<br />
          • The appearance of genetic rails<br />
          <br />

          We did, however, incorporate some ideas from this concept into the current project:<br />
          <br />
          • the character Chrom, now a merchant in "Nano"<br />
          • the game's monsters<br />
          • the player's "bacteriophage" weapon<br />
          • the combat mode, where the playable characters are now surgeons<br />
          • the game's ending when the player dies<br />

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














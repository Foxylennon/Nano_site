import { Box, Container, Button } from '@mui/material';
import { useState } from 'react';
import { Colors } from "../../styles/theme";
import { BannerContent, BannerText } from '../../styles/banner';
import { TitleStyles } from '../../styles/contentBoxes';
import banner from "../../assets/img/banner.jpg"
import Footer from '../Footer';
import ReactMarkdown from 'react-markdown';
import { tutorialsData } from '../../tutos';

export default function Tutorials() {
  const [selectedTutorial, setSelectedTutorial] = useState(tutorialsData[0].items[0]);

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
          <BannerText>Become the ultimate antibody. No more pills. The best cure... is you.</BannerText>
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

      {/* Content with Sidebar */}
      <Box sx={{
        py: 4,
        px: { xs: 2, sm: 4, md: 6 },
        bgcolor: 'white',
        position: 'relative',
        zIndex: 1,
        flex: 1,
        display: 'flex',
        gap: 3
      }}>
        
        {/* Sidebar */}
        <Box sx={{
          width: { xs: '100%', md: '280px' },
          flexShrink: 0,
          maxHeight: 'calc(100vh - 400px)',
          overflowY: 'auto',
          borderRight: { xs: 'none', md: '2px solid #ddd' },
          paddingRight: { xs: 0, md: 2 }
        }}>
          {tutorialsData.map((category, catIndex) => (
            <Box key={catIndex} sx={{ marginBottom: 3 }}>
              <Box sx={{ ...TitleStyles.sectionTitle, fontSize: '0.95rem', marginBottom: 1.5 }}>
                {category.category}
              </Box>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {category.items.map((tutorial) => (
                  <Button
                    key={tutorial.id}
                    onClick={() => setSelectedTutorial(tutorial)}
                    sx={{
                      justifyContent: 'flex-start',
                      textAlign: 'left',
                      padding: '10px 12px',
                      borderRadius: '6px',
                      color: selectedTutorial.id === tutorial.id ? 'white' : 'black',
                      backgroundColor: selectedTutorial.id === tutorial.id ? Colors.primary : '#f0f0f0',
                      fontFamily: 'PixelOperator',
                      fontSize: '0.85rem',
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: selectedTutorial.id === tutorial.id ? Colors.primary : '#e0e0e0'
                      },
                      border: selectedTutorial.id === tutorial.id ? `2px solid ${Colors.primary}` : '2px solid transparent'
                    }}
                  >
                    {tutorial.title}
                  </Button>
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        {/* Content Area */}
        <Box sx={{
          flex: 1,
          minHeight: 'calc(100vh - 400px)',
          overflowY: 'auto',
          paddingLeft: { xs: 0, md: 2 }
        }}>
          {selectedTutorial && (
            <Box sx={{
              '& h1, & h2, & h3': {
                fontFamily: 'PixelGamer',
                marginTop: 2,
                marginBottom: 1,
                color: Colors.primary
              },
              '& h1': {
                fontSize: '2rem'
              },
              '& h2': {
                fontSize: '1.5rem'
              },
              '& h3': {
                fontSize: '1.2rem'
              },
              '& p': {
                fontFamily: 'PixelOperator',
                lineHeight: 1.8,
                marginBottom: 1
              },
              '& ul, & ol': {
                fontFamily: 'PixelOperator',
                marginLeft: 2,
                marginBottom: 1
              },
              '& li': {
                marginBottom: 0.5
              },
              '& code': {
                backgroundColor: '#f4f4f4',
                padding: '2px 6px',
                borderRadius: '4px',
                fontFamily: 'monospace',
                fontSize: '0.9em'
              },
              '& pre': {
                backgroundColor: '#2d2d2d',
                color: '#f8f8f2',
                padding: '15px',
                borderRadius: '8px',
                overflowX: 'auto',
                marginBottom: 2
              },
              '& blockquote': {
                borderLeft: `4px solid ${Colors.primary}`,
                paddingLeft: 2,
                marginLeft: 0,
                color: '#666'
              },
              '& table': {
                width: '100%',
                borderCollapse: 'collapse',
                marginBottom: 2
              },
              '& th, & td': {
                border: '1px solid #ddd',
                padding: '10px',
                textAlign: 'left',
                fontFamily: 'PixelOperator'
              },
              '& th': {
                backgroundColor: '#f4f4f4',
                fontWeight: 'bold'
              }
            }}>
              <ReactMarkdown>{selectedTutorial.content}</ReactMarkdown>
            </Box>
          )}
        </Box>
      </Box>

      <Footer />
    </Container>
  );
}


import { Box, Container, Typography, Button } from '@mui/material';
import { Colors } from "../../styles/theme";
import { BannerContent, BannerText } from '../../styles/banner';
import { TitleStyles, BodyTextStyles } from '../../styles/contentBoxes';
import img2 from "../../assets/img/Nano.png"
import banner from "../../assets/img/banner.jpg"
import Footer from '../Footer';

export default function Contact() {
  const contacts = [
    { name: 'Jean Dupont', email: 'jean.dupont@chromo-team.fr', role: 'Project Lead' },
    { name: 'Marie Martin', email: 'marie.martin@chromo-team.fr', role: 'Lead Developer' },
    { name: 'Pierre Moreau', email: 'pierre.moreau@chromo-team.fr', role: 'Game Designer' }
  ];

  const copyEmail = (email) => {
    navigator.clipboard.writeText(email).then(() => {
      alert(`Email copied: ${email}`);
    });
  };

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
          <BannerText>Contact Us</BannerText>
        </BannerContent>
      </Box>

      {/* Main Contact Box */}
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
        <Box sx={{ flex: 1 }}></Box>

        <Box sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}>
          <Typography sx={TitleStyles.mainTitle}>
            GET IN TOUCH
          </Typography>

          <Typography sx={{ ...BodyTextStyles.defaultText, mt: 2 }}>
            Have questions or suggestions? Reach out to the Chromo Team. We're here to help and would love to hear your feedback about Nano.
          </Typography>

          <Typography sx={{ ...BodyTextStyles.descriptionText, mt: 3 }}>
            Contact one of our team members directly. Click the buttons below to copy their email address and send us a message. Whether you're reporting a bug, suggesting a feature, or just want to say hello, we're always excited to hear from our community!
          </Typography>
        </Box>

        <Box sx={{ flex: 2 }}>
          <img src={img2} style={{
            height: '80%',
            width: 'auto',
            maxHeight: '300px'
          }} alt="Nano Game Preview"/>
        </Box>
      </Box>

      {/* Contact People Section */}
      <Box sx={{
        py: 4,
        px: { xs: 2, sm: 4, md: 6 },
        bgcolor: '#f5f5f5',
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 3
      }}>
        <Typography sx={TitleStyles.sectionTitle}>
          Meet the Team
        </Typography>

        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' },
          gap: 3
        }}>
          {contacts.map((contact, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: 'white',
                border: '2px solid #ddd',
                borderRadius: '8px',
                padding: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: Colors.primary,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }
              }}
            >
              <Typography sx={{ ...TitleStyles.sectionTitle, fontSize: '1.2rem' }}>
                {contact.name}
              </Typography>

              <Typography sx={{ ...BodyTextStyles.descriptionText, color: '#666' }}>
                {contact.role}
              </Typography>

              <Typography
                sx={{
                  ...BodyTextStyles.defaultText,
                  backgroundColor: '#f9f9f9',
                  padding: '8px 12px',
                  borderRadius: '4px',
                  wordBreak: 'break-all',
                  fontSize: '0.85rem'
                }}
              >
                {contact.email}
              </Typography>

              <Button
                onClick={() => copyEmail(contact.email)}
                sx={{
                  fontFamily: 'Pixelcraft',
                  border: '2px solid black',
                  color: 'black',
                  padding: '8px 16px',
                  width: '100%',
                  marginTop: 1,
                  '&:hover': {
                    backgroundColor: '#f0f0f0'
                  }
                }}
              >
                Copy Email
              </Button>
            </Box>
          ))}
        </Box>
      </Box>

      <Footer />
    </Container>
  );
}

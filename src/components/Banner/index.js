import { Box } from "@mui/material";
import { BannerContainer } from "../../styles/banner";
import travaux from '../../assets/img/banner.jpg';

export default function Banner(){
    return(
        <BannerContainer>
            <Box
                sx={{
                    backgroundImage: `url(${travaux})`,
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    minheight: '400px',
                    position: 'relative',
                    backgroundAttachment: 'fixed',
                }}
            >
            </Box>
        </BannerContainer>
    );
};
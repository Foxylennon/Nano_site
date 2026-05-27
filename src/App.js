import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container, ThemeProvider, } from '@mui/material';
import { useEffect } from 'react';
import theme from './styles/theme';
import Appbar from './components/appbar';
import Banner from './components/Banner';

/* Pages */
import Accueil from './components/Content';
import Download from "./components/Content/download"
import Contact from "./components/Content/contact"
import Tutos from "./components/Content/tutorials"
import Wiki from "./components/Content/wiki"
import Credits from "./components/Content/chromo_team"


function App() {

  useEffect(()=>{
    document.title = "Nano Project"
  },[]);


  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="false" disableGutters
      sx={{background: "#fff"}}>
        <BrowserRouter>

          {/*AppBar*/}
          <Appbar />
          {/*Banner - Fixed background*/}
          <Banner />

          <Container maxWidth="false" disableGutters
            sx={{
              position: 'relative',
              zIndex: 1,
              background: "#fff"
            }}>
            <Routes>
              <Route path='/' element={<Accueil />} />
              <Route path='/download' element={<Download />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/tutorials' element={<Tutos />} />
              <Route path='/wiki' element={<Wiki />} />
              <Route path='/chromo_team' element={<Credits />} />
            </Routes>
          </Container>
        </BrowserRouter>
          
      </Container>
    </ThemeProvider>

  );
}

export default App;

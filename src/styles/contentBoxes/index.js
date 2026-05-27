// Constantes d'espacement et de style réutilisables
export const ContentBoxStyles = {
  // Padding uniforme pour les content box
  contentPadding: {
    py: 4,
    px: { xs: 2, sm: 4, md: 6 }
  },

  // Box content standard avec flex layout
  contentBox: {
    display: 'flex',
    justifyContent: 'flex-end',
    bgcolor: 'white',
    position: 'relative',
    zIndex: 1,
    py: 4,
    px: { xs: 2, sm: 4, md: 6 }
  },

  // Colonne texte
  textColumn: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },

  // Colonne image
  imageColumn: {
    flex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

// Styles pour les titres
export const TitleStyles = {
  mainTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    fontFamily: 'PixelGamer',
    color: 'black'
  },

  sectionTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    fontFamily: 'PixelGamer',
    color: 'black'
  }
};

// Styles pour le texte corps
export const BodyTextStyles = {
  defaultText: {
    fontFamily: 'PixelOperator',
    fontSize: '1rem',
    color: 'black',
    lineHeight: 1.6
  },

  descriptionText: {
    fontFamily: 'PixelOperator',
    fontSize: '0.95rem',
    color: '#333',
    lineHeight: 1.8
  }
};
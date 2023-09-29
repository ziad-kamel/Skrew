import { createTheme } from "@mui/material/styles";

const themeCreator = (theme) => {
  
  const customTheme = createTheme({
    palette: {
      purple: {
        main: "#401761",
      },
      darkGold:{
        main: "#dca110"
      }
    },
  });
  return customTheme;
};

export default themeCreator;

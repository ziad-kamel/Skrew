import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const HomeStyle = styled(Box)(({ theme }) => ({
    "& .card":{
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        backgroundImage: "linear-gradient(90deg, #e924c4, #ffd300)"
    },
    "& .card p":{
        fontFamily: "monospace",
        fontWeight: "bold",
        fontSize: "1.36rem"
    }
    
  }
  ));
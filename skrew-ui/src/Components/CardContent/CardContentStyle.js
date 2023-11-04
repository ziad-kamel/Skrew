import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const CardContentStyle = styled(Box)(({ theme, cardBackgroundColor, borderColor}) => ({

    // height: '29rem',
    width: 'fit-content',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'solid',
    borderWidth: '20px',
    borderColor: borderColor,
    borderRadius: '25px',
    position: "relative",
    backgroundColor: cardBackgroundColor || "white",
    
    "& .TRball":{
        width: '2rem',
        height: '2rem',
        backgroundColor: borderColor,
        position: 'absolute',
        top: '-14px',
        right: '-14px',
        borderRadius: '2rem'
    },
    "& .BLball":{
        width: '2rem',
        height: '2rem',
        backgroundColor: borderColor,
        position: 'absolute',
        bottom: '-14px',
        left: '-14px',
        borderRadius: '2rem'
    },
    "& .contentFrame":{
        // height: '29rem',
        border: 'solid',
        borderWidth: '7px',
        borderColor: 'white'
    }
  }
  ));

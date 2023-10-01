import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const CardContentStyle = styled(Box)(({ theme, cardBackgroundColor, borderColor}) => ({

    height: '29rem',
    width: '21rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'solid',
    borderWidth: '26px',
    borderColor: borderColor,
    borderRadius: '32px',
    position: "relative",
    backgroundColor: cardBackgroundColor || "white",
    
    "& .TRball":{
        width: '3rem',
        height: '3rem',
        backgroundColor: borderColor,
        position: 'absolute',
        top: '-14px',
        right: '-14px',
        borderRadius: '2rem'
    },
    "& .BLball":{
        width: '3rem',
        height: '3rem',
        backgroundColor: borderColor,
        position: 'absolute',
        bottom: '-14px',
        left: '-14px',
        borderRadius: '2rem'
    },
    "& .TLCardScore":{
        backgroundColor: borderColor,
        width: '3.2rem',
        height: '4.5rem',
        position: 'absolute',
        top: '0',
        left: '0',
        borderRadius: '0px 25px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    "& .BRCardScore":{
        backgroundColor: borderColor,
        width: '3.2rem',
        height: '4.5rem',
        position: 'absolute',
        bottom: '0',
        right: '0',
        borderRadius: '0px 25px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transform: 'rotate(180deg)',
    },
    "& .iconNumber":{
        width: '14rem',
        height: '14rem',
        margin: "22px",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10rem',
        border: 'solid',
        borderWidth: '7px',
        borderColor: borderColor
    }
  }
  ));

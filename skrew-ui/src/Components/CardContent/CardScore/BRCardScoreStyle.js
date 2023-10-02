
import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const BRCardScoreStyle = styled(Box)(({ theme, borderColor}) => ({
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
        
    "& .underLine":{
        top: '73%',
        width: '2rem',
        height: '5px',
        background: 'white',
        position: 'absolute'
    }
  }
  ));

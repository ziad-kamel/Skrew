
import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const BRCardScoreStyle = styled(Box)(({ theme, borderColor}) => ({
        backgroundColor: borderColor,
        width: '1.6rem',
        height: '2.4rem',
        position: 'absolute',
        bottom: '0',
        right: '0',
        borderRadius: '0px 15px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transform: 'rotate(180deg)',
        
    "& .underLine":{
        top: '73%',
        width: '1rem',
        height: '2px',
        background: 'white',
        position: 'absolute'
    }
  }
  ));

import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const SpecialContentStyle = styled(Box)(({ theme}) => ({
    "& .TLicons":{
        width: '9rem',
        display: 'flex',
        alignItems: 'center',
        transform: 'rotate(-45deg)',
        position: 'absolute',
        top: '57px',
        left: '-6px'
    },
    "& .BRicons":{
        display: 'flex',
        alignItems: 'center',
        width: '9rem',
        transform: 'rotate(-45deg)',
        position: 'absolute',
        bottom: '64px',
        right: '-10px'
    }
    
  }
  ));

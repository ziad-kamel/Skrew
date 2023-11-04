import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const SpecialContentStyle = styled(Box)(({ theme}) => ({
    "& .TLicons":{
        width: '5rem',
        display: 'flex',
        alignItems: 'center',
        transform: 'rotate(-45deg)',
        position: 'absolute',
        top: '37px',
        left: '5px'
    },
    "& .BRicons":{
        display: 'flex',
        alignItems: 'center',
        width: '5rem',
        transform: 'rotate(-45deg)',
        position: 'absolute',
        bottom: '32px',
        right: '12px'
    }
    
  }
  ));

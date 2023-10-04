import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const Plus20SpecialContentStyle = styled(Box)(({ theme, borderColor}) => ({
    "& .TLvirus":{
        width: '9rem',
        display: 'flex',
        alignItems: 'center',
        transform: 'rotate(-45deg)',
        position: 'absolute',
        top: '60px',
        left: '-6px'
    },
    "& .BRvirus":{
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

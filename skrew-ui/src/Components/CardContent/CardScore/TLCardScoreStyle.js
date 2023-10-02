
import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const TLCardScoreStyle = styled(Box)(({ theme, borderColor}) => ({
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

    "& .underLine":{
        top: '73%',
        width: '2rem',
        height: '5px',
        background: 'white',
        position: 'absolute'
    }
  }
  ));

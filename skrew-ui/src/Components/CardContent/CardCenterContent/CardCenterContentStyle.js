import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const CardCenterContentStyle = styled(Box)(({ theme, borderColor}) => ({

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
    },
    "& .numberUnderLine":{
        top: '65%',
        width: '8rem',
        height: '8px',
        background: borderColor,
        position: 'absolute'
    }
  }
  ));

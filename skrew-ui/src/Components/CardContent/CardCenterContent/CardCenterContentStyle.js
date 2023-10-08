import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const CardCenterContentStyle = styled(Box)(({ theme, borderColor}) => ({

    "& .iconNumber":{
        width: '9rem',
        height: '9rem',
        // margin: "22px",
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
        width: '5rem',
        height: '6px',
        background: borderColor,
        position: 'absolute'
    }
  }
  ));

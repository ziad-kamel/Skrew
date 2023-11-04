import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const OtherExtraElementStyle = styled(Box)(({ theme,
    cardsColor }) => ({
        position: 'absolute',
        width: '85px',
        top: '20px',
        left:"35px",


        "& .mockCard":{
            backgroundColor: cardsColor,
            width:'18px',
            height:'26px',
            borderRadius:'4px'
        },

        "& .eyeIcon":{
            color: 'white',
            fontSize: '1.1rem'
        }
  }
  ));

import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const OtherExtraElementStyle = styled(Box)(({ theme,
    cardsColor }) => ({
        position: 'absolute',
        width: '130px',
        top: '20px',
        left:"75px",


        "& .mockCard":{
            backgroundColor: cardsColor,
            width:'25px',
            height:'35px',
            borderRadius:'4px'
        },

        "& .eyeIcon":{
            color: 'white',
            fontSize: '1.5rem'
        }
  }
  ));

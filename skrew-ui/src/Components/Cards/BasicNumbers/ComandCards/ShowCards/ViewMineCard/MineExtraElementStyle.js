import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const MineExtraElementStyle = styled(Box)(({ theme,
    cardsColor }) => ({
        position: 'absolute',
        width: '130px',
        bottom: '40px',
        right:"75px",

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

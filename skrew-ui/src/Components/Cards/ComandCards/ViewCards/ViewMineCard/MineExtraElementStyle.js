import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const MineExtraElementStyle = styled(Box)(({ theme,
    cardsColor }) => ({
        position: 'absolute',
        width: '85px',
        bottom: '15px',
        right:"35px",

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

import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const GenericCardStyle = styled(Box)(({ theme }) => ({

    "& .CardFrame":{
        // backgroundColor: 'white',
        padding: "1.3rem 11rem",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
  }
  ));

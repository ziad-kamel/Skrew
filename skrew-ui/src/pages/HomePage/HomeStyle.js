import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const HomeStyle = styled(Box)(({ theme }) => ({
    paddingBottom:theme.spacing(7),

    
    "& .headerBox":{
        display:"flex",
        alignItems:'center',
        justifyContent: 'space-between',
        backgroundColor: "#401761",
    },
    "& .iconTxtBox":{
        display:"flex",
        alignItems: 'center'
    },
    "& .iconBox": {
        width: theme.spacing(6),
        height: theme.spacing(6),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '15px'
    },
    "& .icon": {
        color: "white",
        fontSize: theme.spacing(5)
    }
    
  }
  ));
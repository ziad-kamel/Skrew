import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const NavBarStyle = styled(Box)(({ theme }) => ({
    paddingBottom:theme.spacing(2),

    "& .iconBox": {
        width: theme.spacing(6),
        height: theme.spacing(6),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '15px'
    },
    "& .icon": {
        color:"white",
        backgroundColor: "#592186",
        fontSize: theme.spacing(6),
        height: "4rem",
        border:"white",
        borderStyle: "outset",
        borderRadius: "5px",
        borderWidth: "thin",
    }
    
  }
  ));
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  styled,
  IconButton,
  Drawer,
  List,
} from "@mui/material";
import CustomButtons from "./CustomButtons";
import Search from "./Search";
import { Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;

const Component = styled(Link)(({ theme }) => ({
  marginLeft: "12%",
  lineHeight: "0",
  color: "#ffffff",
  textDecoration: "none",
  [theme.breakpoints.down("sm")]: {
    marginLeft: "3%",
  },
}));

const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;

const PlusImage = styled("img")({
  width: 8,
  height: 8,
  marginLeft: 3,
});

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("sm")]: {
    display: "block",
    marginLeft: "0px",
  },
}));

const CustomButtonsWrapper = styled(Box)(({ theme }) => ({
  margin: " 0 5% 0 auto",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const Header = () => {
  const [open, setOpen] = useState(false);
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const list = () => (
    <Box style={{ width: 250 }} onClick={handleClose}>
      <List>
        <listItem button>
          <CustomButtons />
        </listItem>
      </List>
    </Box>
  );

  return (
    <StyledHeader position="fixed">
      <Toolbar style={{ minHeight: 55 }}>
        <MenuButton color="inherit" onClick={handleOpen}>
          <Menu />
        </MenuButton>
        <Drawer open={open} onClose={handleClose}>
          {list()}
        </Drawer>
        <Component to="/">
          <img src={logoURL} alt="logo" style={{ width: 75 }} />
          <Box component="span" style={{ display: "flex" }}>
            <SubHeading>
              Explore&nbsp;
              <Box component="span" style={{ color: "#FFE500" }}>
                Plus
              </Box>
            </SubHeading>
            <PlusImage src={subURL} />
          </Box>
        </Component>
        <Search />
        <CustomButtonsWrapper>
          <CustomButtons />
        </CustomButtonsWrapper>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;

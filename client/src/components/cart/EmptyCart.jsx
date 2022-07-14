import { Typography, Box, styled } from "@mui/material";

const Component = styled(Box)(({ theme }) => ({
  width: "80%",
  height: "50vh",
  background: "#fff",
  margin: "80px 140px",
  [theme.breakpoints.down("sm")]: {
    margin: "80px 30px",
  },
}));

const Container = styled(Box)`
  text-align: center;
  padding-top: 70px;
`;

const Image = styled("img")(({ theme }) => ({
  width: "15%",
  [theme.breakpoints.down("sm")]: {
    width: "50%",
  },
}));

const EmptyCart = () => {
  const imgurl =
    "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";

  return (
    <Component>
      <Container>
        <Image src={imgurl} />
        <Typography>Your cart is empty!</Typography>
        <Typography component="span">Add items to it now.</Typography>
      </Container>
    </Component>
  );
};

export default EmptyCart;

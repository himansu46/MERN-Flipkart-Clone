import { Box, Button, Grid, styled, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";
const Component = styled(Grid)(({ theme }) => ({
  padding: "30px 135px",
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    padding: "15px 0",
  },
}));

const LeftComponent = styled(Grid)(({ theme }) => ({
  paddingRight: 15,
  [theme.breakpoints.down("sm")]: {
    marginBottom: 15,
  },
}));

const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
`;

const BottomWrapper = styled(Box)(({ theme }) => ({
  padding: "16px 22px",
  background: "#fff",
  boxShadow: "0 -2px 10px 0 rgb(0 0 0 / 10%)",
  borderTop: " 1px solid #f0f0f0",
  [theme.breakpoints.down("sm")]: {
    innerHeight: "1px",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  display: "flex",
  marginLeft: "auto",
  background: "#fb641b",
  color: "#fff",
  borderRadius: "2px",
  width: "250px",
  height: "51px",
  [theme.breakpoints.down("sm")]: {
    width: "150px",
    height: "31px",
    marginRight: "auto",
  },
}));

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <>
      {cartItems.length ? (
        <Component container>
          <LeftComponent item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography style={{ fontWeight: 600, fontSize: 18 }}>
                My Cart ({cartItems?.length})
              </Typography>
            </Header>
            {cartItems.map((item) => (
              <CartItem item={item} />
            ))}
            <BottomWrapper>
              <StyledButton variant="contained">Place Order</StyledButton>
            </BottomWrapper>
          </LeftComponent>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView cartItems={cartItems} />
          </Grid>
        </Component>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;

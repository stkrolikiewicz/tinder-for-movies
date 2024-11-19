import { NavLink, Outlet } from "react-router-dom";
import { styled, AppBar, Toolbar, List, ListItem } from "@mui/material";
import theme from "@/theme";
import { FC } from "react";

const RootContainer = styled("div")({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
});

const StyledAppBar = styled(AppBar)({
  boxShadow: "none",
});

const MainWrapper = styled("main")({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(2),
  gap: theme.spacing(2),
});

const NavigationList = styled(List)({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(1),
});

const NavigationLink = styled(NavLink)({
  color: theme.palette.text.primary,
  padding: theme.spacing(1),
  textDecoration: "none",
  "&:hover": {
    color: theme.palette.text.secondary,
    outline: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
  },
});

const navigationLinks = [
  { to: "/", text: "Home" },
  { to: "recommendations", text: "Recommendations" },
];

const AppNavigation: FC = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <nav>
          <NavigationList>
            {navigationLinks.map((link) => (
              <ListItem key={link.to}>
                <NavigationLink
                  to={link.to}
                  viewTransition
                  style={({ isActive }) => ({
                    backgroundColor: isActive
                      ? theme.palette.primary.light
                      : "transparent",
                    borderRadius: theme.shape.borderRadius,
                  })}
                >
                  {link.text}
                </NavigationLink>
              </ListItem>
            ))}
          </NavigationList>
        </nav>
      </Toolbar>
    </StyledAppBar>
  );
};

const RootLayout: FC = () => {
  return (
    <RootContainer>
      <AppNavigation />
      <MainWrapper>
        <Outlet />
      </MainWrapper>
    </RootContainer>
  );
};

export default RootLayout;

import { NavLink, Outlet, useLocation } from "react-router-dom";
import {
  styled,
  AppBar,
  Toolbar,
  List,
  ListItem,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from "@mui/material";
import { Swipe, Home } from "@mui/icons-material";
import theme from "@/theme";
import { FC, useEffect, useState } from "react";
import { RecommendationsProvider } from "@/context/RecommendationsContext";

const RootContainer = styled("div")({
  height: "100vh",
  maxHeight: "100vh",
  display: "flex",
  flexDirection: "column",
});

const StyledAppBar = styled(AppBar)({
  boxShadow: "none",
  backgroundColor: theme.palette.background.paper,
  borderBottom: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
});

const StyledPaper = styled(Paper)({
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
});

const MainWrapper = styled("main")({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(2),
  gap: theme.spacing(2),
  flexGrow: 1,
  overflowY: "auto",
  overflowX: "hidden",
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(11),
    maxHeight: "100vh",
  },
  [theme.breakpoints.down("md")]: {
    maxHeight: "calc(100vh - 56px)",
  },
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
  { to: "/", text: "Home", icon: <Home /> },
  { to: "/recommendations", text: "Recommendations", icon: <Swipe /> },
];

const AppNavigation: FC = () => {
  return (
    <StyledAppBar position="fixed">
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

const MobileAppNavigation: FC = () => {
  const [activeLink, setActiveLink] = useState<string>("/");
  const handleChange = (_event: unknown, newValue: string) => {
    setActiveLink(newValue);
  };
  const { pathname } = useLocation();
  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  return (
    <StyledPaper elevation={3}>
      <BottomNavigation value={activeLink} onChange={handleChange}>
        {navigationLinks.map((link) => (
          <BottomNavigationAction
            key={link.to}
            label={link.text}
            icon={link.icon}
            value={link.to}
            component={NavigationLink}
            to={link.to}
            viewTransition
          />
        ))}
      </BottomNavigation>
    </StyledPaper>
  );
};

const RootLayout: FC = () => {
  return (
    <RecommendationsProvider>
      <RootContainer>
        <AppNavigation />
        <MainWrapper>
          <Outlet />
        </MainWrapper>
        <MobileAppNavigation />
      </RootContainer>
    </RecommendationsProvider>
  );
};

export default RootLayout;

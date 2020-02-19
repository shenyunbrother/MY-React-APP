import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import jwt_decode from "jwt-decode";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Main from "./Main";
import AppRoutes from "../layout/routes";
import bgImage from "../../images/cc.jpg";
import logo from "../../images/CL/CL1.jpg";
import Routers from "./routes";
import changeTheme from "../../actions/theme-actions"
function App(props) {
  const { theme,changeTheme } = props;
  const [open, setOpen] = useState(true);
  // eslint-disable-next-line
  const [image, setImage] = useState(bgImage);
  // eslint-disable-next-line
  // const [color, setColor] = useState(theme);
  // eslint-disable-next-line
  const handleDrawerToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  // useEffect(() => {
  //   try {
  //     const decoded = jwt_decode(localStorage.jwToken);
  //     const currentTime = Date.now() / 1000; //由毫秒转成秒
  //     console.log(decoded.exp - currentTime);
  //     // 判断当前时间是否大于token中的exp时间;如果大于是为过期
  //     if (decoded.exp < currentTime) {
  //       localStorage.clear();
  //     }
  //   } catch (e) {
  //     return function clearUp() {
  //       return false;
  //     };
  //   }
  // });

  return (
    <div id="div">
      <CssBaseline />
      <Sidebar
        open={open}
        handleDrawerToggle={handleDrawerToggle}
        AppRoutes={AppRoutes}
        logoText={"HUANG"}
        logo={logo}
        image={image}
        color={theme}
        {...props}
      />
      <Navbar
        open={open}
        handleDrawerToggle={handleDrawerToggle}
        Routers={Routers}
        {...props}
      />

      <Main open={open} {...props} />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  isAuthenticated: state.loginReducer.isAuthenticated,
  data: state.reduxReducer.data,
  theme: state.themeReducer.color
});
const mapDispatchToProps = dispatch => ({
  changeTheme: theme => dispatch(changeTheme(theme))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

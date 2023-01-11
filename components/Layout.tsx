import { NextPage } from "next";
import NavBar from "./NavBar";

interface PagesType {
  children: any;
}

const Layout = ({ children }: PagesType) => {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
};

export default Layout;

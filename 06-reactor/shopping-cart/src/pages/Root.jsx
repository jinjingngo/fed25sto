import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Root = ({ cart }) => {
  return (
    <>
      <Header cart={cart} />
      <Outlet />
    </>
  );
};

export default Root;

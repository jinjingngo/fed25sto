import "./App.css";

import PlusIcon from "./assets/plus.svg?react";
import BellIcon from "./assets/bell.svg?react";
import MessengerIcon from "./assets/messenger.svg?react";
import CaretIcon from "./assets/caret.svg?react";
import CogIcon from "./assets/cog.svg?react";
import ChevronIcon from "./assets/chevron.svg?react";
import ArrowIcon from "./assets/arrow.svg?react";
import BoltIcon from "./assets/bolt.svg?react";
import { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";

const App = () => {
  return (
    <NavBar>
      <>
        <NavItem icon={<PlusIcon />}></NavItem>
        <NavItem icon={<BellIcon />}></NavItem>
        <NavItem icon={<MessengerIcon />}></NavItem>
        <NavItem icon={<CaretIcon />}>{<DropdownMenu />}</NavItem>
      </>
    </NavBar>
  );
};

type NavBarProps = { children: JSX.Element };

const NavBar = ({ children }: NavBarProps) => {
  return (
    <nav className="navbar">
      <ul className="navbar__nav">{children}</ul>
    </nav>
  );
};

type NavItemProps = {
  icon: JSX.Element;
  children?: JSX.Element;
};

const NavItem = ({ icon, children }: NavItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="navbar__item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {icon}
      </a>
      {open && children}
    </li>
  );
};

type DropdownItemProps = {
  children?: JSX.Element | string;
  leftIcon?: JSX.Element | string;
  rightIcon?: JSX.Element;
  goToMenu?: string;
};

const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState<number>(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const calcHeight = () => {
    const height = dropdownRef.current?.offsetHeight;
    setMenuHeight(height ?? 0);
  };

  const DropdownItem = ({
    children,
    leftIcon,
    rightIcon,
    goToMenu,
  }: DropdownItemProps) => {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => goToMenu && setActiveMenu(goToMenu)}
      >
        <span className="icon-button">{leftIcon}</span>
        {children}
        <span className="icon-right">{rightIcon}</span>
      </a>
    );
  };

  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition
        appear={true}
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
        nodeRef={dropdownRef}
      >
        <div className="menu" ref={dropdownRef}>
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings"
          >
            Settings
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}
            goToMenu="animals"
          >
            Animals
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
        nodeRef={dropdownRef}
      >
        <div className="menu" ref={dropdownRef}>
          <DropdownItem leftIcon={<ArrowIcon />} goToMenu="main"></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "animals"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
        nodeRef={dropdownRef}
      >
        <div className="menu" ref={dropdownRef}>
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export default App;

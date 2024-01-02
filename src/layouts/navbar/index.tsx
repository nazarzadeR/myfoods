import NavbarMobile from "./mobile";
import NavbarDesktop from "./desktop";

type TNavbar = {
    Mobile: typeof NavbarMobile;
    Desktop: typeof NavbarDesktop;
};

const Navbar: TNavbar = {
    Mobile: NavbarMobile,
    Desktop: NavbarDesktop,
};

export default Navbar;

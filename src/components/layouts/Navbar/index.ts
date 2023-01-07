import Desktop from "./Desktop";
import Mobile from "./Mobile";

interface INavbar {
    Main: React.FC;
    Bar: React.FC;
}

const Navbar: INavbar = {
    Main: Mobile,
    Bar: Desktop
}

export default Navbar
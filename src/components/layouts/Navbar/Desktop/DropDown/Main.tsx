import React from "react";

import DropDownItem from "./DropDownItem";
import DropDownMenu from "./DropdownMenu";
import { Forward, Settings } from "components/svgs";
import { MenuType } from "interface";

interface Props {
    setMenu: any;
}

const Main: React.FC<Props> = ({ setMenu }) => {
    return (
        <DropDownMenu initial="fromLeft" exit="toLeft">
            <DropDownItem
                LeftIcon={Settings}
                RightIcon={Forward}
                onClick={() => setMenu(() => MenuType.SETTING)}
            >
                Settings
            </DropDownItem>
        </DropDownMenu>
    );
};

export default Main;

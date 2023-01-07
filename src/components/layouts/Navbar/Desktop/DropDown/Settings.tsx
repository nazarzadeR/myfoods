import React from "react";

import DropDownItem from "./DropDownItem";
import DropDownMenu from "./DropdownMenu";
import { Forward, Backward, Dots } from "components/svgs";
import { MenuType } from "interface";

interface Props {
    setMenu: any;
}

const Settings: React.FC<Props> = ({ setMenu }) => {
    return (
        <DropDownMenu initial="fromRight" exit="toLeft">
            <DropDownItem
                LeftIcon={Backward}
                onClick={() => setMenu(() => MenuType.MAIN)}
            >
                Back
            </DropDownItem>
            <DropDownItem
                LeftIcon={Dots}
                RightIcon={Forward}
                onClick={() => setMenu(() => MenuType.PAG)}
            >
                Pag Mode
            </DropDownItem>
        </DropDownMenu>
    );
};

export default Settings;

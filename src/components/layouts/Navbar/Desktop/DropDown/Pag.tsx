import React from "react";

import DropDownItem from "./DropDownItem";
import DropDownMenu from "./DropdownMenu";
import useSetting from "stores/settings";
import {
    Backward,
    CheckedRadio,
    UnCheckedRadio,
    PagMode,
} from "components/svgs";
import { MenuType } from "interface";

interface Props {
    setMenu: any;
}

const Main: React.FC<Props> = ({ setMenu }) => {
    const { setPagMode, pagMode } = useSetting();
    const isInfinity = pagMode === "INFINITY";

    return (
        <DropDownMenu initial="fromRight" exit="toLeft">
            <DropDownItem
                LeftIcon={Backward}
                onClick={() => setMenu(() => MenuType.SETTING)}
            >
                Back
            </DropDownItem>
            <DropDownItem
                LeftIcon={PagMode}
                RightIcon={isInfinity ? CheckedRadio : UnCheckedRadio}
                onClick={() => setPagMode("INFINITY")}
            >
                Infinite
            </DropDownItem>
            <DropDownItem
                LeftIcon={PagMode}
                RightIcon={!isInfinity ? CheckedRadio : UnCheckedRadio}
                onClick={() => setPagMode("PAG")}
            >
                Pagination
            </DropDownItem>
        </DropDownMenu>
    );
};

export default Main;

import * as yup from "yup";
import { TFunction } from "i18next";

import { SUPPORTED_FILE_TYPES } from "@/data/constants";

const MAX_FILE_SIZE = 1024 * 1024;

export const UserProfilePicSchema = (t: TFunction) =>
    yup.object().shape({
        userPicture: yup
            .mixed()
            .required(t("expressions.userPicNeeded"))
            .test(
                "fileSize",
                t("expressions.userFileSizeOverload"),
                (file: any) => {
                    console.log(file.size, MAX_FILE_SIZE)
                    return file && file?.size <= MAX_FILE_SIZE
                },
            )
            .test(
                "fileType",
                t("expressions.userPicTypeNotSupported"),
                (val: any) => val && SUPPORTED_FILE_TYPES.includes(val.type),
            ),
    });

import * as yup from "yup";
import { TFunction } from "i18next";

import { SUPPORTED_FILE_TYPES } from "@/data/constants";

const MAX_FILE_SIZE = 4 * 1024 * 1024;

export const UserProfilePicSchema = (t: TFunction) =>
    yup.object().shape({
        userPicture: yup
            .mixed()
            .required(t("expressions.userPicNeeded"))
            .test(
                "fileSize",
                t("expressions.userFileSizeOverload"),
                (file: any) => file && file?.size <= MAX_FILE_SIZE,
            )
            .test(
                "fileType",
                t("expressions.userPicTypeNotSupported"),
                (val: any) => val && SUPPORTED_FILE_TYPES.includes(val.type),
            ),
    });

export const RecipeSearchSchema = (t: TFunction) =>
    yup.object().shape({
        query: yup
            .string()
            .matches(/^[A-Za-z]*$/, t("expressions.searchStringNotSafe"))
            .required(t("expressions.searchStringRequired")),
    });

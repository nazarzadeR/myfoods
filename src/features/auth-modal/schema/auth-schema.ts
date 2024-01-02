import * as yup from "yup";
import { TFunction } from "i18next";

import { mergeSchema } from "@/util";

// * minimum one uppercase, one lowercase, one special
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/;
// * email regex
const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

// const UsernameSchema = (t: TFunction) =>
//     yup.object().shape({
//         username: yup.string().required(t("auth.username.error.required")),
//     });

const UserEmailSchema = (t: TFunction) =>
    yup.object().shape({
        email: yup
            .string()
            .required(t("auth.email.error.required"))
            .matches(emailRegex, t("auth.email.error.notMatches")),
    });

const PasswordSchema = (t: TFunction) =>
    yup.object().shape({
        password: yup
            .string()
            .min(8, ({ min }) =>
                t("auth.password.error.min").replace("$", `${min}`),
            )
            .required(t("auth.password.error.required"))
            .matches(passwordRegex, t("auth.password.error.match")),
    });

const ConfirmSchema = (t: TFunction) =>
    yup.object().shape({
        confirm: yup
            .string()
            .required(t("auth.confirm.error.required"))
            .oneOf([yup.ref("password")], t("auth.confirm.error.same")),
    });

export const LoginSchema = (t: TFunction) =>
    mergeSchema(UserEmailSchema(t), PasswordSchema(t));

export const RegisterSchema = (t: TFunction) =>
    mergeSchema(UserEmailSchema(t), PasswordSchema(t), ConfirmSchema(t));

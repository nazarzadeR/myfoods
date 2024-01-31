import * as yup from "yup";
import { TFunction } from "i18next";

import { mergeSchema } from "@/util";

export const messageSchema = (t: TFunction) =>
    yup.object().shape({
        message: yup.string().required(t("contact.message.errors.required")),
    });

export const userAndEmailSchema = (t: TFunction) =>
    yup.object().shape({
        from_username: yup
            .string()
            .required(t("contact.username.errors.required")),
        from_email: yup
            .string()
            .required(t("contact.email.errors.required"))
            .email(t("contact.email.errors.email")),
    });

export const emailMeFormValidation = (t: TFunction) =>
    mergeSchema(messageSchema(t), userAndEmailSchema(t));

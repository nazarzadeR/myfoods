import { send } from "@emailjs/browser";

export const emailjs_send_endpoint = (params: Api.TEmailJSParams) => {
    const {
        VITE_EMAILJS_USER_ID,
        VITE_EMAILJS_TEMPLATE_ID,
        VITE_EMAILJS_SERVICES_ID,
    } = import.meta.env;

    const data = {
        ...params,
        user_id: VITE_EMAILJS_USER_ID,
        service_id: VITE_EMAILJS_SERVICES_ID,
    };

    return send(
        VITE_EMAILJS_SERVICES_ID,
        VITE_EMAILJS_TEMPLATE_ID,
        data,
        VITE_EMAILJS_USER_ID,
    );
};

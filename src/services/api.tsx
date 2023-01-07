import http from "lib/http";

interface IQuery {
    search: string;
    FROM: number;
    TO: number;
}

export default async function (query: IQuery) {
    let { FROM, TO, search } = query;
    let { VITE_APP_ID, VITE_APP_KEY } = import.meta.env;

    return http.get(
        `/search?q=${search}&app_id=${VITE_APP_ID}&app_key=${VITE_APP_KEY}&from=${FROM}&to=${TO}&calories=512-756&health=alcohol-free`
    );
}

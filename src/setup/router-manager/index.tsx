import { Route, Routes } from "react-router-dom";

export default function RouterManager() {
    return (
        <Routes>
            <Route path="/" element={<>Hello</>}></Route>
        </Routes>
    );
}

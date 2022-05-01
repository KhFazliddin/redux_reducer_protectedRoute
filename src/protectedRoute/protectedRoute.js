import {useSelector} from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
    const signedUp = useSelector((state) => state.users.signedUp)
    return signedUp ? <Outlet/> : <Navigate to="register"/>

}


import React from "react";
import { Navigate } from "react-router-dom";
import Preloader from "../Preloader/Preloader";

export default function ProtectedRoute({ loggedIn, children, isLoading }) {
    return (
        <>
            {isLoading ? <Preloader /> : loggedIn ? children : <Navigate to="/" replace />}
        </>
    )
}
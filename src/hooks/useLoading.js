import React from "react";

export function useLoading() {
    const [isLoading, setIsLoading] = React.useState(false);

    return { isLoading, setIsLoading };
}
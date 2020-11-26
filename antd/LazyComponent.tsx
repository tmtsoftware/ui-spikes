import React from "react"

interface Props {
    componentPath: string
}

export const LazyComponent  = ({componentPath}: Props) => {
    return (
        React.lazy(() => import(componentPath))
    )
}
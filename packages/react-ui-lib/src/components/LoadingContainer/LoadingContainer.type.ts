import React from "react";

export interface LoadingContainerProps extends React.DetailedHTMLProps<
React.HTMLAttributes<HTMLDivElement>,
HTMLDivElement
> {
    fullWidth?: boolean;
    fullHeight?: boolean;
}

export default LoadingContainerProps;

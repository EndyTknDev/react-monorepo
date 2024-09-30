import React, { forwardRef } from "react";
import classNames from "classnames";
import LoadingContainerProps from "./LoadingContainer.type";
import LoadingContainerRoot from "./LoadingContainer.styles";

export const LoadingContainer = forwardRef<
    HTMLDivElement,
    LoadingContainerProps
>(({ className, ...props }, ref) => (
    <LoadingContainerRoot
        {...props}
        className={classNames("LoadingContainer-root", className)}
        ref={ref}
    />
));

LoadingContainer.displayName = "Loading Container";

export default LoadingContainer;

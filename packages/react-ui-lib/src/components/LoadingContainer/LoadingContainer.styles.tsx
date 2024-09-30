import styled from "@emotion/styled";
import { css } from "@emotion/react";
import LoadingContainerProps from "./LoadingContainer.type";

export const LoadingContainerRoot = styled(
    "div",
)<LoadingContainerProps>`
    &.LoadingContainer-root {
        display: flex;
        justify-content: center;
        align-items: center;
    ${({ fullWidth }: LoadingContainerProps) => (fullWidth
        ? css`width: 100%;`
        : undefined
    )}
    ${({ fullHeight }: LoadingContainerProps) => (fullHeight
        ? css`height: 100%;`
        : undefined
    )}
    }
`;

export default LoadingContainerRoot;

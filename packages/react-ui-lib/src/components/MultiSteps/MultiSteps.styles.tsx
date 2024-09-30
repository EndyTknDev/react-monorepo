import {
    css,
    keyframes,
    styled,
} from "@mui/material";
import MultiStepsProps from "./MultiSteps.types";

const FadeInAnim = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const FadeOutAnim = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

export const MultiStepsFadeAnimation = ({ transitionTime, stateProps, step }: MultiStepsProps) => css`
    & .step {
        display: none;
        animation-duration: ${transitionTime}ms;
        ${stateProps.state === "disabling-actual" && css`
            :nth-of-type(${(stateProps?.from || 0) + 1}) {
                animation-timing-function: ease-in;
                animation-fill-mode: forwards;
                animation-name: ${FadeOutAnim};
                opacity: 1;
                display: flex;
            }
        `}
        ${(stateProps.state === "preparing-next" || stateProps.state === "idle") && css`
            :nth-of-type(${step + 1}) {
                animation-timing-function: ease-in;
                animation-fill-mode: forwards;
                animation-name: ${FadeInAnim};
                opacity: 0;
                display: flex;
            }
        `}
    }
`;

export const MultiStepsRoot = styled("div")<MultiStepsProps>`
    ${({ stepAnimation, ...props}) => {
        switch(stepAnimation) {
        default: return MultiStepsFadeAnimation({ stepAnimation, ...props });
        }
    }}
`;

export const MultiStepsStepRoot = styled("div", )``;

export default MultiStepsRoot;

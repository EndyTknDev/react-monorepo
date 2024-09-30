import React from "react";
import { SxProps, Theme } from "@mui/material";
import { MultiStepsAnimationValues, MultiStepsStatesValues } from "./MultiSteps.constants";

export type MultiStepsStatesType = typeof MultiStepsStatesValues[number];

export type MultiStepsAnimationType = typeof MultiStepsAnimationValues[number];

export interface MultiStepsStateProps {
    state: MultiStepsStatesType;
    to?: number;
    from?: number;
}

export interface MultiStepsBaseProps {
    transitionTime: number;
    stepAnimation?: MultiStepsAnimationType;
    cycled?: boolean;
}

export interface MultiStepsProps extends React.DetailedHTMLProps<Omit<React.HTMLAttributes<HTMLDivElement>, "children">, HTMLDivElement>, MultiStepsBaseProps {
    step: number;
    setStep: React.Dispatch<React.SetStateAction<number>>;
    stateProps: MultiStepsStateProps;
    setStateProps: React.Dispatch<React.SetStateAction<MultiStepsStateProps>>;
    children?: React.ReactNode[] | React.ReactNode;
    presvStep: () => void;
    nextStep: () => void;
    sx?: SxProps<Theme>;
}

export interface UseMultiStepAutoAnimationProps {
    transitionTime?: number;
    stop?: boolean;
    direction?: "left" | "right";
}

export interface useMultiStepsProps extends MultiStepsBaseProps {
    transitionTime: number;
    maxSteps: number;
    autoAnimation?: UseMultiStepAutoAnimationProps;
}

export default MultiStepsProps;

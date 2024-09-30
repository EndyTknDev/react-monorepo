"use client"

/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from "react";
import MultiStepsProps from "./MultiSteps.types";

export type MultiStepContext = Omit<MultiStepsProps, "children">;

export const MultiStepContextLayout = createContext<MultiStepContext>({
    nextStep: () => {},
    presvStep: () => {},
    setStateProps: () => {},
    setStep: () => {},
    stateProps: {
        state: "idle",
    },
    step: 0,
    transitionTime: 1000,
});

export default MultiStepContextLayout;

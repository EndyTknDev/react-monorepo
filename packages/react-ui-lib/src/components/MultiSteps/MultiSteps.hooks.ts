"use client"
import { useEffect, useState } from "react";
import { MultiStepsStateProps, useMultiStepsProps } from "./MultiSteps.types";

export const useMultiStep = ({
    transitionTime,
    maxSteps,
    autoAnimation,
    cycled,
}: useMultiStepsProps) => {
    const [step, setStep] = useState<number>(0);
    const [stateProps, setStateProps] = useState<MultiStepsStateProps>({
        state: "idle",
    });
    let autoAnimateInterval: ReturnType<typeof setInterval>;

    useEffect(() => {
        if (autoAnimation && !autoAnimation?.stop) {
            clearInterval(autoAnimateInterval);
            autoAnimateInterval = setInterval(() => {
                if (autoAnimation?.direction === "left") return presvStep();
                return nextStep();
            }, autoAnimation?.transitionTime);
            return () => { clearInterval(autoAnimateInterval) };
        }
        clearInterval(autoAnimateInterval);
        return () => {
            clearInterval(autoAnimateInterval);
        }
    }, [autoAnimation]);

    useEffect(() => {
        switch (stateProps.state) {
        case "disabling-actual":
            setTimeout(() => {
                setStateProps({
                    state: "preparing-next",
                });
                setStep(stateProps.to || 0);
            }, transitionTime);
            break;
        case "preparing-next":
            setTimeout(() => {
                setStateProps({
                    from: undefined,
                    to: undefined,
                    state: "idle",
                });
            }, transitionTime - 400);
            break;
        default:
            break;
        }
    }, [stateProps, transitionTime, setStep, setStateProps]);

    const presvStep = () => {
        if (!cycled && (step === 0 || stateProps.state !== "idle")) return;
        setStateProps({
            state: "disabling-actual",
            from: step,
            to: (((step - 1) % maxSteps) + maxSteps) % maxSteps,
        });
        return;
    };

    const nextStep = () => {
        if (!cycled && ((maxSteps - 1) === step || stateProps.state !== "idle")) return;
        setStateProps({
            state: "disabling-actual",
            from: step,
            to: (step + 1) % maxSteps,
        });
    };

    return {
        step,
        setStep,
        stateProps,
        setStateProps,
        presvStep,
        nextStep,
        transitionTime,
    };
};

export const MultiStepsHooks = {
    useMultiStep,
};

export default useMultiStep;

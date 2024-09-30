export const MultiStepsStatesValues = ["disabling-actual", "preparing-next", "idle"] as const;

export const MultiStepsAnimationValues = ["fade"] as const;


export const MultiStepsConstants = {
    MultiStepsStates: MultiStepsStatesValues,
};

export default MultiStepsConstants;

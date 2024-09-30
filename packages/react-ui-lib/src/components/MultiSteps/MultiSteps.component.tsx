import React, { forwardRef } from "react";
import MultiStepsRoot, { MultiStepsStepRoot } from "./MultiSteps.styles";
import MultiStepsProps from "./MultiSteps.types";
import classNames from 'classnames';

export const MultiStepsStep = ({className, ...props}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => (
    <MultiStepsStepRoot {...props} className={classNames("step", className)} />
);

export const MultiSteps = forwardRef<HTMLDivElement, MultiStepsProps>(
    (
        {
            children,
            stateProps,
            presvStep,
            nextStep,
            ...props
        },
        ref,
    ) => (
        <MultiStepsRoot
            nextStep={nextStep}
            presvStep={presvStep}
            stateProps={stateProps}
            ref={ref}
            {...props}
        >
            {children}
        </MultiStepsRoot>
    ),
);

MultiSteps.displayName = "MultiSteps";

export default MultiSteps;

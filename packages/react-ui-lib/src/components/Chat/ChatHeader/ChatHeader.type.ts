import React from "react";

export interface ChatHeaderBaseProps {
    title?: string;
    titleIcon?: React.ReactNode;
    closeIcon?: React.ReactNode;
    disableCloseIcon?: React.ReactNode;
    onClickClose?: React.MouseEventHandler<HTMLButtonElement>;
}

export type ChatHeaderProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & ChatHeaderBaseProps;

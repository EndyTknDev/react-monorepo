import React, { SetStateAction } from "react";

export interface ModalProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    enable: boolean;
    setEnable: React.Dispatch<SetStateAction<boolean>>;    
    title?: string;
}

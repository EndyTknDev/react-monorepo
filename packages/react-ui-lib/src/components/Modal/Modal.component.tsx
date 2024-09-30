import React, { forwardRef } from "react";
import { ModalProps } from "./Modal.type";
import ModalRoot, { ModalBody, ModalHeader, ModalWrapper } from "./Modal.styles";
import { IconButton, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
    ({ children, title, className, enable, setEnable, ...props }, ref) => (
        <ModalRoot
            ref={ref}
            className={`Modal-root Modal-root--${enable ? "enabled" : "disabled"} ${className}`}
            {...props}
        >
            <ModalWrapper className={`Modal-wrapper Modal-wrapper--${enable ? "enabled" : "disabled"}`}>
                <ModalHeader className="Modal-header">
                    <Typography color="primary.dark" variant="h3">{title}</Typography>
                    <IconButton onClick={() => setEnable(false)} className="Modal-header-close">
                        <Close/>
                    </IconButton>
                </ModalHeader>
                <ModalBody className="Modal-body">{children}</ModalBody>
            </ModalWrapper>
        </ModalRoot>
    ),
);


Modal.displayName = "Modal"

export default Modal;

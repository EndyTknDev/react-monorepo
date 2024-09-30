import React, { forwardRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Icon, Typography } from "@mui/material";
import ChatHeaderRoot, { ChatHeaderIconButton } from "./ChatHeader.styles";
import { ChatHeaderProps } from "./ChatHeader.type";

export const ChatHeader = forwardRef<HTMLDivElement, ChatHeaderProps>(
    ({
        titleIcon,
        closeIcon = <CloseIcon />,
        onClickClose,
        disableCloseIcon,
        title,
        ...props
    }, ref) => (
        <ChatHeaderRoot ref={ref} {...props}>
            {titleIcon && <Icon>{titleIcon}</Icon>}
            <Typography>{title}</Typography>
            {disableCloseIcon && <ChatHeaderIconButton onClick={onClickClose}>{closeIcon}</ChatHeaderIconButton>}
        </ChatHeaderRoot>
    ),
);

export default ChatHeader;

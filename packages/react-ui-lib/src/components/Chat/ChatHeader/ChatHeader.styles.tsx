import React from "react";
import { IconButton, IconButtonProps, styled } from "@mui/material";

export const ChatHeaderRoot = styled("div", {
    slot: "header",
    label: "ChatHeader",
    name: "Chat",
})`
    border-radius: 0;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 12px;
`;

export const ChatHeaderIconButton: React.FC<IconButtonProps> = styled(IconButton)`
        margin-left: auto;
`;

export default ChatHeaderRoot;

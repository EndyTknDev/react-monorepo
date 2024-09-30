import React from "react";
import { styled } from "@mui/material";
import LoadingContainerProps from "../../LoadingContainer/LoadingContainer.type";
import LoadingContainer from "../../LoadingContainer/LoadingContainer.component";

export const ChatBodyRoot = styled("div", {
    slot: "body",
    label: "ChatBody",
    name: "Chat",
})`
    &.ChatBody-root {
        border-radius: 0;
        display: flex;
        flex-direction: column;
        padding: 8px 12px;
        gap: 12px;
        height: 100%;
        overflow-y: auto;
        padding: 16px 16px 32px 16px;
    }
`;

export const ChatBodyMessageLoadWrapper: React.FC<LoadingContainerProps> = styled(LoadingContainer)<LoadingContainerProps>`
    min-height: 40px;
`;

export default ChatBodyRoot;

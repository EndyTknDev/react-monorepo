import { styled } from "@mui/material";
import React from "react";
import { ChatMessageRootProps } from "./ChatMessage.type";

export const ChatMessageRoot = styled("div", {
    slot: "message",
    label: "ChatMessage",
    name: "Chat",
})<ChatMessageRootProps>`
    &.ChatMessage-root {
        display: flex;
        gap: 8px;
    }

    &.StandardChatMessage-root {
        display: flex;
        gap: 8px;
    }
    &.HeaderedChatMessage-root {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
`;

export const ChatMessageHeader: React.FC<
    React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    >
> = styled("div")`
    &.ChatMessage-header {
        margin: auto;
    }
    &.RightChatMessage-header {
        order: 2;
    }
    &.HeaderedChatMessage-header {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
        padding-bottom: 4px;
        
        p {
            font-weight: bold;
        }
    }
`;

export const ChatMessageContentContainer = styled("div")`
    &.ChatMessage-container {
        animation: 1.5s fade-in;

        @keyframes fade-in {
            from { opacity: 0 }
            to { opacity: 1 }
        }
    }
    &.StandardChatMessage-container {
        background-color: ${({ theme }) => theme.palette.primary.main};
        max-width: 70%;
        color: white;

        &.LeftChatMessage-container {
            padding: 6px 24px 12px 12px;
            border-radius: 4px 12px 12px 12px;
        }
        &.RightChatMessage-container {
            padding: 6px 24px 12px 12px;
            border-radius: 12px 4px 12px 12px;
        }
    }
`;

export const ChatMessageContentWrapper: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = styled("div")`
    &.ChatMessage-wrapper {
        width: 100%;
        display: flex;
        word-wrap: break-word;
        white-space: pre-wrap;
    }

    &.RightChatMessage-wrapper {
        justify-content: flex-end;
    }
`;

export default ChatMessageRoot;

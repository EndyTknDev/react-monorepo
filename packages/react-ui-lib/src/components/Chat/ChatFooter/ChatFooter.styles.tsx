import React from "react";
import { IconButton, IconButtonProps, styled } from "@mui/material";
import { ChatFooterRootProps } from "./ChatFooter.type";

export const ChatFooterRoot: React.FC<ChatFooterRootProps> = styled("form", {
    slot: "body",
    label: "footer",
    name: "Chat",
})<ChatFooterRootProps>`
    &.ChatFooter-root {
        display: flex;
        padding: 8px;
        box-sizing: border-box;
    }

    & .MuiInputBase-root {
        border-radius: 4px;
        background-color: rgba(255, 255, 255, 0.05);
        :hover {
            outline: none;
        }
        :focus-within {
            outline: none;
        }
        ::before,   
        ::after {
            all: unset;
        }
    }
`;

export const ChatFooterSend: React.FC<IconButtonProps> = styled(IconButton)`
    &.ChatFooter-send {
        width: fit-content;
        height: fit-content;
        align-self: center;
    }
`;

export const ChatFooterOptionsWrapper = styled("div")`
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    display: flex;
    box-sizing: border-box;
    padding: 12px;
    
    & .options {
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        gap: 12px;
        box-sizing: border-box;
        padding-bottom: 12px;
    }

    Button {
        white-space: nowrap;
        background-color: rgba(255, 255, 255, 0.1);
        padding: 12px;
        box-sizing: border-box;
    }
`;

export default ChatFooterRoot;

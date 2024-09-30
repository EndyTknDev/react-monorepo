/* eslint-disable no-unused-vars */
import { ComponentsVariants } from "@mui/material";
import React from "react";
import ChatBodyProps from "./ChatBody/ChatBody.type";
import ChatMessageProps from "./ChatMessage/ChatMessage.type";
import ChatVariantsValues from "./Chat.constants";
import { ChatHeaderBaseProps } from "./ChatHeader";

export type ChatVariant = typeof ChatVariantsValues[number];

export interface SendMessageProps {
    onTrySendMessage?: (message?: ChatMessageProps) => Promise<unknown>;
    onSendMessage?: (message?: ChatMessageProps) => Promise<unknown>;
    onMessageResponse?: (message?: ChatMessageProps) => Promise<ChatMessageProps>;
}

export interface ChatProps extends Pick<ChatBodyProps, "messages" | "messageLoaded">, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    variant?: ChatVariant;
    loaded?: boolean;
    chatOptions?: string[];
    defaultPropsMessage?: Omit<ChatMessageProps, "message">;
    sendMessage: (message: ChatMessageProps) => void;
    messageTextField: string | undefined;
    setMessageTextField: React.Dispatch<React.SetStateAction<string | undefined>>;
    headerProps?: ChatHeaderBaseProps;
    scrolloOnMessage?: boolean;
}

export interface useChatProps extends SendMessageProps {
    initMessages?: ChatMessageProps[];
}

declare module "@mui/material/styles" {
    interface ComponentNameToClassKey {
        Chat: "root" | "message" | "footer" | "body" | "header";
    }

    interface ComponentsPropsList {
        Chat: Partial<ChatProps>;
    }

    interface Components {
        Chat?: {
            defaultProps?: ComponentsPropsList["Chat"];
            variants?: ComponentsVariants["Chat"];
        };
    }
}

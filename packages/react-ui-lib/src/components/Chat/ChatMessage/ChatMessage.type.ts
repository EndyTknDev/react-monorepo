import React from "react";
import { ChatMessageDirectionValues, ChatMessageSubVariantsValues, ChatMessageVariantsValues } from "./ChatMessage.constants";

export type ChatMessageVariant = typeof ChatMessageVariantsValues[number];

export type ChatMessageSubVariant = typeof ChatMessageSubVariantsValues[number];

export type ChatMessageDirection = typeof ChatMessageDirectionValues[number];

export interface ChatMessageRootProps {
    variant?: ChatMessageVariant;
}

export interface ChatMessageProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ChatMessageRootProps {
    message?: string;
    // eslint-disable-next-line no-unused-vars
    renderMessage?: (props: ChatMessageProps) => React.ReactNode;
    subVariant?: ChatMessageSubVariant;
    titleIcon?: React.ReactNode;
    title?: string;
    disableHeader?: boolean;
    direction?: ChatMessageDirection;
}

export default ChatMessageProps;

"use client"
import React, { forwardRef, useEffect, useRef } from "react";
import classNames from "classnames";
import ChatRoot from "./Chat.styles";
import { ChatProps } from "./Chat.type";
import ChatHeader from "./ChatHeader/ChatHeader.component";
import ChatBody from "./ChatBody/ChatBody.component";
import { ChatFooter } from "./ChatFooter";
import { capitalize } from '@mui/material';

export const Chat = forwardRef<HTMLDivElement, ChatProps>(
    ({
        headerProps,
        chatOptions,
        messages,
        variant = "standard",
        loaded,
        sendMessage,
        messageLoaded,
        messageTextField,
        setMessageTextField,
        defaultPropsMessage,
        scrolloOnMessage,
        className,
        ...props
    }, ref) => {
        const bodyDiv = useRef<HTMLDivElement>(null);
        useEffect(() => {
            if (!bodyDiv.current || !scrolloOnMessage) return;
            bodyDiv.current.scrollTop = bodyDiv.current.scrollHeight;
        }, [messages]);
        return (
            <ChatRoot className={classNames("Chat-root", `${capitalize(variant)}Chat-root`, className)} ref={ref} {...props}>
                <ChatHeader {...headerProps} />
                <ChatBody ref={bodyDiv} loaded={loaded} messageLoaded={messageLoaded} messages={messages} />
                <ChatFooter
                    prefabOptions={chatOptions}
                    messageTextField={messageTextField}
                    setMessageTextField={setMessageTextField}
                    loaded={messageLoaded}
                    onClickSend={(value) => sendMessage({ content: value, ...defaultPropsMessage })}
                />
            </ChatRoot>
        );
    },
);

Chat.displayName = "Chat Component"

export default Chat;

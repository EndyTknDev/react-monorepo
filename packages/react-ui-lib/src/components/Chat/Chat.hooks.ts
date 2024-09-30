"use client"

import { useState } from "react";
import ChatMessageProps from "./ChatMessage/ChatMessage.type";
import { useChatProps } from "./Chat.type";
import { useLoading } from '@mono/react-hooks';

export const useChat = ({
    initMessages,
    onSendMessage,
    onMessageResponse,
    onTrySendMessage,
}: useChatProps) => {
    const [messages, setMessages] = useState<ChatMessageProps[]>(initMessages || []);
    const [messageTextField, setMessageTextField] = useState<string>();
    const [initialized, setInitialized] = useState<boolean>();
    const { error: errorMsg, loaded: messageLoaded, wrapper } = useLoading(true);

    const init = async (newMessage?: ChatMessageProps) => {
        if (newMessage) {
            await sendMessage(newMessage);
        }
        setInitialized(true);
    }

    const sendMessage = (newMessage: ChatMessageProps) => {
        if (!newMessage.content) return;
        return new Promise<void>((res, rej) => {
            wrapper(async () => {
                try {
                    if (onTrySendMessage) await onTrySendMessage();
                    messages.push(newMessage);
                    setMessages([...messages]);
                    setMessageTextField("");
                    if (onSendMessage) await onSendMessage();
                    if (onMessageResponse) {
                        const messageRes = await onMessageResponse(newMessage);
                        messages.push(messageRes);
                        setMessages([...messages]);
                    }
                    res();
                } catch (error) {
                    rej(error);
                    throw error;
                }
            });
        });
    };
    return { messages, initialized, setInitialized, setMessages, init, sendMessage, errorMsg, messageLoaded, messageTextField, setMessageTextField };
};

export default useChat;

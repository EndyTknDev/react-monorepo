import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { PeopleAltRounded } from "@mui/icons-material";
import { Box } from "@mui/material";
import { Chat } from "./Chat.component";
import { useChat } from "./Chat.hooks";
import ChatMessageProps from "./ChatMessage/ChatMessage.type";
import { ChatProps } from "./Chat.type";

const AIMessageMock: ChatMessageProps = {
    disableHeader: false,
    title: "Analisa a Conta",
    titleIcon: <PeopleAltRounded />,
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam hic odio, explicabo praesentium aliquam commodi id repudiandae cum iusto nostrum quam cupiditate nesciunt maxime deserunt vel deleniti voluptatum eaque necessitatibus!",
    variant: "headered",
};

const MessagesMock: ChatMessageProps[] = [
    {
        disableHeader: false,
        direction: "right",
        message: "Oi tudo bem?",
    },
    AIMessageMock,
    {
        disableHeader: false,
        direction: "right",
        message: "Me informe como eu posso fazer a análise de investimento?",
    },
    AIMessageMock,
    {
        disableHeader: false,
        direction: "right",
        message: "Me informe como eu posso fazer a análise de investimento?",
    },
    AIMessageMock,
];

const awaitAISendMessageMock = () => new Promise<ChatMessageProps>((res) => {
    setTimeout(() => {
        res(AIMessageMock);
    }, 500);
});

const meta: Meta<typeof Chat> = {
    component: Chat,
    title: "Components/Chat",
    tags: ["autodocs"],
    args: {
        messages: MessagesMock,
        loaded: true,
        messageLoaded: true,
    },
    parameters: {
        layout: "centered",
    },
};

export default meta;
type Story = StoryObj<typeof Chat>;

export const DefaultStory = (props: ChatProps) => {
    const {
        errorMsg,
        setMessages,
        ...chatProps
    } = useChat({
        initMessages: MessagesMock,
        onMessageResponse: awaitAISendMessageMock,
    });
    return (
        <Box
            sx={{
                width: "420px",
                height: "720px",
                display: "flex",
            }}
        >
            <Chat
                {...props}
                {...chatProps}
                defaultPropsMessage={{ direction: "right" }}
            />
        </Box>
    );
};

export const Default: Story = {
    render: DefaultStory,
};

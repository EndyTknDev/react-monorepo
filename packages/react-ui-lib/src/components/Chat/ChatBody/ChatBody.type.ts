import { PaperProps } from "@mui/material";
import ChatMessageProps from "../ChatMessage/ChatMessage.type";

export interface ChatBodyProps extends PaperProps {
    messages: ChatMessageProps[];
    loaded?: boolean;
    messageLoaded?: boolean;
}

export default ChatBodyProps;

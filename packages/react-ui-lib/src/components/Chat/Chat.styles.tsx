import { styled } from "@mui/material";

export const ChatRoot = styled("div", {
    slot: "root",
    label: "ChatRoot",
    name: "Chat",
})`
    &.Chat-root {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    &.CleanChat-root {
        background-color: rgba(255, 255, 255, 0.05);
        & .ChatBody-root {
            padding: 0 8vw;
        }
    }
`;

export default ChatRoot;

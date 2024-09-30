import React, { forwardRef, LegacyRef } from "react";
import classNames from "classnames";
import { useTheme } from "@mui/material";
import { BeatLoader } from "react-spinners";
import ChatBodyRoot, { ChatBodyMessageLoadWrapper } from "./ChatBody.styles";
import ChatBodyProps from "./ChatBody.type";
import ChatMessage from "../ChatMessage/ChatMessage.component";
import LoadingContainer from "../../LoadingContainer/LoadingContainer.component";

export const ChatBody = forwardRef<HTMLDivElement, ChatBodyProps>(
    ({ messages, loaded, messageLoaded, ...props }, ref) => {
        const theme = useTheme();
        return (
            <ChatBodyRoot className={classNames("ChatBody-root")} ref={ref} {...props}>
                { !loaded ? (
                    <LoadingContainer fullHeight fullWidth>
                        <BeatLoader size={15} color={theme.palette.primary.main} speedMultiplier={0.5} />
                    </LoadingContainer>
                ) : (
                    <>
                        {messages.map(({ ref: msgRef, id, ...msgProps }) => <ChatMessage ref={msgRef as LegacyRef<HTMLDivElement>} key={id} {...msgProps} />)}
                        <ChatBodyMessageLoadWrapper fullWidth>
                            {!messageLoaded && <BeatLoader size={15} color={theme.palette.primary.main} speedMultiplier={0.5} />}
                        </ChatBodyMessageLoadWrapper>
                    </>
                )}
            </ChatBodyRoot>
        );
    },
);

export default ChatBody;

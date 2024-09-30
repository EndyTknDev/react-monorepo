import React, { forwardRef } from "react";
import { capitalize, Icon, Typography } from "@mui/material";
import classNames from "classnames";
import ChatMessageProps from "./ChatMessage.type";
import ChatMessageRoot, { ChatMessageContentContainer, ChatMessageContentWrapper, ChatMessageHeader } from "./ChatMessage.styles";

export const ChatMessage = React.memo<ChatMessageProps>(
    forwardRef<HTMLDivElement, ChatMessageProps>(
        (
            {
                content,
                renderMessage,
                titleIcon,
                title,
                disableHeader = true,
                direction = "left",
                variant = "standard",
                ...props
            },
            ref,
        ) => (
            <ChatMessageRoot
                className={classNames(
                    "ChatMessage-root",
                    `${capitalize(variant)}ChatMessage-root`,
                    `${capitalize(direction)}ChatMessage-root`,
                )}
                variant={variant}
                ref={ref}
                {...props}
            >
                {!disableHeader && (
                    <ChatMessageHeader
                        className={classNames(
                            "ChatMessage-header",
                            `${capitalize(variant)}ChatMessage-header`,
                            `${capitalize(direction)}ChatMessage-header`,
                        )}
                    >
                        {titleIcon && <Icon>{titleIcon}</Icon>}
                        <Typography>{title}</Typography>
                    </ChatMessageHeader>
                )}
                <ChatMessageContentWrapper
                    className={classNames(
                        "ChatMessage-wrapper",
                        `${capitalize(direction)}ChatMessage-wrapper`,
                    )}
                >
                    <ChatMessageContentContainer
                        className={classNames(
                            "ChatMessage-container",
                            `${capitalize(variant)}ChatMessage-container`,
                            `${capitalize(direction)}ChatMessage-container`,
                        )}
                    >
                        {renderMessage ? renderMessage({
                            content,
                            renderMessage,
                            titleIcon,
                            title,
                            disableHeader,
                            direction,
                            variant,
                            ...props,
                        }) : (
                            <Typography variant="body2">
                                { content }
                            </Typography>
                        )}
                    </ChatMessageContentContainer>
                </ChatMessageContentWrapper>
            </ChatMessageRoot>
        ),
    ),
);

export default ChatMessage;

"use client"
import React, { forwardRef, useEffect, useRef } from "react";
import SendIcon from "@mui/icons-material/Send";
import classNames from "classnames";
import { Button, TextField } from "@mui/material";
import ChatFooterRoot, { ChatFooterProps } from "./ChatFooter.type";
import { ChatFooterOptionsWrapper, ChatFooterSend } from "./ChatFooter.styles";
import { useInputOnChange } from '@mono/react-hooks';

export const ChatFooter = forwardRef<HTMLFormElement, ChatFooterProps>(
    (
        {
            sendIcon = <SendIcon />,
            onClickSend,
            prefabOptions = [],
            messageTextField,
            setMessageTextField,
            loaded,
            ...props
        },
        ref,
    ) => {
        const textField = useRef<HTMLInputElement | null>(null);
        const { onChange } = useInputOnChange(setMessageTextField);
        useEffect(() => {
            if (document?.activeElement?.tagName === "BODY") {
                textField?.current?.focus();
            }
        }, [loaded]);

        const onSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
            e?.preventDefault();
            const formData = new FormData(e.currentTarget);
            const value = formData.get("chatTextField") as string;
            if (onClickSend) await onClickSend(value);
        };

        return (
            <>
                {prefabOptions?.length > 0 && (
                    <ChatFooterOptionsWrapper>
                        <div className="options">
                            {prefabOptions.map((string) => (
                                <Button
                                    onClick={() => {
                                        if (onClickSend) onClickSend(string);
                                    }}
                                    key={string}
                                    disabled={!loaded}
                                >
                                    {string}
                                </Button>
                            ))}
                        </div>
                    </ChatFooterOptionsWrapper>
                )}
                <ChatFooterRoot
                    className={classNames("ChatFooter-root")}
                    ref={ref}
                    onKeyDown={(e) => {
                        if (e.code === "Enter" && e.shiftKey === false) {
                            e?.preventDefault();
                            onSendMessage(e);
                        }
                    }}
                    onSubmit={(e) => {
                        e?.preventDefault();
                        onSendMessage(e);
                    }}
                    {...props}
                >
                    <TextField
                        className="ChatFooterTextField"
                        inputRef={textField}
                        name="chatTextField"
                        maxRows={4}
                        inputProps={{ maxLength: 720 }}
                        multiline
                        fullWidth
                        disabled={!loaded}
                        value={messageTextField}
                        onChange={onChange}
                    />
                    <ChatFooterSend
                        type="submit"
                        disabled={!loaded}
                        className="ChatFooter-send"
                    >
                        {sendIcon}
                    </ChatFooterSend>
                </ChatFooterRoot>
            </>
        );
    },
);

export default ChatFooter;

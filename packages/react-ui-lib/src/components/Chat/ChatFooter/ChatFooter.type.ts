import React from "react";
import ChatFooterRoot from "./ChatFooter.styles";

export type ChatFooterRootProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLFormElement>, HTMLFormElement>;

export interface ChatFooterProps extends ChatFooterRootProps {
    value?: string;
    sendIcon?: React.ReactNode;
    loaded?: boolean;
    // eslint-disable-next-line no-unused-vars
    onClickSend?: (message: string) => Promise<void> | void;
    messageTextField: string | undefined;
    setMessageTextField: React.Dispatch<React.SetStateAction<string | undefined>>;
    prefabOptions?: string[];
}

export default ChatFooterRoot;

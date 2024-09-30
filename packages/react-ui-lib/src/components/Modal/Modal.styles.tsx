import { styled } from "@mui/material";

export const ModalRoot = styled("div", {
    slot: "root",
    label: "Modal",
    name: "Modal"
})`
    &.Modal-root {
        left: 0;
        top: 0;
        display: flex;
        position: fixed;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.2);
        overflow: hidden;
        z-index: 5;
    }
        
    &.Modal-root--disabled {
        visibility: hidden;
    }
`;
            
export const ModalWrapper = styled("div", {
    slot: "wrapper",
    label: "Modal",
    name: "Modal",
})`
    &.Modal-wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
        max-width: 600px;
        background-color: white;
    }

    &.Modal-wrapper--disabled {
        visibility: hidden;
    }
`;

export const ModalHeader = styled("header", {
    slot: "header",
    label: "Modal",
    name: "Modal"
})`
    &.Modal-header {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding: 8px 12px;
        width: 100%;
    }

    & .Modal-header-close {
        margin-left: auto;
    }
`;

export const ModalBody = styled("div", {
    slot: "body",
    label: "Modal",
    name: "Modal"
})`
    &.Modal-body {
        box-sizing: border-box;
        padding: 0px 12px;
        margin-bottom: 12px;
    }
`;

export default ModalRoot;

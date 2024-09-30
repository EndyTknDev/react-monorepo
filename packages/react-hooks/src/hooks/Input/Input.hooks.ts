import React from "react";

export const useInputOnChange = <T>(setValue: React.Dispatch<T>) => {
    const onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
        setValue(e.target.value as T);
    };
    return { onChange };
};

export default useInputOnChange;

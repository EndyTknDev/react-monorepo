import { getDigits } from "../../../react-utils/src";

export const formatPhone = (phone: string): string => {
    const phoneDigits = getDigits(phone);
    const len = phoneDigits.length;

    const DD = phoneDigits.substring(0, 2);
    const start = phoneDigits.substring(2, len - 4);
    const end = phoneDigits.substring(len - 4);

    if (len <= 2) return phoneDigits;

    if (len > 2 && len < 10) return `(${DD}) ${phoneDigits.substring(2)}`;

    if (len >= 10) return `(${DD}) ${start}-${end}`;

    return phoneDigits;
};

export const isPhoneValid = (phone: string) => {
    const phoneDigits = getDigits(phone);
    return (phoneDigits?.length === 11);
};


export default formatPhone;

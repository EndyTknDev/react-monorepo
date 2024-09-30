import { getDigits } from '@mono/common-utils';

export const formatCPF = (cpf: string): string => {
    const cpfDigits = getDigits(cpf);
    const len = cpfDigits.length;
    let formatedCPF = cpfDigits.substring(0, 3);

    if (len > 3) formatedCPF += `.${cpfDigits.substring(3, 6)}`;
    if (len > 6) formatedCPF += `.${cpfDigits.substring(6, 9)}`;
    if (len > 9) formatedCPF += `-${cpfDigits.substring(9, 12)}`;

    return formatedCPF;
};

export const isCPFValid = (cpf: string) => {
    const cpfDigits = cpf.replace(/[^\d]/g, "");
    if (cpfDigits.length !== 11) {
        return false;
    }

    if (/^(\d)\1+$/.test(cpfDigits)) {
        return false;
    }

    const calculateCheckDigit = (base: string, factor: number): number => {
        const total: number = Array.from(base).reduce(
            (acm, char, idx) => acm + parseInt(char, 10) * (factor - idx),
            0,
        );

        const remainder = total % 11;
        return remainder < 2 ? 0 : 11 - remainder;
    };

    const firstCheckDigit = calculateCheckDigit(cpfDigits.substring(0, 9), 10);
    if (firstCheckDigit !== parseInt(cpfDigits.charAt(9), 10)) {
        return false;
    }

    const secondCheckDigit = calculateCheckDigit(
        cpfDigits.substring(0, 10),
        11,
    );
    if (secondCheckDigit !== parseInt(cpfDigits.charAt(10), 10)) {
        return false;
    }

    return true;
};

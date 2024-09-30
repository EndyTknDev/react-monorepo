import { getDigits } from '@mono/common-utils';

export const formatCNPJ = (cnpj: string): string => {
    const cnpjDigits = getDigits(cnpj);
    const len = cnpjDigits.length;
    let formatedCNPJ = cnpjDigits.substring(0, 2);

    if (len > 2) formatedCNPJ += `.${cnpjDigits.substring(2, 5)}`;
    if (len > 5) formatedCNPJ += `.${cnpjDigits.substring(5, 8)}`;
    if (len > 8) formatedCNPJ += `/${cnpjDigits.substring(8, 12)}`;
    if (len > 12) formatedCNPJ += `-${cnpjDigits.substring(12)}`;

    return formatedCNPJ;
};

export const isCNPJValid = (cnpj: string): boolean => {
    const cnpjDigits = cnpj.replace(/[^\d]/g, "");

    if (cnpjDigits.length !== 14) return false;

    if (/^(\d)\1+$/.test(cnpjDigits)) return false;

    const calculateCheckDigit = (base: string, factors: number[]): number => {
        const total = Array.from(base).reduce((acm, char, idx) => (
            acm + parseInt(char, 10) * (factors[idx])
        ), 0);

        const remainder = total % 11;
        return remainder < 2 ? 0 : 11 - remainder;
    };

    const firstFactors = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const secondFactors = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    const firstCheckDigit = calculateCheckDigit(
        cnpjDigits.substring(0, 12),
        firstFactors,
    );
    if (firstCheckDigit !== parseInt(cnpjDigits.charAt(12), 10)) return false;

    const secondCheckDigit = calculateCheckDigit(
        cnpjDigits.substring(0, 13),
        secondFactors,
    );

    if (secondCheckDigit !== parseInt(cnpjDigits.charAt(13), 10)) return false;

    return true;
};

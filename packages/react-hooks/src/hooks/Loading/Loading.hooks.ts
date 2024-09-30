import React, { useState } from "react";
import { UseLoadingCallback } from './Loading.type';

export function useLoading(loadedDefault?: boolean) {
    const [loaded, setLoaded] = useState<boolean>(loadedDefault || false);
    const [error, setError] = useState<boolean>(false);
    const [errorStackTrace, setErrorStackTrace] = useState<Error>();

    const wrapper = async (callback: UseLoadingCallback): Promise<void> => {
        setError(false);
        setLoaded(false);
        try {
            await callback();
        } catch (e) {
            setError(true);
            setErrorStackTrace(e as Error);
        } finally {
            setLoaded(true);
        }
    };

    return {
        loaded,
        setLoaded,
        error,
        setError,
        errorStackTrace,
        setErrorStackTrace,
        wrapper,
    };
}

export const useFetchData = <T>(fetcher: () => Promise<T> | void, loadedDefault?: boolean) => {
    const { wrapper, ...loadingProps } = useLoading(loadedDefault);
    const [fetching, setFetching] = useState<boolean>(false);
    const [data, setData] = useState<T | undefined>(undefined);
    
    const fetch = (): Promise<T | void> => {
        return new Promise((res, rej) => {
            wrapper(async () => {
                setFetching(true);
                try {
                    const newData = await fetcher();
                    if (newData) {
                        setData(newData);
                        res(newData)
                    }                    
                } catch (error) {
                    rej(error);
                    throw error;
                } finally {
                    setFetching(false);
                }
            })
        })
    }

    return { data, fetch, setData, fetching, setFetching, ...loadingProps}
}

export default { useLoading };

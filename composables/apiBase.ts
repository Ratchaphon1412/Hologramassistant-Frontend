import { useRuntimeConfig } from "nuxt/app";
type Headers = {
  [key: string]: string;
};

export const useApiBase = async <T>(path: string, options: any) => {
  const config = useRuntimeConfig();
  const headers: Headers = {
    Accept: "application/json",
  };
  return await useFetch<T>(path, {
    credentials: "include",
    watch: false,
    ...options,
    baseURL: config.public.apiBaseURL,
    headers: {
      ...headers,
      ...options?.headers,
    },
  });
};

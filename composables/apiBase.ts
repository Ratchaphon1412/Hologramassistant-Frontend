import { useRuntimeConfig } from "nuxt/app";
import { authStore } from "~/store/auth";

type Headers = {
  [key: string]: string;
};

export const useApiBase = async <T>(path: string, options: any) => {
  const config = useRuntimeConfig();
  const auth = authStore();
  const headers: Headers = {
    Accept: "application/json",
    Authorization: `Bearer ${auth.accessToken}`,
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
    onRequestError({ request, options, error }) {
      // Handle the request errors
      console.log("onRequestError", error);
    },
  });
};

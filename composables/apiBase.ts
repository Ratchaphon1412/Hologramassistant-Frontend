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
  };

  if (auth.isLogged) {
    headers["Authorization"] = `Bearer ${auth.accessToken}`;
  }

  const response = await useFetch<T>(path, {
    credentials: "include",
    watch: false,
    ...options,
    baseURL: config.public.apiBaseURL,
    headers: {
      ...headers,
      ...options?.headers,
    },
  });
  console.log(response.data);
  console.log(response.error.value?.statusCode);
  if (response.error && response.error.value?.statusCode === 401) {
    // Handle unauthorized error

    // Refresh token
    const refresh = await auth.refreshAuth();

    if (refresh) {
      // Retry request
      if (auth.isLogged) {
        headers["Authorization"] = `Bearer ${auth.accessToken}`;
      }

      const retryResponse = await useFetch<T>(path, {
        credentials: "include",
        watch: false,
        ...options,
        baseURL: config.public.apiBaseURL,
        headers: {
          ...headers,
          ...options?.headers,
        },
      });

      return retryResponse;
    } else {
      navigateTo("/login");
    }
  }
  return response;
};

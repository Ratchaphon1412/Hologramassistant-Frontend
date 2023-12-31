import { defineStore } from "pinia";

export const authStore = defineStore(
  "authStore",
  () => {
    let email = ref("");
    let username = ref("");
    let password = ref("");
    let accessToken = ref("");
    let refreshToken = ref("");
    let usernameProfile = ref("");
    let emailProfile = ref("");
    let openaiToken = ref("");
    let isLogged = ref(false);

    async function login(emailParam: string, passwordParam: string) {
      try {
        const { data: data, error: error } = await useApiBase<{
          access: string;
          refresh: string;
        }>("/user/token/", {
          method: "POST",
          body: JSON.stringify({
            email: emailParam,
            password: passwordParam,
          }),
        });

        if (data.value) {
          accessToken.value = data.value?.access;
          refreshToken.value = data.value?.refresh;
          isLogged.value = true;
          return true;
        }

        return false;
      } catch (error) {
        // Handle the error here
      }
    }

    async function me() {
      const { data: data, error: error } = await useApiBase<{
        email: string;
        username: string;
        openai_token: string;
      }>("/user/profile/", {
        method: "GET",
      });

      if (data.value) {
        emailProfile.value = data.value?.email;
        usernameProfile.value = data.value?.username;
        openaiToken.value = data.value?.openai_token;
        return true;
      }
      return false;
    }

    async function refreshAuth() {
      const { data: data, error: error } = await useApiBase<{
        access: string;
      }>("/user/token/refresh/", {
        method: "POST",
        body: JSON.stringify({
          refresh: refreshToken.value,
        }),
      });
      console.log("refreshAuth");

      if (data.value) {
        accessToken.value = data.value?.access;
        return true;
      }
      return false;
    }

    async function register(token: string) {
      const { data: data, error: error } = await useApiBase<{
        access: string;
        refresh: string;
      }>("/user/profile/", {
        method: "POST",
        body: JSON.stringify({
          email: email.value,
          username: username.value,
          password: password.value,
          openai_token: token,
        }),
      });

      if (data.value) {
        email.value = "";
        username.value = "";
        password.value = "";

        return true;
      }

      return false;
    }

    function logout() {
      accessToken.value = "";
      refreshToken.value = "";
      emailProfile.value = "";
      usernameProfile.value = "";
      openaiToken.value = "";
      isLogged.value = false;
    }

    return {
      email,
      username,
      password,
      login,
      accessToken,
      refreshToken,
      me,
      usernameProfile,
      emailProfile,
      openaiToken,
      isLogged,
      logout,
      refreshAuth,
      register,
    };
  },
  {
    persist: true,
  }
);

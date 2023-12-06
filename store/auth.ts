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
          token: string;
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
        token: string;
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
    };
  },
  {
    persist: true,
  }
);

import { defineStore } from "pinia";

export const authStore = defineStore(
  "authStore",
  () => {
    let email = ref("");
    let username = ref("");
    let password = ref("");
    let token = ref("");
    let loginEmail = ref("");
    let loginPassword = ref("");

    async function login(emailParam: string, passwordParam: string) {
      try {
        const response = await useApiBase<{ token: string }>("/user/token/", {
          method: "POST",
          body: JSON.stringify({
            email: emailParam,
            password: passwordParam,
          }),
        });

        return response;
      } catch (error) {
        // Handle the error here
      }
    }

    return { email, username, password, token, login };
  },
  {
    persist: true,
  }
);

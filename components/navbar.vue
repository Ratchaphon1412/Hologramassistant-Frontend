<template>
  <nav class="bg-black">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="h-8"
          alt="Assistant Logo"
        />
        <span class="self-center text-2xl font-semibold whitespace-nowrap"
          >Assistant</span
        >
      </NuxtLink>

      <div
        v-if="auth.isLogged"
        class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"
      >
        <!--Profile Button-->
        <button
          type="button"
          class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300"
          id="user-menu-button"
          aria-expanded="false"
          data-dropdown-toggle="user-dropdown"
          data-dropdown-placement="bottom"
        >
          <span class="sr-only">Open user menu</span>
          <!-- <img class="w-8 h-8 rounded-full" src="" alt="user photo" /> -->
          <span> {{ auth.usernameProfile }}</span>
        </button>
        <!-- Dropdown menu -->
        <div
          class="z-50 hidden my-4 text-base list-none divide-y divide-gray-100 rounded-lg shadow bg-black"
          id="user-dropdown"
        >
          <div class="px-4 py-3">
            <span class="block text-sm text-white">{{
              auth.usernameProfile
            }}</span>
            <span class="block text-sm text-gray-400 truncate">{{
              auth.emailProfile
            }}</span>
          </div>
          <ul class="py-2" aria-labelledby="user-menu-button">
            <li>
              <NuxtLink
                to="/"
                class="block px-4 py-2 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-700"
                >Home</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/ai"
                class="block px-4 py-2 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-700"
                >AI</NuxtLink
              >
            </li>

            <li>
              <a
                href="#"
                @click="logout"
                class="block px-4 py-2 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-700"
                >Sign out</a
              >
            </li>
          </ul>
        </div>
        <!--Humberger Button-->
        <button
          data-collapse-toggle="navbar-user"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-user"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <!-- login button -->
      <div
        v-else
        class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"
      >
        <NuxtLink to="/auth/login" class="btn btn-neutral">Login</NuxtLink>
      </div>

      <!-- list menu-->
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-user"
      >
        <!-- <ul
          class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"
        >
          <li>
            <a
              href="#"
              class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent"
              aria-current="page"
              >Home</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >About</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >Services</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Pricing</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Contact</a
            >
          </li>
        </ul> -->
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { authStore } from "~/store/auth";
const auth = authStore();

function logout() {
  auth.logout();
  navigateTo("/");
}
</script>

<style></style>

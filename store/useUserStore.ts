

export const useUserStore = defineStore('user', () => {

    // state
    const userName = ref<string>('');

    // getters
    const getUserName = computed(() => userName.value);

    // Actions
    const setUserName = (name: string) => {
        userName.value = name;
    }

    return {
        userName,
        getUserName,
        setUserName,
    }
})
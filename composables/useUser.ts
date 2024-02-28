import { defaultUserDetails, getUserDetailsApi, mapUserToVM, type UserDetailsEntity } from "~/api";

export const useUser = () => {

    let userDetails = reactive<UserDetailsEntity>(defaultUserDetails);
    const isLoading = ref<boolean>(false);
    const hasError = ref<boolean>(false);

    const getUserDetails = async (id: number) => {
        try {
            isLoading.value = true;
            const { data, hasError } = await getUserDetailsApi(id);

            if (data) {
                Object.assign(userDetails, mapUserToVM(data));
            } else {
                userDetails = defaultUserDetails;
            }

            if (hasError) handlingErrors();

        } catch (error) {
            handlingErrors();
        } finally {
            isLoading.value = false;
        }
    }

    const handlingErrors = (): void => {
        userDetails = defaultUserDetails;
        hasError.value = true;
    }

    return {
        // props
        userDetails,
        isLoading,
        hasError,

        // methods
        getUserDetails,
    }
}
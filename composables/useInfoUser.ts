import { defaultUserDetail, getUserDetailApi, mapUserToVM, type UserDetailEntity } from "~/api";

export const useInfoUser = () => {

    let user = reactive<UserDetailEntity>(defaultUserDetail);
    const isLoading = ref<boolean>(false);
    const hasError = ref<boolean>(false);

    const getDetailUser = async (id: number) => {
        try {
            isLoading.value = true;
            const { data, hasError: hasErrorApi } =  await getUserDetailApi(id);
            
            if(data) {
                Object.assign(user, mapUserToVM(data));
            } else {
                user = defaultUserDetail;
            }

            if(hasErrorApi) {
                hasError.value = true;
            }
           
        } catch (error) {
            user = defaultUserDetail;
            hasError.value = true;
        } finally {
            isLoading.value = false;
        }
    }

    return {
        // props
        user,
        isLoading,
        hasError,

        // methods
        getDetailUser,
    }
}
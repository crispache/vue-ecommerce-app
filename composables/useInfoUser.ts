import { getUserDetailApi, vm } from "~/api"
import { mapUserToVM } from "~/api/api.mapper";

export const useInfoUser = () => {

    let user = reactive<vm.UserDetailEntity>(vm.defaultUserDetail);
    const isLoading = ref<boolean>(false);
    const hasError = ref<boolean>(false);

    const getDetailUser = async (id: number) => {
        try {
            isLoading.value = true;
            const { data, hasError: hasErrorApi } =  await getUserDetailApi(id);
            
            if(data) {
                Object.assign(user, mapUserToVM(data));
            } else {
                user = vm.defaultUserDetail;
            }

            if(hasErrorApi) {
                hasError.value = true;
            }
           
        } catch (error) {
            user = vm.defaultUserDetail;
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
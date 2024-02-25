import { getUserDetailApi, vm } from "~/api"
import { mapUserToVM } from "~/api/api.mapper";

export const useInfoUser = () => {

    const user = ref<vm.UserDetailEntity>(vm.createDefaultUserDetail());
    const isLoading = ref<boolean>(false);
    const hasError = ref<boolean>(false);

    const getDetailUser = async (id: number) => {
        try {
            isLoading.value = true;
            const { data, hasError: hasErrorApi } =  await getUserDetailApi(id);
            
            if(data) {
                user.value = mapUserToVM(data);
            } else {
                user.value = vm.createDefaultUserDetail()
            }

            if(hasErrorApi) {
                hasError.value = true;
            }
           
        } catch (error) {
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
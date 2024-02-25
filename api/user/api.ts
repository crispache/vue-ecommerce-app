import type { UserDetailEntityApi } from "./api.model";

interface UserDetailResponse {
    data: UserDetailEntityApi | null;
    hasError?: boolean;
}

export const getUserDetailApi = async (id: number): Promise<UserDetailResponse> => {
    
    try {
        const data = await $fetch<UserDetailEntityApi>('https://dummyjson.com/users/1');
        return { data };
    } catch (error) {
        return { data: null, hasError: true}
    }

};
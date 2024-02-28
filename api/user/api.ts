import type { UserDetailsEntityApi } from "./api.model";

interface UserDetailsResponse {
    data: UserDetailsEntityApi | null;
    hasError?: boolean;
}

export const getUserDetailsApi = async (id: number): Promise<UserDetailsResponse> => {
    
    try {
        const data = await $fetch<UserDetailsEntityApi>('https://dummyjson.com/users/1');
        return { data };
    } catch (error) {
        return { data: null, hasError: true}
    }

};
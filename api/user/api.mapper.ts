import type { UserDetailsEntityApi } from "./api.model";
import * as vm from "./api.vm";

export const mapUserToVM = (data: UserDetailsEntityApi): vm.UserDetailsEntity => ({
    id: data.id,
    name: data.username,
    photoUrl: data.image,
    email: data.email,
    phone: data.phone,
    address: data.address.address + ', ' + data.address.city
})

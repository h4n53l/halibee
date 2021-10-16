import { proxy } from "valtio"


export const state = proxy({
    loggedInUser: null
})


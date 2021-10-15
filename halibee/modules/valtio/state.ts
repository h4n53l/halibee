import { proxy } from "valtio"
import { auth } from "../firebase/initialiseFirebase"


export const state = proxy({
    loggedInUser: null
})


import type { NextFetchEvent, NextRequest } from 'next/server'
import { auth } from '../modules/firebase/initialiseFirebase'

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  return auth.currentUser
}
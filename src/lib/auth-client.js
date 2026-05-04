import { createAuthClient } from "better-auth/react";

const isClient = typeof window !== "undefined";

export const authClient = isClient
  ? createAuthClient()
  : null;

export const signIn = isClient ? authClient.signIn : async () => {};
export const signOut = isClient ? authClient.signOut : async () => {};
export const signUp = isClient ? authClient.signUp : async () => {};

// Safe wrapper for useSession to avoid hook invocation errors on server
export const useSession = isClient
  ? authClient.useSession
  : () => ({ data: null, isPending: true, error: null });

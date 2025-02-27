import { ObservablePersistLocalStorage } from "@legendapp/state/persist-plugins/local-storage";
import { configureSynced } from "@legendapp/state/sync";

export const makeLocalStoragePlugin = (name: string) =>
  configureSynced({
    persist: {
      name,
      plugin: ObservablePersistLocalStorage,
    },
  });

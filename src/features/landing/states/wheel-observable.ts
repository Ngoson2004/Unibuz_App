import { makeLocalStoragePlugin } from "@/shared/libs/legend/local-storage-plugin";
import { observable } from "@legendapp/state";

const wheelPlugin = makeLocalStoragePlugin("wheel");

export const wheel$ = observable(wheelPlugin({
  initial: {
    prize: "",
    hasSpinned: false,
  },
}));

import type { IStaticMethods } from "flyonui/flyonui";

declare global {
  interface Window {
    // Optional third-party libraries
    // _;
    // $: typeof import("jquery");
    // jQuery: typeof import("jquery");
    // DataTable;
    // Dropzone;
    // VanillaCalendarPro;

    // Preline UI
    HSStaticMethods: IStaticMethods;
  }
}

export {};

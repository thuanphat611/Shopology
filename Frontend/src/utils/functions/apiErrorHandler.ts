import axios from "axios";

import { showError } from "@/service";

export function apiErrorHandler(error: unknown) {
  if (axios.isAxiosError(error) && error.response) {
    const message = error.response.data.message;
    if (Array.isArray(message)) {
      message.forEach((msg: string) => showError(msg));
    } else if (typeof message === "string") {
      showError(message);
    } else {
      showError("An unexpected error occurred. Please try again.");
    }
  } else {
    showError("An unexpected error occurred. Please try again.");
  }
}

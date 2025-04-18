import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { sendMessage as sendMessageApi } from "../../../Back/services/apiContact";

export function useSendMessage() {
  const { isLoading, mutate: sendMessage } = useMutation({
    mutationFn: (newMessage) => sendMessageApi(newMessage),
    onSuccess: () => {
      toast.success("Message successfully sent!");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { isLoading, sendMessage };
}

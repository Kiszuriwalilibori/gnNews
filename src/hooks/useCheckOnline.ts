import useMessage from "./useMessage";
import isOffline from "../functions/isOffline";

export default function useCheckOnline() {
    const showMessage = useMessage();

    if (isOffline()) {
        showMessage.error("No internet connection");
        return false;
    } else {
        return true;
    }
}

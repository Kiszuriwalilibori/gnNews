import { useSnackbar } from "notistack";
import { useRef } from "react";

export const useCheckApiKey = () => {
    const { enqueueSnackbar } = useSnackbar();
    const isAPIKeyAvailable = useRef(false);

    if (!process.env.REACT_APP_API_KEY) {
        enqueueSnackbar("No API Key available. The app will not work at all", {
            variant: "error",
        });
    } else {
        isAPIKeyAvailable.current = true;
    }
    return isAPIKeyAvailable.current;
};

export default useCheckApiKey;

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Link from "@mui/material/Link";

import { useTranslation } from "react-i18next";
import { useCallback } from "react";
import { useSelector } from "react-redux";

import { useDispatchAction } from "../../../hooks/useDispatchAction";
import { getModal } from "../../../reduxware/reducers/modalSlice";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

export default function Popup() {
    const { hideModal } = useDispatchAction();
    const { isOpen, title, author, url, content } = useSelector(getModal);
    const { t } = useTranslation();
    const handleClose = useCallback(() => {
        hideModal();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <Modal
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {/* {title && (
                        <>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                {title}
                            </Typography>
                            <hr />
                        </>
                    )} */}
                    {content && (
                        <>
                            <Typography id="modal-modal-content" sx={{ mt: 2 }}>
                                {content}
                            </Typography>
                            <hr />
                        </>
                    )}
                    {author && (
                        <>
                            <Typography id="modal-modal-author" sx={{ mt: 2 }}>
                                {author}
                            </Typography>
                            <hr />
                        </>
                    )}

                    {url && (
                        <>
                            <Typography id="modal-modal-url" sx={{ mt: 2 }}>
                                <Link href={url} underline="always" color="#ED6C02">
                                    {t("modal.prompt")}
                                </Link>
                            </Typography>
                            <hr />
                        </>
                    )}
                </Box>
            </Modal>
        </div>
    );
}

import * as React from "react";
import Box from "@mui/material/Box";

import AlarmIcon from "@mui/icons-material/Info";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";

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
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <IconButton color="warning" onClick={handleOpen}>
                <AlarmIcon />
            </IconButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Wyzwania i osiągi
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        No cóż, nie da się ukryć, że te zadanie to mój pierwszy kontakt z biblioteką do
                        internacjonalizji i18next.Największym wyzwaniem było jej ogarnięcie w krotkim czasie.
                        Jednocześnie dało to najwięcej zadowolenia. Należy też wspomnieć że podsunięte źródło newsów ma
                        ograniczenia darmowego dostepu, co spowodowało wydłużenie pracy o 1 dzień.
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

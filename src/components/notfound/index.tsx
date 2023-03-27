import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    setTimeout(() => {
        navigate(-1);
    }, 4000);
    return (
        <div className="not-found">
            <h2 className="not-found__message">
                Kotku! Strony o adresie "{decodeURIComponent(window.location.href)}" po prostu nie ma &#128549;
            </h2>
        </div>
    );
};

export default NotFound;

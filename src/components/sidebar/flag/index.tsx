interface Props {
    country: string;
}

export default function Flag(props: Props) {
    const { country } = props;
    return (
        <div>
            <img
                className="country-image"
                alt={`No flag for ${country} `}
                src={`https://flagcdn.com/28x21/${country}.png`}
            />
        </div>
    );
}

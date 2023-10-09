
type Props ={
    text: string;
}

export default function ButtonPrimary({text}: Props) {

    return (
        <>
            <div className="fb-btn fb-btn-blue fb-click">
                {text}
            </div>
        </>
    );
}
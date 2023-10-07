import './stryles.css';

type Props ={
    text: string;
}

export default function ButtonPrimary({text}: Props) {

    return (
        <>
            <div className="btn btn-blue click">
                {text}
            </div>
        </>
    );
}
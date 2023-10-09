import './styles.css';


type Props = {
    text: string;
}
export default function ButtonInverse({ text }: Props) {

    return (

        <>
            <div className="fb-btn fb-btn-white">
                {text}
            </div>
        </>
    );
}
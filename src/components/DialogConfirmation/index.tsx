import ButtonInverse from "../ButtonInverse";
import ButtonPrimary from "../ButtonPrimary";

type Props = {
    id: number,
    message: string,
    onDialogAnswer: Function;
}

export default function DialogConfirmation({ id, message, onDialogAnswer }: Props) {
    return (

        <>
            <div onClick={() => onDialogAnswer(false, id)} className="fb-dialog-background">
                <div className="fb-dialog-box" onClick={(event) => event.stopPropagation()}>
                    <h2>{message}</h2>
                    <div className="fb-dialog-btn-container" >
                        <div onClick={() => onDialogAnswer(false, id)}>
                            <ButtonInverse text="Não" />
                        </div>
                        <div onClick={() => onDialogAnswer(true, id)}>
                            <ButtonPrimary text="Sim" />
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}
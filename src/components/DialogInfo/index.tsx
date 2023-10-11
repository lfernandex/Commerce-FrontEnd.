import ButtonPrimary from "../ButtonPrimary";

type Props = {
    message: string,
    onDialogClose: Function;
}

export default function DialogInfo({ message, onDialogClose }: Props) {
    return (

        <>
            <div onClick={() => onDialogClose()} className="fb-dialog-background">
                <div className="fb-dialog-box" onClick={(event) => event.stopPropagation()}>
                    <h2>{message}</h2>
                    <div className="fb-dialog-btn" onClick={() => onDialogClose()}>
                        <ButtonPrimary text="ok" />
                    </div>
                </div>
            </div>
        </>
    );
}
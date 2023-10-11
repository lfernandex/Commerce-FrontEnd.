export default function FormIput(props: any) {

    const { validation, ...inputProps } = props;

    return (

        <>
            <input {...inputProps} />
        </>

    );
}
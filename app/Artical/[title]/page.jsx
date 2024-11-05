

export default function ShowId( props) {
    console.log(props.params.title);
    return (
        <>
            <h1>this is id: {props.params.title}</h1> {/* عرض قيمة props هنا */}
        </>
    );
}
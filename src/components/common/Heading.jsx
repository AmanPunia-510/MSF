const Heading = ({
    className,
    textName,
    blackText,
    blackTextClass,
    orangeTextClass,
    orangeText,
    blackTextOne,
}) => {
    return (
        <h2
            className={` ${className}`}
        >
            {textName}
            <span className={`text-black ${blackTextClass}`}>{blackText}</span>
            <span className={`text-orange-20 font-rubik font-semibold ${orangeTextClass}`}>{orangeText}</span>
            <span className={`text-black ${blackTextClass}`}>{blackTextOne}</span>
        </h2>
    );
};
export default Heading;
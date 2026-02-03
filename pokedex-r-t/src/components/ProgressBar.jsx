
const ProgressBar = ({ progress, bgColor, pColor }) => {
    return (
        <div className={`col-span-3 h-4 w-full place-self-center rounded-full ${bgColor}`}>
            <div className={`h-4 rounded-full ${pColor}`} style={{ width: progress}}></div>
        </div>
    );
};

export default ProgressBar
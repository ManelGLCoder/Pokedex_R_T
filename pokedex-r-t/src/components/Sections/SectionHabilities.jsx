import "../../App.css"

const SectionHabilities = ({habilitiesData}) => {
    return (
        <section className="flex py-3 rounded-b-xl bg-secondary">
            {
            habilitiesData.map((h, i)=>{
                return (<span className="px-2 py-1 mx-2 rounded-xl bg-secondary-middle" key={i}>{h}</span>)
            })}
        </section>
    );
};

export default SectionHabilities;
import "../../App.css"
import weightIcon from '../../assets/description/weight.svg'
import heightIcon from '../../assets/description/height.svg'

const SectionDescription = ({species, description, weight, height}) => {
    return (
        <section>
            <span className="text-xl font-bold">Descripción</span>
            <span className="mx-1 text-gray-400">{species}</span>
            <p className="text-gray-400">
                {description}
            </p>
            <div className="flex justify-around px-5 py-3 sm:py-5 my-5 my-relative rounded-xl bg-violet-800 text-xl text-white">
                <img className="size-10 sm:size-13" src={weightIcon} alt="Weight Icon" />
                <span className="flex items-center">{`${weight}kg`}</span>
                <img className="size-10 sm:size-13" src={heightIcon} alt="Height Icon" />
                <span className="flex items-center">{`${height}m`}</span>
            </div>
        </section>
    );
};

export default SectionDescription;
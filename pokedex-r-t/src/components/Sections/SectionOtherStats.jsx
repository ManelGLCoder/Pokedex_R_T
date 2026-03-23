import "../../App.css"
import { TITLE_SUB_SECTION_TEXT } from "../../utilities/tailwind-utilities";

import Stat from "../elements/Stat";

const SectionOtherStats = ({stats}) => {
    return (
        <section className="py-2">
            <span className={`${TITLE_SUB_SECTION_TEXT}`}>Otras estadísticas</span>
            <div className="flex flex-col">
                <Stat name={"Felicidad"} val={stats.happiness} maxVal={stats.statMax}/>
                <Stat name={"Ratio captura"} val={stats.catchRatio} maxVal={stats.statMax}/>
            </div>
        </section>
    );
};

export default SectionOtherStats;
import "../../App.css"
import { TITLE_SUB_SECTION_TEXT } from "../../utilities/tailwind-utilities";

import Stat from "../elements/Stat";

const SectionBasicStats = ({stats}) => {
    return (
        <section className="py-2">
            <span className={`${TITLE_SUB_SECTION_TEXT}`}>Estadísticas Base</span>
            <div className="flex flex-col">
                <Stat name={"PS"} val={stats.hp} maxVal={stats.statMax}/>
                <Stat name={"Ataque"} val={stats.attack} maxVal={stats.statMax}/>
                <Stat name={"Defensa"} val={stats.defense} maxVal={stats.statMax}/>
                <Stat name={"Velocidad"} val={stats.speed} maxVal={stats.statMax}/>
                <Stat name={"At. Especial"} val={stats.specialAttack} maxVal={stats.statMax}/>
                <Stat name={"Def. Especial"} val={stats.specialDefense} maxVal={stats.statMax}/>
                <Stat name={"Suma Total"} val={stats.totalSum} maxVal={stats.totalSumMax}/>
            </div>
        </section>
    );
};

export default SectionBasicStats;
import "../../App.css"
import PokemonVariant from "../pokemon/PokemonVariant";
import ComingSoon from "../ComingSoon";

const SectionVariant = ({variantData}) => {
    return (
        <section>
            <div className="flex flex-row flex-wrap justify-around gap-1 sm:gap-2 px-1 sm:px-5 py-2 sm:py-4 rounded-b-xl bg-violet-800">
                <ComingSoon/>
                {/* {variantData.map((variant, i)=>{
                return (
                    <PokemonVariant key={i} pokeEvData={variant} />
                )
            })} */}
            </div>
        </section>
    );
};

export default SectionVariant;
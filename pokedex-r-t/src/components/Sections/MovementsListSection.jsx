import "../../App.css"
import Move from "../elements/Move";
import ButtonShowMoreMoves from "../buttons/ButtonShowMoreMoves";

const MovementsListSection = ({moves}) => {
    return (
        <section className="relative overflow-y-auto gap-1.5 [&::-webkit-scrollbar]:w-0 flex flex-col">
            {
                moves.map((move,i)=>{
                    return (<Move key={i} moveData={move} />)
                })
            }
            <ButtonShowMoreMoves/>
        </section>
    );
};
export default MovementsListSection;
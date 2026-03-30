import "../../App.css"
import { TITLE_SUB_SECTION_TEXT } from "../../utilities/tailwind-utilities";

const SectionDescription = ({species, description, weight, height}) => {
    return (
        <section>
            <span className={`${TITLE_SUB_SECTION_TEXT}`}>Descripción</span>
            <p className="font-name text-xl text-principal-lite">{species}</p>
            <p className="text-white">
                {description}
            </p>
            <div className="flex justify-around px-5 py-3 sm:py-5 my-5 my-relative rounded-xl bg-secondary text-xl text-white">
                <svg className="size-10 sm:size-13 fill-white" alt="Weight Icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M12 3a4 4 0 0 1 4 4c0 .73-.19 1.41-.54 2H18c.95 0 1.75.67 1.95 1.56C21.96 18.57 22 18.78 22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2c0-.22.04-.43 2.05-8.44C4.25 9.67 5.05 9 6 9h2.54A3.9 3.9 0 0 1 8 7a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"/></svg>
                <span className="flex items-center">{`${weight}kg`}</span>
                <svg className="size-10 sm:size-13 fill-white" alt="Height Icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M11 17.175V6.825l-.9.9Q9.825 8 9.413 8T8.7 7.7q-.275-.275-.275-.7t.275-.7l2.6-2.6q.15-.15.325-.213T12 3.426t.375.063t.325.212l2.6 2.6q.275.275.275.688T15.3 7.7q-.3.3-.712.3t-.713-.3L13 6.825v10.35l.9-.9q.275-.275.688-.275t.712.3q.275.275.275.7t-.275.7l-2.6 2.6q-.15.15-.325.213t-.375.062t-.375-.062t-.325-.213l-2.6-2.6q-.275-.275-.287-.687T8.7 16.3q.275-.275.7-.275t.7.275z"/></svg>
                <span className="flex items-center">{`${height}m`}</span>
            </div>
        </section>
    );
};

export default SectionDescription;
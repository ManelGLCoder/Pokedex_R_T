import "../App.css"

const MoveCategory = ({moveCategory}) => {
    return (
    <div className={`flex justify-center max-w-fit px-2 py-1.5 gap-1 rounded-xl text-xs text-white`}>
        <img className="size-5 sm:size-10" src={srcCategory(moveCategory)} alt="Fire Icon"/>
    </div>
    );
};

const srcCategory = (moveCategory) => `src/assets/categories/${moveCategory}.svg`

export default MoveCategory;
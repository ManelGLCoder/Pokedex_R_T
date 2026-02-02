import "../App.css"

const MoveCategory = ({moveCategory}) => {
    return (
    <div className={`flex justify-center max-w-fit px-2 py-1.5 gap-1 rounded-xl text-xs ${colorCategory[moveCategory]} text-white`}>
        <img className="size-4" src={srcCategory(moveCategory)} alt="Fire Icon"/>
    </div>
    );
};

const srcCategory = (moveCategory) => `src/assets/categories/${moveCategory}.svg`

const colorCategory = {
    "physical": "bg-orange-900",
    "special": "bg-blue-800",
    "status": "bg-gray-500"
}
export default MoveCategory;
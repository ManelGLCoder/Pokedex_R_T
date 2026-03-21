import "../../App.css"
import physicalIcon from '../../assets/categories/physical.png'
import specialIcon from '../../assets/categories/special.png'
import statusIcon from '../../assets/categories/status.png'

const MoveCategory = ({moveCategory}) => {
    return (
    <div className={`flex justify-center gap-1 px-2 py-1.5 max-w-fit rounded-xl text-xs text-white`}>
        <img className="size-5 sm:size-7" src={srcCategory[moveCategory]} alt={`${moveCategory} Icon`}/>
    </div>
    );
};

const srcCategory ={
    physical : physicalIcon,
    special: specialIcon,
    status: statusIcon
}

export default MoveCategory;
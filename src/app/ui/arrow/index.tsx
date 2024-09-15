import ArrowIcon from '../assets/arrow';

interface IArrowComponent {
    type: number
}

const ArrowComponent = ({ type }: IArrowComponent) => {
    switch (type) {
        case 0:
            return <div className='rotate-180 w-fit h-fit'>
                <ArrowIcon fillColor="#28A879" /> 
            </div> //Исходящий
        case 1:
            return <ArrowIcon fillColor="#002CFB" /> //Входящий
        default:
            return <ArrowIcon/>
    }
};

export default ArrowComponent;
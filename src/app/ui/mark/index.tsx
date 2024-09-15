interface IMarkComponent {
    type: number
}

const MarkComponent = ({ type }: IMarkComponent) => {
    switch (type) {
        case 0:
            return <div className='w-fit h-fit px-2 py-[6px] text-sm leading-[14px] rounded bg-[#DBF8EF] border border-[#28A879] text-[#00A775]'>
                Отлично
            </div>
        case 1:
            return <div className='w-fit h-fit px-2 py-[6px] text-sm leading-[14px] rounded bg-[#D8E4FB] border border-[#ADBFDF] text-[#122945]'>
                Хорошо
            </div>
        case 2:
            return <div className='w-fit h-fit px-2 py-[6px] text-sm leading-[14px] rounded bg-[#FEE9EF] border border-[#EA1A4F] text-[#EA1A4F]'>
                Плохо
            </div>
        case 3:
            return null
        default:
            return <div className="text-sm text-[#EA1A4F]">Скрипт не использован</div>
    }
};

export default MarkComponent;
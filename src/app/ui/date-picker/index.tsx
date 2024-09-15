import { ReactNode, useRef, useState, } from 'react';
import ShortArrowIcon from '../assets/short-arrow';
import { useClickOutside } from 'app/utils/useClickOustside';
import { DatePickerIcon } from '../assets/date-picker-icon';

interface IDatePickerProps {
    currentValue: ReactNode
    content: ReactNode
    isRight?: boolean
    className?: string
}

export const DatePicker = ({ currentValue, content, isRight, className }: IDatePickerProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false)
    useClickOutside(ref, () => setIsOpen(false))
    return (
        <div ref={ref} className="relative flex flex-col justify-start w-fit">
            <div

                className='cursor-pointer flex flex-row gap-3 items-center w-max'
            >
                <div className={`rotate-90`}>
                    <ShortArrowIcon />
                </div>
                <div className='flex flex-row gap-2' onMouseEnter={() => setIsOpen(true)}>
                    <DatePickerIcon />
                    {currentValue}
                </div>
                <div className={`-rotate-90`}>
                    <ShortArrowIcon />
                </div>
            </div>
            {isOpen && <div className={`absolute ${className} ${isRight ? 'right-0' : ''}`}
                style={{
                    boxShadow: '0px 4px 20px 0px #00000014'
                }}
                onClick={() => setIsOpen(false)}
            >
                {content}
            </div>}
        </div>
    );
};
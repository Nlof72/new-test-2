import { ReactNode, useRef, useState, } from 'react';
import ShortArrowIcon from '../assets/short-arrow';
import { useClickOutside } from 'app/utils/useClickOustside';

interface ISelectProps {
    currentValue: ReactNode
    content: ReactNode
    isRight?: boolean
    className?: string
}

export const Select = ({ currentValue, content, isRight, className }: ISelectProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false)
    useClickOutside(ref, () => setIsOpen(false))
    return (
        <div ref={ref} className="relative flex flex-col justify-start w-fit">
            <div
                onMouseEnter={() => setIsOpen(true)}
                className='cursor-pointer flex flex-row gap-1 items-center w-max'
            >
                {currentValue}
                <div className={`${isOpen ? 'rotate-180' : ''}`}>
                    <ShortArrowIcon fillColor={isOpen ? '#002CFB' : undefined} />
                </div>
            </div>
            {isOpen && <div className={`absolute ${className} ${isRight?'right-0':''}`}
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
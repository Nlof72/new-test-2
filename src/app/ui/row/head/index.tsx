import React, { PropsWithChildren } from 'react'

interface IHeadRowItem extends PropsWithChildren{
    className?: string
    onClick?: () => void
}

export default function HeadRowItem({ children, className, onClick }: IHeadRowItem) {
    return (
        <div onClick={onClick} className={`pb-5 text-left border-b text-text-secondary font-normal text-sm ${className}`}>{children}</div>
    )
}

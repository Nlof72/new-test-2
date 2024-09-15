import React, { PropsWithChildren } from 'react'

export default function HeadTableCell({ children }: PropsWithChildren) {
    return (
        <th className="text-left border-b text-text-secondary font-normal text-sm">{children}</th>
    )
}

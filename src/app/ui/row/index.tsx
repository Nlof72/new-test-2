import { IGetListCall } from "data/repositories/skilla/interface";
import { useState, useMemo } from "react";
import ArrowComponent from "../arrow";
import MarkComponent from "../mark";
import { format } from "date-fns";
import './index.css'


interface IRowTableCell {
    item: IGetListCall
    isLast?: boolean
    getRecordData: (record: string, partnership_id: string) => Promise<string>
}

const limit = 4

export const RowGrid = ({ item, isLast, getRecordData }: IRowTableCell) => {
    const [currentRecord, setCurrentRecord] = useState<string | undefined>(undefined)
    const [isShowAudioPlayer, setIsShowAudioPlayer] = useState(false)

    const markNumber = useMemo(() => Math.floor(Math.random() * limit), [])

    const handleMouseEnter = () => {
        if (currentRecord === undefined) {
            if (item.record !== '' && item.partnership_id !== '') {
                getRecordData(item.record, item.partnership_id).then(setCurrentRecord)
                setIsShowAudioPlayer(true)
            }
        } else {
            setIsShowAudioPlayer(true)
        }

    }

    const handleMouseLeave = () => {
        setIsShowAudioPlayer(false)
    }

    // const isShowScript = useMemo(() => item.errors.some(item => item === 'Скрипт не использован'), [item])

    // console.log(item.errors.some(item => item === 'Скрипт не использован'));


    return (
        <>
            <div className="hover:bg-[#D4DFF32B]  cursor-pointer pl-10 ml-[-40px] mr-[-40px]">
                <div
                    className={`grid  h-[65px] items-center ${isLast? '': 'border-b'}`}
                    style={{
                        gridTemplateColumns: '1fr 1fr 2fr 2fr 2fr 3fr 5fr'
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div><ArrowComponent type={item.in_out} /></div>
                    <div>{format(item.date, 'HH:mm')}</div>
                    <div><img src={item.person_avatar} alt={'profile'} /></div>
                    <div>{item.from_number}</div>
                    <div>{item.source}</div>
                    <div><MarkComponent type={item.errors.some(item => item === 'Скрипт не использован') ? -1 : markNumber} /></div>
                    <div className="flex justify-end items-center pr-10 ">
                        {
                            isShowAudioPlayer ? <audio controls src={currentRecord} /> : <div>
                                {item.time}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};
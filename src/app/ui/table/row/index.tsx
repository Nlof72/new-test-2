import ArrowComponent from "app/ui/arrow";
import MarkComponent from "app/ui/mark";
import { IGetListCall } from "data/repositories/skilla/interface";
import { format } from "date-fns";
import { useMemo, useState } from "react";

interface IRowTableCell {
    item: IGetListCall
    getRecordData: (record: string, partnership_id: string) => Promise<string>
}

const limit = 4

const RowTable = ({ item, getRecordData }: IRowTableCell) => {
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
            <tr
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="hover:bg-[#D4DFF32B] cursor-pointer h-[65px] pl-[-20px]"
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr'
                }}
            >
                <td><ArrowComponent type={item.in_out} /></td>
                <td>{format(item.date, 'HH:mm')}</td>
                <td><img src={item.person_avatar} alt={'profile'} /></td>
                <td>{item.from_number}</td>
                <td>{item.source}</td>
                <td><MarkComponent type={item.errors.some(item => item === 'Скрипт не использован') ? -1 : markNumber} /></td>
                <td className="flex justify-end w-[360px] items-center">
                    {
                        isShowAudioPlayer ? <audio controls src={currentRecord} /> : <div>
                            {item.time}
                        </div>
                    }
                </td>
            </tr>
        </>
    );
};

export default RowTable;
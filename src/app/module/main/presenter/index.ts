import { IGetListCall, IGetRecordList } from "data/repositories/skilla/interface"
import { format, subDays } from "date-fns"
import { useGetCallListData } from "domain/skilla/use-case/get-call-list"
import { useGetRecordData } from "domain/skilla/use-case/get-record"
import { useState } from "react"


interface IReturnMainPagePresenter {
    callArray: IGetListCall[]
    filter: IGetRecordList,
    setFilter: React.Dispatch<React.SetStateAction<IGetRecordList>>
    getRecordData: (record: string, partnership_id: string) => Promise<string>
}




export const useMainPagePresenter = (): IReturnMainPagePresenter => {

    const [filter, setFilter] = useState<IGetRecordList>({
        date_end: format(new Date(), 'yyyy-MM-dd'),
        date_start: format(subDays(new Date(), 3), 'yyyy-MM-dd'),
        limit: 1000
    })

    const { data } = useGetCallListData(filter)
    const { mutateAsync } = useGetRecordData()

    const getRecordData = async (record: string, partnership_id: string) => {
        const res = await mutateAsync({ record, partnership_id })      
      
        return window.URL.createObjectURL(res as Blob);
    }




    return {
        callArray: data?.results ?? [],
        filter,
        setFilter,
        getRecordData,
    }
}
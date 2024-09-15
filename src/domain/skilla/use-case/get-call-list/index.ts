import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { skillaMangoRepositories } from "../../../../data/repositories/skilla"
import { QueryKeys } from "../../../../data/common/enums"
import { IGetRecordList, IResponseGetListCall } from "../../../../data/repositories/skilla/interface"


export const useGetCallListData = (params:IGetRecordList): UseQueryResult<IResponseGetListCall, Error> => {

    const execute = async (): Promise<IResponseGetListCall> => {
        return skillaMangoRepositories.getCallList(params)
    }

    return useQuery({
        queryFn: execute, queryKey: [QueryKeys.getCallList, params],
    })
}
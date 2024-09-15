import { useMutation, UseMutationResult } from "@tanstack/react-query"
import { skillaMangoRepositories } from "data/repositories/skilla"
import { IGetRecordParams } from "data/repositories/skilla/interface"

export const useGetRecordData = (): UseMutationResult<unknown, Error, IGetRecordParams> => {

    const execute = async (data:IGetRecordParams): Promise<unknown> => {
        return skillaMangoRepositories.getRecord(data)
    }

    return useMutation({
        mutationFn: execute
    })
}
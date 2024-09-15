import { axiosConfig } from "../../../domain/base";
import { IGetRecordList, IGetRecordParams, IResponseGetListCall } from "./interface";



export const skillaMangoRepositories = {
    async getCallList(params:IGetRecordList) {
        return await (axiosConfig.post<IResponseGetListCall>(
            `mango/getList`, undefined, {
                params
            }
        ))
            .then(res => res.data)
    },
    async getRecord({ record, partnership_id }: IGetRecordParams) {
        return await (axiosConfig.post<unknown>(
            `mango/getRecord`,
            undefined,
            {
                headers: {
                    'Content-type': 'audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3',
                    'Content-Transfer-Encoding': 'binary',
                    'Content-Disposition': 'filename="record.mp3"'
                },
                params: {
                    record,
                    partnership_id
                },
                responseType: 'blob'
            }
        ))
            .then(res => {
                console.log(res);
                return res.data
            })
    },

}
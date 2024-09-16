interface IPartnerData {
    id: string,
    name: string,
    phone: string
}

interface ICallResult {
    type: string
    title: string
    tooltip: string
}

interface IGetListCall {
    abuse: Array<unknown>
    candidate_id: number
    candidate_link: string
    candidate_name: string
    candidate_vacancy_name: string
    contact_company: string
    contact_name: string
    date: string
    date_notime: string
    disconnect_reason: string
    errors: string[]
    from_extension: string
    from_number: string
    from_site: number
    id: number
    in_out: number
    is_skilla: number
    line_name: string
    line_number: string
    partner_data: IPartnerData
    partnership_id: string
    person_avatar: string
    person_id: number
    person_name: string
    person_surname: string
    record: string
    results: ICallResult[]
    source: string
    stages: Array<unknown>
    status: string
    time: number
    to_extension: string
    to_number: string
}

interface IResponseGetListCall {
    results: IGetListCall[]
    total_rows: string
}

interface IGetRecordParams {
    record?: string
    partnership_id?: string
}

interface IGetRecordList {
    date_start?: string
    date_end?: string
    in_out?: number
    sort_by?: 'date' | 'duration'
    order?: 'ASC' | 'DESC'
    limit?: number
}

export type {
    IGetRecordList,
    IGetRecordParams,
    IPartnerData,
    ICallResult,
    IGetListCall,
    IResponseGetListCall,
}
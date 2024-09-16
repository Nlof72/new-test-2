import CloseIcon from "app/ui/assets/close-icon";
import { useMainPagePresenter } from "../presenter";
import { RowGrid } from "app/ui/row";
import HeadRowItem from "app/ui/row/head";
import { Select } from "app/ui/select";
import ShortArrowIcon from "app/ui/assets/short-arrow";
import { useState } from "react";
import { format, isSameDay, subDays } from "date-fns";
import { DatePicker } from "app/ui/date-picker";





const MainPage = () => {
    const { callArray, filter, setFilter, getRecordData } = useMainPagePresenter();
    const [currentFilterDate, setCurrentFilterDate] = useState('3 дня');

    const todayCalls = callArray.filter(item => isSameDay(item.date, new Date()));
    const yesterdayCalls = callArray.filter(item => isSameDay(item.date, subDays(new Date(), 1)));
    const oldCalls = callArray.slice(callArray.findIndex(item => !isSameDay(item.date, subDays(new Date(), 1))));


    return (
        <div className="bg-bg pt-20 w-full h-full min-h-screen flex flex-col flex-wrap items-center">
            <div className="max-w-[1440px] w-full flex flex-col gap-4">
                <div className="flex flex-row justify-between">
                    <div className="w-full flex flex-row gap-4">
                        <Select
                            className="bg-white z-20 top-8 rounded-lg w-[133px]"
                            currentValue={<p className={`${filter.in_out !== undefined ? 'text-[#1F46FB]' : ''}`}>{
                                filter.in_out === 0 ? 'Исходящие' : filter.in_out === 1 ? 'Входящие' : 'Все типы'
                            }</p>}
                            content={<>
                                <div
                                    className={`cursor-pointer px-3 py-[7px]  hover:bg-[#DEE4FF] ${filter.in_out === undefined ? 'text-[#015EF5]' : 'text-[#2B2D33]'}`}
                                    onClick={() => setFilter(prev => ({ ...prev, in_out: undefined }))}
                                >
                                    Все типы
                                </div>
                                <div
                                    className={`cursor-pointer px-3 py-[7px]  hover:bg-[#DEE4FF] ${filter.in_out === 1 ? 'text-[#015EF5]' : 'text-[#2B2D33]'}`}
                                    onClick={() => setFilter(prev => ({ ...prev, in_out: 1 }))}
                                >
                                    Входящие
                                </div>
                                <div
                                    className={`cursor-pointer px-3 py-[7px]  hover:bg-[#DEE4FF] ${filter.in_out === 0 ? 'text-[#015EF5]' : 'text-[#2B2D33]'}`}
                                    onClick={() => setFilter(prev => ({ ...prev, in_out: 0 }))}
                                >
                                    Исходящие
                                </div>
                            </>}
                        />
                        {
                            filter.in_out !== undefined && <div
                                className="text-sm leading-6 flex flex-row gap-1 items-baseline cursor-pointer"
                                onClick={() => setFilter(prev => ({ ...prev, in_out: undefined }))}
                            >
                                <p>Сбросить фильтры</p>
                                <CloseIcon />
                            </div>
                        }
                    </div>
                    <div>
                        <DatePicker
                            currentValue={<p className="text-[#005FF8]">{currentFilterDate}</p>}
                            isRight
                            className="bg-white z-20 top-8 rounded-lg"
                            content={<>
                                <div
                                    className={`cursor-pointer px-3 py-[7px] hover:bg-[#DEE4FF] ${currentFilterDate === '3 дня' ? 'text-[#015EF5]' : 'text-[#2B2D33]'}`}
                                    onClick={() => {
                                        setFilter({
                                            ...filter,
                                            date_end: format(new Date(), 'yyyy-MM-dd'),
                                            date_start: format(subDays(new Date(), 3), 'yyyy-MM-dd'),
                                        })
                                        setCurrentFilterDate('3 дня')
                                    }}
                                >
                                    3 дня
                                </div>
                                <div
                                    className={`cursor-pointer px-3 py-[7px]  hover:bg-[#DEE4FF] ${currentFilterDate === 'Неделя' ? 'text-[#015EF5]' : 'text-[#2B2D33]'}`}
                                    onClick={() => {
                                        setFilter({
                                            ...filter,
                                            date_end: format(new Date(), 'yyyy-MM-dd'),
                                            date_start: format(subDays(new Date(), 7), 'yyyy-MM-dd'),
                                        })
                                        setCurrentFilterDate('Неделя')
                                    }}
                                >
                                    Неделя
                                </div>
                                <div
                                    className={`cursor-pointer px-3 py-[7px]  hover:bg-[#DEE4FF] ${currentFilterDate === 'Месяц' ? 'text-[#015EF5]' : 'text-[#2B2D33]'}`}
                                    onClick={() => {
                                        setFilter({
                                            ...filter,
                                            date_end: format(new Date(), 'yyyy-MM-dd'),
                                            date_start: format(subDays(new Date(), 30), 'yyyy-MM-dd'),
                                        })
                                        setCurrentFilterDate('Месяц')
                                    }}
                                >
                                    Месяц
                                </div>
                                <div
                                    className={`cursor-pointer px-3 py-[7px]  hover:bg-[#DEE4FF] ${currentFilterDate === 'Год' ? 'text-[#015EF5]' : 'text-[#2B2D33]'}`}
                                    onClick={() => {
                                        setFilter({
                                            ...filter,
                                            date_end: format(new Date(), 'yyyy-MM-dd'),
                                            date_start: format(subDays(new Date(), 365), 'yyyy-MM-dd'),
                                        })
                                        setCurrentFilterDate('Год')
                                    }}
                                >
                                    Год
                                </div>
                                <div
                                    className="cursor-pointer px-3 py-[7px]  hover:bg-[#DEE4FF]"
                                >
                                    Указать даты
                                    <div
                                        className="flex flex-row"
                                    >
                                        <input
                                            type="date"
                                            value={filter.date_start}
                                            onClick={e => e.stopPropagation()}
                                            onChange={e => {
                                                setFilter(prev => ({ ...prev, date_start: e.target.value }))
                                                setCurrentFilterDate(`${e.target.value} - ${filter.date_end}`)
                                            }
                                            }
                                        />
                                        -
                                        <input
                                            type="date"
                                            value={filter.date_end}
                                            onClick={e => e.stopPropagation()}
                                            onChange={e => {
                                                setFilter(prev => ({ ...prev, date_end: e.target.value }))
                                                setCurrentFilterDate(`${filter.date_start} - ${e.target.value}`)
                                            }
                                            }
                                        />
                                    </div>
                                </div>
                            </>} />
                    </div>
                </div>
                <div
                    className="bg-white pl-10 pt-6"
                    style={{ boxShadow: '0px 4px 5px 0px #E9EDF3' }}
                >
                    <div className="grid pl-10 ml-[-40px]"
                        style={{
                            gridTemplateColumns: '1fr 1fr 2fr 2fr 2fr 3fr 5fr'
                        }}
                    >
                        <HeadRowItem>Тип</HeadRowItem>
                        <HeadRowItem
                            className="flex flex-row gap-1"
                            onClick={() => setFilter(prev => ({ ...prev, sort_by: 'date', order: prev.order === 'ASC' ? 'DESC' : 'ASC' }))}
                        >
                            <p>Время</p>
                            <div className={`${filter.sort_by === 'date' && filter.order === 'ASC' ? 'rotate-180' : ''}`}>
                                <ShortArrowIcon />
                            </div>
                        </HeadRowItem>
                        <HeadRowItem>Сотрудник</HeadRowItem>
                        <HeadRowItem>Звонок</HeadRowItem>
                        <HeadRowItem>Источник</HeadRowItem>
                        <HeadRowItem>Оценка</HeadRowItem>
                        <HeadRowItem
                            className="flex flex-row justify-end gap-1 pr-5"
                            onClick={() => setFilter(prev => ({ ...prev, sort_by: 'duration', order: prev.order === 'ASC' ? 'DESC' : 'ASC' }))}>
                            <p className="text-end">Длительность</p>
                            <div className={`${filter.sort_by === 'duration' && filter.order === 'ASC' ? 'rotate-180' : ''}`}>
                                <ShortArrowIcon />
                            </div>
                        </HeadRowItem>
                    </div>
                    <div className="pr-10 flex flex-col gap-9">
                        {
                            todayCalls.length > 0 && <div>
                                {
                                    todayCalls.map((item, index) => (
                                        <RowGrid
                                            key={item.id}
                                            item={item}
                                            getRecordData={getRecordData}
                                            isLast={todayCalls.length === index + 1}
                                        />
                                    ))
                                }
                            </div>
                        }
                        {
                            yesterdayCalls.length > 0 && <div>
                                <div className="flex flex-row items-start w-fit pt-1">
                                    <p>Вчера</p>
                                    <p className="text-xs leading-3 text-[#899CB1] top-0 right-0">{yesterdayCalls.length}</p>
                                </div>
                                {
                                    yesterdayCalls.map((item, index) => (
                                        <RowGrid
                                            key={item.id}
                                            item={item}
                                            getRecordData={getRecordData}
                                            isLast={yesterdayCalls.length === index + 1}
                                        />
                                    ))
                                }
                            </div>
                        }
                        {
                            oldCalls.length > 0 && <div>
                                <div className="flex flex-row items-start w-fit pt-1">
                                    <p>Другие дни</p>
                                    <p className="text-xs leading-3 text-[#899CB1] top-0 right-0">{oldCalls.length}</p>
                                </div>
                                {
                                    oldCalls.map((item, index) => (
                                        <RowGrid
                                            key={item.id}
                                            item={item}
                                            getRecordData={getRecordData}
                                            isLast={oldCalls.length === index + 1}
                                        />
                                    ))
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
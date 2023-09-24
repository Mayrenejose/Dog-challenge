export interface IData {
    data: IContentData | null;
}

interface IContentData {
    message: object;
    status: string;
}

export interface IFilterByRace extends IData {
    selectOption?: string;
    selectRace?: boolean;
    setSelectOption: (selectOption: string) => void;
    setSelectRace: (selectRace: boolean) => void;
    setSelectSubRace: (selectSubRace: boolean) => void;
}

export interface IFilterBySubRace extends IData {
    selectOption?: string;
    subRaceValue?: string;
    setSubRaceValue: (subRaceValue: string) => void;
}

export interface ISelector {
    children?: React. ReactNode;
    title?: string;
    value?: string;
    handleChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined;
}

export type IHeader = Pick<ISelector, 'title'>

export interface IFilterBox extends IFilterByRace {
    selectSubRace?: boolean;
    subRaceValue?: string;
    setSubRaceValue: (subRaceValue: string) => void;
}

export interface IListImage {
    selectSubRace?: boolean;
    selectRace?: boolean;
    subRaceValue?: string;
    selectOption?: string;
}

export type IShowImgs = Pick<IListImage, 'selectOption' | 'subRaceValue'>
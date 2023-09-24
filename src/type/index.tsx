export interface IData {
    data: IContentData | null;
}

interface IContentData {
    message: object;
    status: string;
}

export interface IFilterByRace extends IData {
    selectOption?: string;
    setSelectOption: (selectOption: string) => void;
    setSelectSubRace: (selectSubRace: boolean) => void;
}

export interface IFilterBySubRace extends IData {
    selectOption?: string;
}

export interface ISelector {
    children?: React. ReactNode;
    title?: string;
    value?: string;
    handleChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined;
}
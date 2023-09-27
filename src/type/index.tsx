export interface IData {
    data: IContentData | null;
}

export interface IContentData {
    message: object;
    status: string;
}

export interface IFilterByRace extends IData {
    selectOption?: string;
    selections?: string[];
    setSelections: (selections: string[] | undefined) => void;
    setSelectOption: (selectOption: string) => void;
    setSelectSubRace: (selectSubRace: boolean) => void;
}

export interface IFilterBySubRace extends IData {
    arraySubRace?: string[];
    selectOption?: string;
    subRaceValue?: string;
    setArraySubRace: (selections: string[] | undefined) => void;
    setSubRaceValue: (subRaceValue: string) => void;
}

export interface ISelector {
    children?: React. ReactNode;
    title?: string;
    value?: string;
    handleChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined;
}

export interface IFilterBox extends IFilterByRace {
    arraySubRace?: string[];
    selectSubRace?: boolean;
    subRaceValue?: string;
    setArraySubRace: (selections: string[] | undefined) => void;
    setSubRaceValue: (subRaceValue: string) => void;
}

export interface IListImage {
    arraySubRace?: string[];
    selections?: string[];
    selectOption?: string;
}

export interface ISelectionLabel {
    selectOption?: string;
    handleClick?:  () => void;
}

export interface IOptionsBox {
    armedArray?: string[];
    setSelections: (selections: string[] | undefined) => void; 
}

export interface IShowImgs {
    isSubRace?: boolean;
    option?: string;
    selectOption?: string;
}

export interface IAllImgs {
    dataImgs: string[] | undefined;
    isSubRace?: boolean;
    selectOption?: string;
}
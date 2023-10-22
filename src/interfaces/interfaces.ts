export type TCountSliceState = {
    minValue: number;
    maxValue: number;
    count: number;
    error: boolean;
    editMode: boolean;
};

export type TSetMinValue = {
    minValue: number;
}

export type TSetMaxValue = {
  maxValue: number;
}

export type TSetCount = {
  count: number;
}

export type TSetEditMode = {
  editMode: boolean;
}

export type TSetError = {
  error: boolean;
}

export type TSetCounter = {
  minValue: number;
  maxValue: number;
  count: number;
  error: boolean;
  editMode: boolean;
}

export type TGetCounter = {
  minValue: number;
  maxValue: number;
  count: number;
  error: boolean;
  editMode: boolean;
}


export type TResponseSetCounter = {
  minValue: number;
  maxValue: number;
  error: boolean;
  editMode: boolean;
}

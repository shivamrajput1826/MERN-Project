export interface IGlobalDataState {}

export interface IGlobalDataActions {}

export interface IGlobalDataContext {
  state: IGlobalDataState;
  dispatch: React.Dispatch<IGlobalDataActions>;
}

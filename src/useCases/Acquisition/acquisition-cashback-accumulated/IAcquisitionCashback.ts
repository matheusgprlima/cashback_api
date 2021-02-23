export interface ICashbackExternal{
credit: number;
}
export interface IAcquisitionCashback {
    execute(cpf:string): Promise<ICashbackExternal>
}

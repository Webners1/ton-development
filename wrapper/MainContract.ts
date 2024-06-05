import { Address, Cell,Contract } from "ton-core";

export class MainContract implements Contract{
    constructor(public address: Address, readonly init?:{ cell: Cell;dat}) {

    }
}
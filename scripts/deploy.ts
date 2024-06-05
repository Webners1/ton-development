import { StateInit, beginCell,Cell, contractAddress, storeStateInit } from "ton-core";
async function deployScript(){
const codeCell = Cell.fromBoc(Buffer.from(hex,"hex"))[0];
const dataCell = new Cell();
    const stateInitBuilder = beginCell();
    const stateInit: StateInit = {
        code:codeCell,
        data:dataCell,
    };
    storeStateInit(stateInit)(stateInitBuilder);
    const stateInitCell = stateInitBuilder.endCell();

    const addresss = contractAddress(0,{
        code:codeCell,
        data:dataCell,
    });
    

}
deployScript()
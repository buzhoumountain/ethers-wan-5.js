import { BigNumber, BigNumberish } from "@wansproject/bignumber";
export declare function commify(value: string | number): string;
export declare function formatUnits(value: BigNumberish, unitName?: string | BigNumberish): string;
export declare function parseUnits(value: string, unitName?: BigNumberish): BigNumber;
export declare function formatEther(wei: BigNumberish): string;
export declare function parseEther(ether: string): BigNumber;

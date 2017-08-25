import { IRequestInfo, ITargetInfo } from "../definitions";
/*********************************************************************************************************************************/
/*********************************************************************************************************************************/
export declare class TargetInfo {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    constructor(targetInfo: ITargetInfo);
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    readonly bufferFl: boolean;
    readonly callback: (...args) => void;
    requestData: any;
    readonly requestDigest: string;
    readonly requestInfo: IRequestInfo;
    requestHeaders: string[];
    requestMethod: string;
    requestUrl: string;
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    private targetInfo;
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    private getDomainUrl();
    private static getQueryStringValue(key);
    private setRequestUrl();
}

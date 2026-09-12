import { RenderPageGetEntity } from './entity/RenderPageGetEntity';
import { RenderPagePostEntity } from './entity/RenderPagePostEntity';
export type * from './PhantomjscloudTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { PhantomjscloudEntityBase } from './PhantomjscloudEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class PhantomjscloudSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    RenderPageGet(entopts?: Record<string, any>): RenderPageGetEntity;
    RenderPagePost(entopts?: Record<string, any>): RenderPagePostEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): PhantomjscloudSDK;
    tester(testopts?: any, sdkopts?: any): PhantomjscloudSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof PhantomjscloudSDK;
export { stdutil, config, BaseFeature, PhantomjscloudEntityBase, PhantomjscloudSDK, SDK, };

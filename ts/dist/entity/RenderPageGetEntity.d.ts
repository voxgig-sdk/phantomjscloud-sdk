import { PhantomjscloudEntityBase } from '../PhantomjscloudEntityBase';
import type { PhantomjscloudSDK } from '../PhantomjscloudSDK';
import type { Control } from '../types';
import type { RenderPageGet, RenderPageGetLoadMatch } from '../PhantomjscloudTypes';
declare class RenderPageGetEntity extends PhantomjscloudEntityBase<RenderPageGet> {
    constructor(client: PhantomjscloudSDK, entopts: any);
    make(this: RenderPageGetEntity): RenderPageGetEntity;
    load(this: any, reqmatch?: RenderPageGetLoadMatch, ctrl?: Control): Promise<RenderPageGetEntity>;
}
export { RenderPageGetEntity };

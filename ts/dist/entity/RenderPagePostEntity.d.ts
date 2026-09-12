import { PhantomjscloudEntityBase } from '../PhantomjscloudEntityBase';
import type { PhantomjscloudSDK } from '../PhantomjscloudSDK';
import type { Control } from '../types';
import type { RenderPagePost, RenderPagePostCreateData } from '../PhantomjscloudTypes';
declare class RenderPagePostEntity extends PhantomjscloudEntityBase<RenderPagePost> {
    constructor(client: PhantomjscloudSDK, entopts: any);
    make(this: RenderPagePostEntity): RenderPagePostEntity;
    create(this: any, reqdata?: RenderPagePostCreateData, ctrl?: Control): Promise<RenderPagePostEntity>;
}
export { RenderPagePostEntity };

export interface RenderPageGet {
    events?: any[];
    id?: string;
}
export interface RenderPageGetLoadMatch {
    id: string;
    request?: string;
}
export interface RenderPagePost {
    events?: any[];
    id?: string;
    outputAsJson?: boolean;
    overseerScript?: string;
    proxy?: string;
    renderType?: string;
    requestSettings?: Record<string, any>;
    suppressJson?: any[];
    url: string;
}
export interface RenderPagePostCreateData {
    id: string;
    events?: any[];
    outputAsJson?: boolean;
    overseerScript?: string;
    proxy?: string;
    renderType?: string;
    requestSettings?: Record<string, any>;
    suppressJson?: any[];
    url: string;
}

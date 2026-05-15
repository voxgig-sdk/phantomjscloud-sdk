package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewRenderPageGetEntityFunc func(client *PhantomjscloudSDK, entopts map[string]any) PhantomjscloudEntity

var NewRenderPagePostEntityFunc func(client *PhantomjscloudSDK, entopts map[string]any) PhantomjscloudEntity


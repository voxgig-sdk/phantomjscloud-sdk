package voxgigphantomjscloudsdk

import (
	"github.com/voxgig-sdk/phantomjscloud-sdk/core"
	"github.com/voxgig-sdk/phantomjscloud-sdk/entity"
	"github.com/voxgig-sdk/phantomjscloud-sdk/feature"
	_ "github.com/voxgig-sdk/phantomjscloud-sdk/utility"
)

// Type aliases preserve external API.
type PhantomjscloudSDK = core.PhantomjscloudSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type PhantomjscloudEntity = core.PhantomjscloudEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type PhantomjscloudError = core.PhantomjscloudError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewRenderPageGetEntityFunc = func(client *core.PhantomjscloudSDK, entopts map[string]any) core.PhantomjscloudEntity {
		return entity.NewRenderPageGetEntity(client, entopts)
	}
	core.NewRenderPagePostEntityFunc = func(client *core.PhantomjscloudSDK, entopts map[string]any) core.PhantomjscloudEntity {
		return entity.NewRenderPagePostEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewPhantomjscloudSDK = core.NewPhantomjscloudSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature

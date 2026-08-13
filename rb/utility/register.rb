# Phantomjscloud SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

PhantomjscloudUtility.registrar = ->(u) {
  u.clean = PhantomjscloudUtilities::Clean
  u.done = PhantomjscloudUtilities::Done
  u.make_error = PhantomjscloudUtilities::MakeError
  u.feature_add = PhantomjscloudUtilities::FeatureAdd
  u.feature_hook = PhantomjscloudUtilities::FeatureHook
  u.feature_init = PhantomjscloudUtilities::FeatureInit
  u.fetcher = PhantomjscloudUtilities::Fetcher
  u.make_fetch_def = PhantomjscloudUtilities::MakeFetchDef
  u.make_context = PhantomjscloudUtilities::MakeContext
  u.make_options = PhantomjscloudUtilities::MakeOptions
  u.make_request = PhantomjscloudUtilities::MakeRequest
  u.make_response = PhantomjscloudUtilities::MakeResponse
  u.make_result = PhantomjscloudUtilities::MakeResult
  u.make_point = PhantomjscloudUtilities::MakePoint
  u.make_spec = PhantomjscloudUtilities::MakeSpec
  u.make_url = PhantomjscloudUtilities::MakeUrl
  u.param = PhantomjscloudUtilities::Param
  u.prepare_auth = PhantomjscloudUtilities::PrepareAuth
  u.prepare_body = PhantomjscloudUtilities::PrepareBody
  u.prepare_headers = PhantomjscloudUtilities::PrepareHeaders
  u.prepare_method = PhantomjscloudUtilities::PrepareMethod
  u.prepare_params = PhantomjscloudUtilities::PrepareParams
  u.prepare_path = PhantomjscloudUtilities::PreparePath
  u.prepare_query = PhantomjscloudUtilities::PrepareQuery
  u.graphql_body = PhantomjscloudUtilities::GraphqlBody
  u.graphql_errors = PhantomjscloudUtilities::GraphqlErrors
  u.result_basic = PhantomjscloudUtilities::ResultBasic
  u.result_body = PhantomjscloudUtilities::ResultBody
  u.result_headers = PhantomjscloudUtilities::ResultHeaders
  u.transform_request = PhantomjscloudUtilities::TransformRequest
  u.transform_response = PhantomjscloudUtilities::TransformResponse
}

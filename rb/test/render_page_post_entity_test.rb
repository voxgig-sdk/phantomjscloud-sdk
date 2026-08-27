# RenderPagePost entity test

require "minitest/autorun"
require "json"
require_relative "../Phantomjscloud_sdk"
require_relative "runner"

class RenderPagePostEntityTest < Minitest::Test
  def test_create_instance
    testsdk = PhantomjscloudSDK.test(nil, nil)
    ent = testsdk.RenderPagePost(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = render_page_post_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "render_page_post." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set PHANTOMJSCLOUD_TEST_RENDER_PAGE_POST_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    render_page_post_ref01_ent = client.RenderPagePost(nil)
    render_page_post_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.render_page_post"), "render_page_post_ref01"))
    render_page_post_ref01_data["api_key"] = setup[:idmap]["api_key01"]

    render_page_post_ref01_data_result = render_page_post_ref01_ent.create(render_page_post_ref01_data, nil)
    render_page_post_ref01_data = Helpers.to_map(render_page_post_ref01_data_result.respond_to?(:data_get) ? render_page_post_ref01_data_result.data_get : render_page_post_ref01_data_result)
    assert !render_page_post_ref01_data.nil?
    assert !render_page_post_ref01_data["id"].nil?

  end
end

def render_page_post_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "render_page_post", "RenderPagePostTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = PhantomjscloudSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["render_page_post01", "render_page_post02", "render_page_post03", "api_key01"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["PHANTOMJSCLOUD_TEST_RENDER_PAGE_POST_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "PHANTOMJSCLOUD_TEST_RENDER_PAGE_POST_ENTID" => idmap,
    "PHANTOMJSCLOUD_TEST_LIVE" => "FALSE",
    "PHANTOMJSCLOUD_TEST_EXPLAIN" => "FALSE",
    "PHANTOMJSCLOUD_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["PHANTOMJSCLOUD_TEST_RENDER_PAGE_POST_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["PHANTOMJSCLOUD_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      {
        "apikey" => env["PHANTOMJSCLOUD_APIKEY"],
      },
      extra || {},
    ])
    client = PhantomjscloudSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["PHANTOMJSCLOUD_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["PHANTOMJSCLOUD_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end

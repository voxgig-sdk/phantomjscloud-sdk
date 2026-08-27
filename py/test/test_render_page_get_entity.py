# RenderPageGet entity test

import json
import os
import time

import pytest

from phantomjscloud_sdk.utility.voxgig_struct import voxgig_struct as vs
from phantomjscloud_sdk import PhantomjscloudSDK
from phantomjscloud_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestRenderPageGetEntity:

    def test_should_create_instance(self):
        testsdk = PhantomjscloudSDK.test(None, None)
        ent = testsdk.RenderPageGet(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _render_page_get_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "render_page_get." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set PHANTOMJSCLOUD_TEST_RENDER_PAGE_GET_ENTID JSON to run live")
        client = setup["client"]

        # Bootstrap entity data from existing test data.
        render_page_get_ref01_data_raw = vs.items(helpers.to_map(
            vs.getpath(setup["data"], "existing.render_page_get")))
        render_page_get_ref01_data = None
        if len(render_page_get_ref01_data_raw) > 0:
            render_page_get_ref01_data = helpers.to_map(render_page_get_ref01_data_raw[0][1])

        # LOAD
        render_page_get_ref01_ent = client.RenderPageGet(None)
        render_page_get_ref01_match_dt0 = {
            "id": render_page_get_ref01_data["id"],
        }
        render_page_get_ref01_data_dt0_loaded = render_page_get_ref01_ent.load(render_page_get_ref01_match_dt0, None)
        render_page_get_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(render_page_get_ref01_data_dt0_loaded))
        assert render_page_get_ref01_data_dt0_load_result is not None
        assert render_page_get_ref01_data_dt0_load_result["id"] == render_page_get_ref01_data["id"]



def _render_page_get_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/render_page_get/RenderPageGetTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = PhantomjscloudSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["render_page_get01", "render_page_get02", "render_page_get03"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Detect ENTID env override before envOverride consumes it. When live
    # mode is on without a real override, the basic test runs against synthetic
    # IDs from the fixture and 4xx's. We surface this so the test can skip.
    _entid_env_raw = os.environ.get(
        "PHANTOMJSCLOUD_TEST_RENDER_PAGE_GET_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "PHANTOMJSCLOUD_TEST_RENDER_PAGE_GET_ENTID": idmap,
        "PHANTOMJSCLOUD_TEST_LIVE": "FALSE",
        "PHANTOMJSCLOUD_TEST_EXPLAIN": "FALSE",
        "PHANTOMJSCLOUD_APIKEY": "NONE",
    })

    idmap_resolved = helpers.to_map(
        env.get("PHANTOMJSCLOUD_TEST_RENDER_PAGE_GET_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)

    if env.get("PHANTOMJSCLOUD_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            {
                "apikey": env.get("PHANTOMJSCLOUD_APIKEY"),
            },
            extra or {},
        ])
        client = PhantomjscloudSDK(helpers.to_map(merged_opts))

    _live = env.get("PHANTOMJSCLOUD_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("PHANTOMJSCLOUD_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }

package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/phantomjscloud-sdk"
	"github.com/voxgig-sdk/phantomjscloud-sdk/core"

	vs "github.com/voxgig/struct"
)

func TestRenderPagePostEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.RenderPagePost(nil)
		if ent == nil {
			t.Fatal("expected non-nil RenderPagePostEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := render_page_postBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "render_page_post." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set PHANTOMJSCLOUD_TEST_RENDER_PAGE_POST_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		renderPagePostRef01Ent := client.RenderPagePost(nil)
		renderPagePostRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "render_page_post"}, setup.data), "render_page_post_ref01"))
		renderPagePostRef01Data["api_key"] = setup.idmap["api_key01"]

		renderPagePostRef01DataResult, err := renderPagePostRef01Ent.Create(renderPagePostRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		renderPagePostRef01Data = core.ToMapAny(renderPagePostRef01DataResult)
		if renderPagePostRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

	})
}

func render_page_postBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "render_page_post", "RenderPagePostTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read render_page_post test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse render_page_post test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"render_page_post01", "render_page_post02", "render_page_post03", "api_key01"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("PHANTOMJSCLOUD_TEST_RENDER_PAGE_POST_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"PHANTOMJSCLOUD_TEST_RENDER_PAGE_POST_ENTID": idmap,
		"PHANTOMJSCLOUD_TEST_LIVE":      "FALSE",
		"PHANTOMJSCLOUD_TEST_EXPLAIN":   "FALSE",
		"PHANTOMJSCLOUD_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["PHANTOMJSCLOUD_TEST_RENDER_PAGE_POST_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["PHANTOMJSCLOUD_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["PHANTOMJSCLOUD_APIKEY"],
			},
			extra,
		})
		client = sdk.NewPhantomjscloudSDK(core.ToMapAny(mergedOpts))
	}

	live := env["PHANTOMJSCLOUD_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["PHANTOMJSCLOUD_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}

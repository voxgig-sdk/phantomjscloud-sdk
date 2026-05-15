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

func TestRenderPageGetEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.RenderPageGet(nil)
		if ent == nil {
			t.Fatal("expected non-nil RenderPageGetEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := render_page_getBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "render_page_get." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set PHANTOMJSCLOUD_TEST_RENDER_PAGE_GET_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		renderPageGetRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.render_page_get", setup.data)))
		var renderPageGetRef01Data map[string]any
		if len(renderPageGetRef01DataRaw) > 0 {
			renderPageGetRef01Data = core.ToMapAny(renderPageGetRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = renderPageGetRef01Data

		// LOAD
		renderPageGetRef01Ent := client.RenderPageGet(nil)
		renderPageGetRef01MatchDt0 := map[string]any{}
		renderPageGetRef01DataDt0Loaded, err := renderPageGetRef01Ent.Load(renderPageGetRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if renderPageGetRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func render_page_getBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "render_page_get", "RenderPageGetTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read render_page_get test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse render_page_get test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"render_page_get01", "render_page_get02", "render_page_get03"},
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
	entidEnvRaw := os.Getenv("PHANTOMJSCLOUD_TEST_RENDER_PAGE_GET_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"PHANTOMJSCLOUD_TEST_RENDER_PAGE_GET_ENTID": idmap,
		"PHANTOMJSCLOUD_TEST_LIVE":      "FALSE",
		"PHANTOMJSCLOUD_TEST_EXPLAIN":   "FALSE",
		"PHANTOMJSCLOUD_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["PHANTOMJSCLOUD_TEST_RENDER_PAGE_GET_ENTID"])
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


const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'


import { PhantomjscloudSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


describe('RenderPageGetEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when PHANTOMJSCLOUD_TEST_LIVE=TRUE.
  afterEach(liveDelay('PHANTOMJSCLOUD_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = PhantomjscloudSDK.test()
    const ent = testsdk.RenderPageGet()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.PHANTOMJSCLOUD_TEST_LIVE
    for (const op of ['load']) {
      if (maybeSkipControl(t, 'entityOp', 'render_page_get.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set PHANTOMJSCLOUD_TEST_RENDER_PAGE_GET_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let render_page_get_ref01_data = Object.values(setup.data.existing.render_page_get)[0] as any

    // LOAD
    const render_page_get_ref01_ent = client.RenderPageGet()
    const render_page_get_ref01_match_dt0: any = {}
    render_page_get_ref01_match_dt0.id = render_page_get_ref01_data.id
    const render_page_get_ref01_data_dt0 = (await render_page_get_ref01_ent.load(render_page_get_ref01_match_dt0)).data()
    assert(render_page_get_ref01_data_dt0.id === render_page_get_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/render_page_get/RenderPageGetTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = PhantomjscloudSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['render_page_get01','render_page_get02','render_page_get03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  // Detect whether the user provided a real ENTID JSON via env var. The
  // basic flow consumes synthetic IDs from the fixture file; without an
  // override those synthetic IDs reach the live API and 4xx. Surface this
  // to the test so it can skip rather than fail.
  const idmapEnvVal = process.env['PHANTOMJSCLOUD_TEST_RENDER_PAGE_GET_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'PHANTOMJSCLOUD_TEST_RENDER_PAGE_GET_ENTID': idmap,
    'PHANTOMJSCLOUD_TEST_LIVE': 'FALSE',
    'PHANTOMJSCLOUD_TEST_EXPLAIN': 'FALSE',
    'PHANTOMJSCLOUD_APIKEY': 'NONE',
  })

  idmap = env['PHANTOMJSCLOUD_TEST_RENDER_PAGE_GET_ENTID']

  const live = 'TRUE' === env.PHANTOMJSCLOUD_TEST_LIVE

  if (live) {
    client = new PhantomjscloudSDK(merge([
      {
        apikey: env.PHANTOMJSCLOUD_APIKEY,
      },
      extra
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.PHANTOMJSCLOUD_TEST_EXPLAIN,
    live,
    syntheticOnly: live && !idmapOverridden,
    now: Date.now(),
  }

  return setup
}
  

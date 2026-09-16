

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { PhantomjscloudSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('RenderPagePostEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when PHANTOMJSCLOUD_TEST_LIVE=TRUE.
  afterEach(liveDelay('PHANTOMJSCLOUD_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = PhantomjscloudSDK.test()
    const ent = testsdk.RenderPagePost()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.PHANTOMJSCLOUD_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'render_page_post.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"events","req":false,"short":"Array of events that occurred during page load","type":"`$ARRAY`","index$":0},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"outputAsJson","req":false,"short":"Return response metadata as JSON including page events, resources loaded, errors, etc.","type":"`$BOOLEAN`","index$":2},{"active":true,"name":"overseerScript","req":false,"short":"JavaScript code for page automation (ES2018 syntax).","type":"`$STRING`","index$":3},{"active":true,"name":"proxy","req":false,"short":"Proxy configuration: 'anon-any' (anonymous worldwide), 'anon-{country}' (country-specific), 'geo-{country}' (static IP), or 'custom-{url}:{port}:{user}:{pass}'","type":"`$STRING`","index$":4},{"active":true,"name":"renderType","req":false,"short":"Output format: plainText (web scraping), jpg/jpeg/png (screenshots), pdf (archiving), html (native form), automation (advanced control)","type":"`$STRING`","index$":5},{"active":true,"name":"requestSettings","req":false,"type":"`$OBJECT`","index$":6},{"active":true,"name":"suppressJson","req":false,"short":"List of JSON response fields to suppress for reduced verbosity","type":"`$ARRAY`","index$":7},{"active":true,"name":"url","req":true,"short":"The URL of the page to render","type":"`$STRING`","index$":8}],"id":{"field":"id","name":"id"},"name":"render_page_post","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"example":"ak-012345-abcde-012345-abcde-012345","kind":"param","name":"id","orig":"api_key","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST /{apiKey}/","json":"{\"operationId\":\"renderPagePost\",\"parameters\":[{\"description\":\"Your API key for authentication. Use 'a-demo-key-with-low-quota-per-ip-address' for demo (limited to 100 requests/day)\",\"example\":\"ak-012345-abcde-012345-abcde-012345\",\"in\":\"path\",\"name\":\"apiKey\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"examples\":{\"autoLogin\":{\"summary\":\"Auto-login example\",\"value\":{\"overseerScript\":\"let _user=\\\"USER@EXAMPLE.COM\\\"; let _pass=\\\"PASSWORD\\\"; await page.waitForSelector(\\\"input#username\\\"); await page.type(\\\"input#username\\\",_user,{delay:50}); await page.type(\\\"input#password\\\",_pass,{delay:50}); page.click(\\\"button[type=submit]\\\"); await page.waitForNavigation();\",\"renderType\":\"jpeg\",\"url\":\"https://www.linkedin.com/uas/login\"}},\"basicScreenshot\":{\"summary\":\"Basic JPEG screenshot\",\"value\":{\"renderType\":\"jpeg\",\"url\":\"https://example.com\"}},\"buttonClick\":{\"summary\":\"Click button and wait\",\"value\":{\"overseerScript\":\"page.manualWait(); await page.waitForSelector(\\\"button#dateBtn\\\"); page.click(\\\"button#dateBtn\\\"); await page.waitForFunction(()=>document.querySelector(\\\"#demo_result\\\").textContent!=\\\"\\\"); page.done();\",\"renderType\":\"jpeg\",\"url\":\"https://phantomjscloud.com/static-samples/button-click.html\"}},\"pdfRender\":{\"summary\":\"PDF render\",\"value\":{\"renderType\":\"pdf\",\"url\":\"https://example.com\"}},\"textExtraction\":{\"summary\":\"Plain text extraction\",\"value\":{\"renderType\":\"plainText\",\"url\":\"https://example.com\"}},\"withProxy\":{\"summary\":\"Using anonymous proxy\",\"value\":{\"proxy\":\"anon-any\",\"renderType\":\"jpeg\",\"url\":\"https://phantomjscloud.com/examples/helpers/requestdata\"}}},\"schema\":{\"properties\":{\"outputAsJson\":{\"default\":false,\"description\":\"Return response metadata as JSON including page events, resources loaded, errors, etc.\",\"type\":\"boolean\"},\"overseerScript\":{\"description\":\"JavaScript code for page automation (ES2018 syntax). Allows clicking, typing, waiting for elements, navigation, etc.\",\"example\":\"await page.waitForSelector('button'); page.click('button');\",\"type\":\"string\"},\"proxy\":{\"description\":\"Proxy configuration: 'anon-any' (anonymous worldwide), 'anon-{country}' (country-specific), 'geo-{country}' (static IP), or 'custom-{url}:{port}:{user}:{pass}'\",\"example\":\"anon-any\",\"type\":\"string\"},\"renderType\":{\"default\":\"plainText\",\"description\":\"Output format: plainText (web scraping), jpg/jpeg/png (screenshots), pdf (archiving), html (native form), automation (advanced control)\",\"enum\":[\"plainText\",\"jpg\",\"jpeg\",\"png\",\"pdf\",\"html\",\"automation\"],\"type\":\"string\"},\"requestSettings\":{\"properties\":{\"clearCache\":{\"default\":false,\"description\":\"Force all resources to reload instead of using cache\",\"type\":\"boolean\"},\"doneWhen\":{\"description\":\"Define when the page is considered 'done' loading\",\"items\":{\"properties\":{\"event\":{\"description\":\"Event to trigger completion: 'domReady' (DomContentLoaded) or 'loadFinished' (full load)\",\"enum\":[\"domReady\",\"loadFinished\"],\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"},\"suppressJson\":{\"description\":\"List of JSON response fields to suppress for reduced verbosity\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"url\":{\"description\":\"The URL of the page to render\",\"example\":\"https://example.com\",\"type\":\"string\"}},\"required\":[\"url\"],\"type\":\"object\"}}},\"description\":\"PageRequest object containing all rendering parameters\",\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"Response when outputAsJson is true\",\"properties\":{\"content\":{\"description\":\"Rendered content based on renderType\",\"type\":\"string\"},\"pageResponses\":{\"properties\":{\"events\":{\"description\":\"Array of events that occurred during page load\",\"items\":{\"properties\":{\"key\":{\"description\":\"Type of event\",\"enum\":[\"resourceRequested\",\"resourceReceived\",\"browserError\"],\"type\":\"string\"},\"time\":{\"description\":\"Timestamp of the event\",\"format\":\"date-time\",\"type\":\"string\"},\"value\":{\"description\":\"Event-specific data\",\"type\":\"object\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"},\"statusCode\":{\"description\":\"HTTP status code of the rendered page\",\"type\":\"integer\"}},\"type\":\"object\"}},\"application/pdf\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}},\"image/jpeg\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}},\"image/png\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}},\"text/html\":{\"schema\":{\"type\":\"string\"}},\"text/plain\":{\"schema\":{\"type\":\"string\"}}},\"description\":\"Successful page render\",\"headers\":{\"X-PhantomJsCloud-Page-Cost\":{\"description\":\"Cost of the page request in credits\",\"schema\":{\"type\":\"string\"}},\"X-PhantomJsCloud-Remaining-Quota\":{\"description\":\"Remaining quota for your API key\",\"schema\":{\"type\":\"string\"}}}},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error description\",\"type\":\"string\"},\"statusCode\":{\"description\":\"HTTP status code\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Bad Request - Invalid parameters\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error description\",\"type\":\"string\"},\"statusCode\":{\"description\":\"HTTP status code\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Unauthorized - Invalid API key\"},\"429\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error description\",\"type\":\"string\"},\"statusCode\":{\"description\":\"HTTP status code\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Too Many Requests - Quota exceeded\"},\"502\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error description\",\"type\":\"string\"},\"statusCode\":{\"description\":\"HTTP status code\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Bad Gateway - Server error (check ExpectContinue header)\"}},\"security\":[{\"ApiKeyAuth\":[]}],\"securitySchemes\":{\"ApiKeyAuth\":{\"description\":\"API key for authentication. Obtain from Dashboard.PhantomJsCloud.com. Demo key: 'a-demo-key-with-low-quota-per-ip-address' (100 requests/day limit)\",\"in\":\"path\",\"name\":\"apiKey\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/{apiKey}/","rename":{"param":{"apiKey":"id"}},"segments":[{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.pageResponses`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"render_page_post","name__orig":"render_page_post","Name":"RenderPagePost","name_":"render_page_post","name-":"render-page-post","NAME":"RENDER_PAGE_POST","index$":1}, {"active":true,"entity":"render_page_post","key$":"BasicRenderPagePostFlow","kind":"basic","name":"BasicRenderPagePostFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"render_page_post_ref01"},"match":{"api_key":"api_key01"},"op":"create","spec":[],"valid":[],"index$":0}]}, 'RenderPagePost')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const render_page_post_ref01_ent = client.RenderPagePost()
    let render_page_post_ref01_data = setup.data.new.render_page_post['render_page_post_ref01']
    render_page_post_ref01_data['api_key'] = setup.idmap['api_key01']

    render_page_post_ref01_data = (await render_page_post_ref01_ent.create(render_page_post_ref01_data)).data()
    assert(null != render_page_post_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/render_page_post/RenderPagePostTestData.json')

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
    ['render_page_post01','render_page_post02','render_page_post03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'PHANTOMJSCLOUD_TEST_RENDER_PAGE_POST_ENTID': idmap,
    'PHANTOMJSCLOUD_TEST_LIVE': 'FALSE',
    'PHANTOMJSCLOUD_TEST_EXPLAIN': 'FALSE',
    'PHANTOMJSCLOUD_APIKEY': '',
  })

  idmap = env['PHANTOMJSCLOUD_TEST_RENDER_PAGE_POST_ENTID']

  const live = 'TRUE' === env.PHANTOMJSCLOUD_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['PHANTOMJSCLOUD_TEST_RENDER_PAGE_POST_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new PhantomjscloudSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.PHANTOMJSCLOUD_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
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
    transport,
    now: Date.now(),
  }

  return setup
}
  

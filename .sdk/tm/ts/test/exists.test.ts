
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { PhantomjscloudSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await PhantomjscloudSDK.test()
    equal(null !== testsdk, true)
  })

})

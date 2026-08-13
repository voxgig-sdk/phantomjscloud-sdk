# Phantomjscloud SDK exists test

import pytest
from phantomjscloud_sdk import PhantomjscloudSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = PhantomjscloudSDK.test(None, None)
        assert testsdk is not None

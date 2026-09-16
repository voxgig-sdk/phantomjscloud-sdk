# Phantomjscloud SDK feature factory

from phantomjscloud_sdk.feature.base_feature import PhantomjscloudBaseFeature
from phantomjscloud_sdk.feature.ratelimit_feature import PhantomjscloudRatelimitFeature
from phantomjscloud_sdk.feature.retry_feature import PhantomjscloudRetryFeature
from phantomjscloud_sdk.feature.test_feature import PhantomjscloudTestFeature
from phantomjscloud_sdk.feature.timeout_feature import PhantomjscloudTimeoutFeature


_FEATURES = {
    "base": lambda: PhantomjscloudBaseFeature(),
    "ratelimit": lambda: PhantomjscloudRatelimitFeature(),
    "retry": lambda: PhantomjscloudRetryFeature(),
    "test": lambda: PhantomjscloudTestFeature(),
    "timeout": lambda: PhantomjscloudTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES

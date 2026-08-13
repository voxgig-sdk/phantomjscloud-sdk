# Phantomjscloud SDK feature factory

from phantomjscloud_sdk.feature.base_feature import PhantomjscloudBaseFeature
from phantomjscloud_sdk.feature.test_feature import PhantomjscloudTestFeature


def _make_feature(name):
    features = {
        "base": lambda: PhantomjscloudBaseFeature(),
        "test": lambda: PhantomjscloudTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()

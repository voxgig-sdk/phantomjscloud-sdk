# Phantomjscloud SDK utility: make_context

from projectname_sdk.core.context import PhantomjscloudContext


def make_context_util(ctxmap, basectx):
    return PhantomjscloudContext(ctxmap, basectx)

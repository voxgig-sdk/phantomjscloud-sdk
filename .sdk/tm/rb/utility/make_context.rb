# Phantomjscloud SDK utility: make_context
require_relative '../core/context'
module PhantomjscloudUtilities
  MakeContext = ->(ctxmap, basectx) {
    PhantomjscloudContext.new(ctxmap, basectx)
  }
end

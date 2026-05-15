# Phantomjscloud SDK utility: feature_add
module PhantomjscloudUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end

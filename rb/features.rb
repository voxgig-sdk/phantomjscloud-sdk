# Phantomjscloud SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module PhantomjscloudFeatures
  def self.make_feature(name)
    case name
    when "base"
      PhantomjscloudBaseFeature.new
    when "ratelimit"
      PhantomjscloudRatelimitFeature.new
    when "retry"
      PhantomjscloudRetryFeature.new
    when "test"
      PhantomjscloudTestFeature.new
    when "timeout"
      PhantomjscloudTimeoutFeature.new
    else
      PhantomjscloudBaseFeature.new
    end
  end
end

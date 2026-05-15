# Phantomjscloud SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module PhantomjscloudFeatures
  def self.make_feature(name)
    case name
    when "base"
      PhantomjscloudBaseFeature.new
    when "test"
      PhantomjscloudTestFeature.new
    else
      PhantomjscloudBaseFeature.new
    end
  end
end

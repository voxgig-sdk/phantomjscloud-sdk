# Phantomjscloud SDK exists test

require "minitest/autorun"
require_relative "../Phantomjscloud_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = PhantomjscloudSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end

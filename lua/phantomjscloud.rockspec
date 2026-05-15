package = "voxgig-sdk-phantomjscloud"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/phantomjscloud-sdk.git"
}
description = {
  summary = "Phantomjscloud SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["phantomjscloud_sdk"] = "phantomjscloud_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}

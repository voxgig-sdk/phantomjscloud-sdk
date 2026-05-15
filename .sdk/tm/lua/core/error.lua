-- Phantomjscloud SDK error

local PhantomjscloudError = {}
PhantomjscloudError.__index = PhantomjscloudError


function PhantomjscloudError.new(code, msg, ctx)
  local self = setmetatable({}, PhantomjscloudError)
  self.is_sdk_error = true
  self.sdk = "Phantomjscloud"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function PhantomjscloudError:error()
  return self.msg
end


function PhantomjscloudError:__tostring()
  return self.msg
end


return PhantomjscloudError

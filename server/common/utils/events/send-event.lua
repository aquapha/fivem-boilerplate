---@class SendEventArgs
---@field name Event
---@field data any
---@field receiver number | nil

---@param args SendEventArgs
function SendEvent(args)
  local eventName <const> = ("%s:%s"):format(EventName, args.name)

  TriggerClientEvent(eventName, args.receiver or -1, args.data)
end

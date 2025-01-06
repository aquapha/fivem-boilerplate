---@param name Event
function RegisterEvent(name)
  local eventName <const> = ("%s:%s"):format(EventName, name)

  RegisterNetEvent(eventName, function(payload)
    SendUIEvent(name, payload)
  end)
end

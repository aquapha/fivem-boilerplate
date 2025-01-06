---@param name Event
---@param payload any
function SendUIEvent(name, payload)
  SendNUIMessage({
    type = name,
    payload = payload
  })
end

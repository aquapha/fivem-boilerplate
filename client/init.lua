local resourceName <const> = GetCurrentResourceName();

---@type ClientUIEvents
ClientUIEvents = exports["modules"]:ClientUIEvents(resourceName, SendNUIMessage)

RegisterCommand("open-menu", function()
  ClientUIEvents:SendEvent(Constants.UI.MENU_OPEN)
end, false)

RegisterCommand("close-menu", function()
  ClientUIEvents:SendEvent(Constants.UI.MENU_CLOSE)
end, false)

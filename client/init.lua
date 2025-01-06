RegisterCommand("open-menu", function()
  SendUIEvent("on-menu-open")
end, false)

RegisterCommand("close-menu", function()
  SendUIEvent("on-menu-close")
end, false)

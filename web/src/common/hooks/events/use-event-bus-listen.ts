import { eventBus } from "../../utils/events";
import { useEffectOnce } from "../use-effect-once";

function useEventBusListen() {
  useEffectOnce(() => {
    eventBus.listen();
  });
}

export { useEventBusListen };

import { Color } from "./Color";
import colors from "./colors.json";

const useColors = () =>
  colors
    .map((c: Color) => {
      const splitted = c.name.split("-");
      return { color: splitted[0], variant: splitted[1], code: c.color };
    })
    .reduce((previous: Record<string, Color[]>, current) => {
      const currentColorVariant = {
        name: current.variant,
        color: current.code,
      };
      // Use the shortened 7 palette instead of all 13 variants
      if (Number.parseInt(current.variant) % 2 !== 0) {
        return previous;
      }
      if (previous[current.color]) {
        previous[current.color].push(currentColorVariant);
      } else {
        previous[current.color] = [currentColorVariant];
      }
      return previous;
    }, {});

export default useColors;

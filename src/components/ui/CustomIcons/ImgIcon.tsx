import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const ImgIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 20 20" {...props}>
      <Path
        fill={props.color || COLORS.white}
        d="M6.813 9.612c.457-.38.918-.38 1.386.011l.108.098 4.986 4.986.094.083a1 1 0 0 0 1.403-1.403l-.083-.094L13.415 12l.292-.293.106-.095c.457-.38.918-.38 1.386.011l.108.098 4.674 4.675a4 4 0 0 1-3.775 3.599L16 20H4a4 4 0 0 1-3.98-3.603l6.687-6.69zM16 0a4 4 0 0 1 3.995 3.8L20 4v9.585l-3.293-3.292-.15-.137c-1.256-1.095-2.85-1.097-4.096-.017l-.154.14-.307.306-2.293-2.292-.15-.137c-1.256-1.095-2.85-1.097-4.096-.017l-.154.14L0 13.585V4A4 4 0 0 1 3.8.005L4 0zm-2.99 5-.127.007a1 1 0 0 0 0 1.986L13 7l.127-.007a1 1 0 0 0 0-1.986z"
      ></Path>
    </Svg>
  );
};

export default ImgIcon;

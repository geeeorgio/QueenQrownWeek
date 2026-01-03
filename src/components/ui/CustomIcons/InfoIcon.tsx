import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const InfoIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 20 20" {...props}>
      <Path
        fill={props.color || COLORS.white}
        d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0m0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1m1-8H9V5h2z"
      ></Path>
    </Svg>
  );
};

export default InfoIcon;

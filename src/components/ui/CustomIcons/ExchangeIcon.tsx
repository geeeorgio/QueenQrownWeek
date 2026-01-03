import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const ExchangeIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        fill={props.color || COLORS.white}
        fillRule="evenodd"
        d="M12 1.5a8.25 8.25 0 0 0-8.25 8.25v1.5c0 .792.322 1.553.665 2.139.346.599.763 1.1 1.054 1.392l2.125 2.124.866 2.595h7.08l.866-2.595 2.125-2.124a7.2 7.2 0 0 0 1.055-1.392c.341-.586.664-1.347.664-2.139v-1.5A8.25 8.25 0 0 0 12 1.5m2.031 6.531-1.062-1.062-2.78 2.781 1.5 1.5-1.72 1.719 1.062 1.062 2.78-2.781-1.5-1.5z"
        clipRule="evenodd"
      ></Path>
      <Path fill={props.color || COLORS.white} d="M15 22.5V21H9v1.5z"></Path>
    </Svg>
  );
};

export default ExchangeIcon;

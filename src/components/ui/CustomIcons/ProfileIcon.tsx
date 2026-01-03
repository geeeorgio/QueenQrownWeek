import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const ProfileIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 18 18" {...props}>
      <Path
        fill={props.color || COLORS.white}
        fillRule="evenodd"
        d="M5 4a4 4 0 1 1 8 0 4 4 0 0 1-8 0m0 6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5z"
        clipRule="evenodd"
      ></Path>
    </Svg>
  );
};

export default ProfileIcon;

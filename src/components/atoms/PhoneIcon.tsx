import { FaPhoneAlt } from "react-icons/fa";

interface Props {
  isShadow?: boolean;
}

const phoneIconStyle: React.CSSProperties = {
  filter:
    "drop-shadow(-1px -1px 0 rgba(242, 246, 247, 0.9)) drop-shadow(1px -1px 0 rgba(242, 246, 247, 0.9)) drop-shadow(-1px 1px 0 rgba(242, 246, 247, 0.9)) drop-shadow(1px 1px 0 rgba(242, 246, 247, 0.9))",
};
const PhoneIcon: React.FC<Props> = ({ isShadow = false }) => (
  <FaPhoneAlt style={isShadow ? phoneIconStyle : {}} />
);

export default PhoneIcon;
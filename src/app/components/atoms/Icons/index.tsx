/**
 * Icon component to get and render app icons
 * @param {Object} props Component properties
 * @return {React.Component} Icon component
 */
interface IconProps {
  name?: string;
  className?: string;
  onClick?: Function;
  foldername?: string;
  fill?: string;
}
const Icon = (props: IconProps) => {
  if (props.name === "") {
    return null;
  }
  try {
    let Image;
    if (props.foldername) {
      Image = require(`./stock/${props.foldername}/${props.name}`).default;
    } else {
      Image = require(`./stock/${props.name}`).default;
    }

    if (Image) {
      return <Image aria-label={props.name} className={`${props.className}`} {...props} />;
    }
    return null;
  } catch (error: any) {
    return null;
  }
};
Icon.defaultProps = {
  name: "",
  className: "",
  onClick: () => {
    return null;
  },
  foldername: "",
  fill: "",
};
export default Icon;

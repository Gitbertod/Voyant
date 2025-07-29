
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
const CallToAction = ({linkTo,buttonText}) => {
  return (
    <div className="flex justify-start my-11">
      <Link to={linkTo}>
        <Button color="warning">{buttonText}</Button>
      </Link>
    </div>
  );
};

export default CallToAction;

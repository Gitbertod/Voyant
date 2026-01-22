import { useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";
const CallToAction = ({ linkTo, buttonText }) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-start my-11">
      <Button color="warning" onClick={() => navigate(linkTo)}>
        {buttonText}
      </Button>
    </div>
  );
};
export default CallToAction;

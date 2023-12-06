import { Carousel } from "@material-tailwind/react";
import businessLoan from "../assets/img/services/business-loan.jpg";
import termLoan from "../assets/img/services/term-loan.jpg";
import loanAgainstProperty from "../assets/img/services/loan-against-property.jpg";

const ImageSlider = () => {
  return (
    <>
      <Carousel className="rounded-xl">
        <img src={businessLoan} alt="image 1" className="h-full w-full object-cover" />

        <img src={termLoan} alt="image 2" className="h-full w-full object-cover" />

        <img src={loanAgainstProperty} alt="image 3" className="h-full w-full object-cover" />
      </Carousel>
    </>
  );
};

export default ImageSlider;

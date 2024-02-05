/* eslint-disable jsx-a11y/img-redundant-alt */
import businessLoan from "../assets/img/services/carousel-business-loand.png";
import termLoan from "../assets/img/services/carousel-home-loan.png";
import loanAgainstProperty from "../assets/img/services/carousel-approved-loan.png";

const ImageSlider = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <div><img src={businessLoan} alt="image 1" className="h-full w-full object-cover" /></div>
        <div><img src={termLoan} alt="image 2" className="h-full w-full object-cover" /></div>
        <div><img src={loanAgainstProperty} alt="image 3" className="h-full w-full object-cover" /></div>
      </div>
    </>
  );
};

export default ImageSlider;

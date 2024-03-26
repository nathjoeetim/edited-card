import { Card, CardTitle } from "../components/ui/card";
import styled from "styled-components";

function AllPurchase() {
  return (
    <Card className="flex flex-col w-[98%] mx-auto justify-start items-start p-1">
      <CardTitle className="w-full flex flex-col items-center justify-center font-bold text-slate-700 text-2xl">
        Cars we Purchase
      </CardTitle>
      <p className="w-[98%] mx-auto mt-2 mb-4 text-center">
        We purchase junk cars and offer cash on the spot, along with free
        towing! Additionally, we buy running cars based on their condition, and
        if it&apos;s in good shape, you can simply drive it to us and receive
        good compensation.
      </p>
      <div className="flex flex-row gap-7 items-center justify-start w-full overflow-x-scroll p-4">
        <div className="w-[250px]">
          <HeaderContainer backgroundimagemobile="https://www.pngkey.com/png/detail/1-19590_mazda-car-png-hd-car-images-hd-png.png" />
        </div>{" "}
        <div className="w-[250px]">
          <HeaderContainer backgroundimagemobile="https://www.pngkey.com/png/detail/64-648183_pontiac-usa-wreck-dare-corrosion-old-car-png.png" />
        </div>{" "}
        <div className="w-[250px]">
          <HeaderContainer backgroundimagemobile="https://www.pngkey.com/png/detail/922-9226272_enterprise-rental-car-luxury-cars-bmw-x5-car.png" />
        </div>{" "}
        <div className="w-[250px]">
          <HeaderContainer backgroundimagemobile="https://www.pngkey.com/png/detail/12-129321_recherche-google-recortes-para-photoshop-cut-out-cars.png" />
        </div>{" "}
        <div className="w-[250px]">
          <HeaderContainer backgroundimagemobile="https://www.pngkey.com/png/detail/1005-10053780_2019-red-toyota-rav4-toyota-rav-4.png" />
        </div>{" "}
        <div className="w-[250px]">
          <HeaderContainer backgroundimagemobile="https://www.pngkey.com/png/detail/250-2506978_new-2019-toyota-corolla-le-toyota-corolla-le.png" />
        </div>{" "}
        <div className="w-[250px]">
          <HeaderContainer backgroundimagemobile="https://www.pngkey.com/png/detail/367-3674078_2013-audi-a6-3-0-t-quattro-tiptronic.png" />
        </div>
      </div>
    </Card>
  );
}

export default AllPurchase;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  width: 250px;
  height: 10rem;
  box-sizing: border-box;
  position: relative;
  padding: 10px;
  cursor: pointer;
  background-image: url(${props => props.backgroundimagemobile});
  background-repeat: no-repeat;
  /* background-size: cover; */
  /* background-position: 100%; */
  background-repeat: no-repeat;
  object-fit: contain;
  transition: all 1s ease;
  background-size: contain; /* Adjust this property to change how the image fits */
  background-position: center;

  &:hover {
    transform: scale(1.1); /* You can adjust the scale factor as needed */
  }
`;

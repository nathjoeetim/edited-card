import styled from "styled-components";
import { ourService } from "./data";

function Ourservices() {
  return (
    <div
      className="flex flex-col w-full p-5"
      style={{
        backgroundImage:
          "url('https://www.familycarbuyers.com/wp-content/uploads/2023/01/24572776_sl_031520_28970_10-1-scaled.jpg')",
      }}
    >
      <div className="flex flex-col items-end sm:items-center md:items-center lg:items-end w-full pr-5">
        <span className="text-red-500 font-bold text-xs lg:text-sm font-sans mb-2 lg:mb-0">
          Our Service
        </span>
        <h2 className="text-slate-950 font-bold text-2xl lg:text-4xl">
          What Makes Us Stand Out?
        </h2>
      </div>
      <ContainerGrid className="">
        {ourService.map((data, index) => {
          return (
            <div
              key={index}
              className="flex flex-col lg:w-[300px] border rounded-md p-0 shadow-lg transition-shadow w-full"
              style={{
                backgroundImage:
                  "url('https://www.familycarbuyers.com/wp-content/uploads/2023/01/2607293_4981.jpg')",
              }}
            >
              <img
                src={data.image}
                alt="get your quote"
                className="rounded-md h-[170px] w-full bg-slate-200"
              />
              <div className="flex flex-col px-4 py-4 gap-1">
                <h3 className="font-bold text-lg">{data.title}</h3>
                <span className="text-base text-justify h-[340px]">
                  {data.context}
                </span>
              </div>
            </div>
          );
        })}
      </ContainerGrid>
    </div>
  );
}

export default Ourservices;
const ContainerGrid = styled.div`
  width: 98%;
  margin: 10px 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  grid-column-start: auto;
  padding: 20px;
  place-items: center;
`;

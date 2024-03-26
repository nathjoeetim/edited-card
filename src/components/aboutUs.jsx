import styled from "styled-components";
import parts from "@/assets/parts-2.png";

function AboutUs() {
  const phoneNumber = " +4048900083";

  return (
    <AboutContainer id="about" className="flex flex-row w-[98%] p-2 gap-10">
      {/* <ContactFormComponent /> */}
      <div className="flex flex-col gap-7 ">
        <div className="flex flex-col items-center justify-center bg-slate-400 w-[180px] h-10 rounded-sm">
          <a className="" href={`tel:${phoneNumber}`}>
            +4048900083
          </a>
        </div>
        <p className="flex flex-col text-justify font-sans font-medium">
          Ari-cash for Cars stands as a premier junk car buyer in Georgia,
          distinguished for our longstanding commitment to exceptional service.
          With years of expertise, we offer a secure, expedited, and seamless
          process for selling your vehicle. <br /> <br />
          We specialize in purchasing junk cars in any condition, offering top
          dollar for your vehicle. Our priority is to provide customers with a
          hassle-free experience. Our dedicated team is readily available to
          offer the best possible quote for your car. Whether you&apos;re
          seeking junk car removal services, simply give us a call or fill out
          our contact form to receive your FREE quote at +4048900083. Our buyers
          undergo extensive training to ensure customer satisfaction. We accept
          cars in any condition, running or not, and pay in the currency of your
          choice. At Ari-cash for Cars, junk car removal isn&apos;t just a
          service we offer—it&apos;s our sole focus. <br />
          <br />
          Do you have any questions about our Cash for Junk Car Services?
          Curious if we can assist with your specific project? Feel free to
          reach out to us by phone or through our contact form, and we&apos;ll
          promptly provide you with a quote. We&apos;re eager to serve you!
        </p>
        <div className="flex flex-col text-justify font-sans font-medium gap-3">
          <span className="font-bold">Hour Of Operation</span>
          <span className="font-normal">Mondays Through Sundays, 24/7</span>
          <p>
            Junk car removal is what we do. We Are The Number One Car Buyer In
            Georgia. We Pay Top Dollar. You Get Your Cash Within An Hour. No
            Charge, Pressure Or Obligation To Sell. You Get Paid Cash On The
            Spot. We Buy Cars In Any Condition, Running, Wrecked, Junk Or
            Damaged. Absolutely No Hidden Fees And Hassle Free Paper Work.
          </p>
        </div>
        {/* <BlogComponenet /> */}
        <p className="flex flex-col text-justify font-sans font-medium">
          For a hassle-free selling experience of your junk car to a trusted
          cash car buyer, look no further than Ari-cash For Cars. As the premier
          auto buyer, we are committed to offering the highest cash for cars.
          Whether your car is used, running, or not, we&apos; re here to provide
          top dollar for it. As the leading used car buyer in Georgia, we always
          ensure our customers receive the best cash offer. Have questions about
          selling your car for cash? Wondering who buys cars for cash? Simply
          give us a call at+4048900083, and we&apos;ll address all your
          inquiries.
        </p>
        <div className="flex flex-col w-full text-slate-600 gap-5 items-center justify-center">
          <h4 className="text-2xl text-slate-900 font-bold underline">
            We purchase Car Parts
          </h4>
          <img src={parts} alt="woman with cash " />
          <p>We purchase car parts at a friendly price </p>
        </div>
      </div>
    </AboutContainer>
  );
}

export default AboutUs;

const AboutContainer = styled.div`
  @media screen and (max-width: 907px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

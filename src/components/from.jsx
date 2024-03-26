/* eslint-disable no-unused-vars */
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardFooter, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import useInputValidator, { isNotEmpty } from "./userInput";
import { useRef } from "react";
import { toast } from "sonner";

function ContactFormComponent() {
  const form = useRef();
  const {
    inputState: first_name_value,
    onChangeHandlerFn: first_name_handeler,
    hasNoError: first_name_hasnoerror,
    clearInputValue: onclear_first_name_input,
  } = useInputValidator(isNotEmpty);

  const {
    inputState: other_name_value,
    onChangeHandlerFn: other_name_handeler,
    hasNoError: other_name_hasnoerror,
    clearInputValue: onclear_other_name_input,
  } = useInputValidator(isNotEmpty);

  const {
    inputState: phonenumber_value,
    onChangeHandlerFn: phonenumber_handeler,
    hasNoError: phonenumber_hasnoerror,
    clearInputValue: onclear_phonenumber_input,
  } = useInputValidator(isNotEmpty);

  const {
    inputState: address_value,
    onChangeHandlerFn: address_handeler,
    hasNoError: address_hasnoerror,
    clearInputValue: onclear_address_input,
  } = useInputValidator(isNotEmpty);

  const {
    inputState: car_make_value,
    onChangeHandlerFn: car_make_handeler,
    hasNoError: car_make_hasnoerror,
    clearInputValue: onclear_car_make_input,
  } = useInputValidator(isNotEmpty);

  const {
    inputState: car_year_value,
    onChangeHandlerFn: car_year_handeler,
    hasNoError: car_year_hasnoerror,
    clearInputValue: onclear_car_year_input,
  } = useInputValidator(isNotEmpty);

  const {
    inputState: car_model_value,
    onChangeHandlerFn: car_model_handeler,
    hasNoError: car_model_hasnoerror,
    clearInputValue: onclear_car_model_input,
  } = useInputValidator(isNotEmpty);

  const {
    inputState: user_message_value,
    onChangeHandlerFn: user_message_handeler,
    hasNoError: user_message_hasnoerror,
    clearInputValue: onclear_user_message_input,
  } = useInputValidator(isNotEmpty);

  function onSubmitFormHandelerFn(e) {
    e.preventDefault();

    emailjs
      .sendForm("service_4kjwkkf", "template_gsyo88u", form.current, {
        publicKey: "OMWDaCEcPNOTrc84h",
      })
      .then(
        () => {
          toast.message("Message sent successfully! 🚀");
          onclear_address_input();
          onclear_car_make_input();
          onclear_user_message_input();
          onclear_car_model_input();
          onclear_car_year_input();
          onclear_first_name_input();
          onclear_other_name_input();
          onclear_phonenumber_input();
        },
        error => {
          toast.error("Unable to send message to company");
        }
      );
  }
  return (
    <FormContainer
      ref={form}
      onSubmit={onSubmitFormHandelerFn}
      className="flex flex-col gap-1"
    >
      <CustomCard className="flex flex-col gap-5 p-2 flex-1 w-full lg:w-[400px] h-fit">
        <CardTitle className="text-lg">
          We Would Love To Hear From You
        </CardTitle>
        <NameComponent className="flex flex-row gap-5">
          <div className="flex flex-col w-full items-center gap-1.5">
            <Label htmlFor="first_name">First Name</Label>
            <Input
              type="text"
              name="user_name"
              placeholder="First name"
              value={first_name_value}
              onChange={first_name_handeler}
            />{" "}
          </div>
          <div className="flex flex-col w-full items-start justify-start gap-1.5">
            <Label htmlFor="last_name">Last Name</Label>
            <Input
              value={other_name_value}
              onChange={other_name_handeler}
              type="text"
              id="last_name"
              placeholder="Last name"
            />{" "}
          </div>
        </NameComponent>
        <div className="flex flex-col w-full max-w-sm items-start justify-start gap-1.5">
          <Label htmlFor="phone number">Phone Number</Label>
          <Input
            type="number"
            id="phone number"
            name="user_number"
            placeholder="+1(000) 10020029"
            value={phonenumber_value}
            onChange={phonenumber_handeler}
          />{" "}
        </div>
        <div className="flex flex-col w-full max-w-sm items-start justify-start gap-1.5">
          <Label htmlFor="last_name">Address (Street, City, Zip Code)</Label>
          <Input
            type="text"
            id="Adress"
            name="user_address"
            placeholder="E.g : no.2b Green spring Housing"
            value={address_value}
            onChange={address_handeler}
          />{" "}
        </div>
        <div className="flex flex-col w-full max-w-sm items-start justify-start gap-1.5">
          <Label htmlFor="Year Of Vehicle ">Year Of Year Of Vehicle </Label>
          <Input
            type="number"
            id="Year_Vehicle "
            placeholder="E.g : 2015"
            name="user_production"
            value={car_year_value}
            onChange={car_year_handeler}
          />{" "}
        </div>
        <div className="flex flex-col w-full max-w-sm items-start justify-start gap-1.5">
          <Label htmlFor="Vehicle_make ">Make Of Vehicle</Label>
          <Input
            type="text"
            id="Vehicle_make "
            placeholder="Brand of Car E.g BMW"
            name="user_brand"
            value={car_make_value}
            onChange={car_make_handeler}
          />{" "}
        </div>
        <div className="flex flex-col w-full max-w-sm items-start justify-start gap-1.5">
          <Label htmlFor="Vehicle_model">Model Of Vehicle</Label>
          <Input
            type="text"
            id="model "
            placeholder="Model of Car"
            name="user_model"
            value={car_model_value}
            onChange={car_model_handeler}
          />{" "}
        </div>
        <div className="flex flex-col items-start w-full gap-1.5">
          <Label htmlFor="message-2">Your Message</Label>
          <Textarea
            placeholder="Type your message here."
            id="message-2"
            name="message"
            value={user_message_value}
            onChange={user_message_handeler}
          />
          <p className="text-sm text-muted-foreground">
            Your message will be copied to the support team.
          </p>
        </div>
        <CardFooter className="flex flex-row w-full justify-end items-center">
          <Button type="submit">Submit</Button>
        </CardFooter>
      </CustomCard>
    </FormContainer>
  );
}

export default ContactFormComponent;

const CustomCard = styled(Card)`
  @media screen and (max-width: 907px) {
    width: 98%;
    margin: 0 auto;
  }
  @media screen and (max-width: 380px) {
    width: 100%;
    margin: 0;
  }
`;

const NameComponent = styled.div`
  @media screen and (max-width: 380px) {
    display: flex;
    flex-direction: column;
  }
`;

const FormContainer = styled.form`
  @media screen and (max-width: 907px) {
    display: flex;
    flex-direction: row;
  }
  @media screen and (max-width: 706px) {
    display: flex;
    flex-direction: column;
  }
`;

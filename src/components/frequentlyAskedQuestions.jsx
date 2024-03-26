import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionQuestions() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>What types of cars do you purchase?</AccordionTrigger>
        <AccordionContent>
          We purchase vehicles in just about every condition. Sell us your used,
          wrecked, or damaged vehicle.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          How does the junk car selling process work?
        </AccordionTrigger>
        <AccordionContent>
          <span className="flex flex-col items-start justify-start">
            <span> 1. Call for quick quote: +(404)890-0083</span>
            <span> 2. Schedule a free pickup</span>
            <span> 3. Get paid on the spot.</span>
          </span>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          How and when do I get paid when I sell my car?
        </AccordionTrigger>
        <AccordionContent>
          You will be issued payment for your car upon pickup! Same day on the
          spot.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          How do you determine the price quote you give me?
        </AccordionTrigger>
        <AccordionContent>
          We determine our quote based on several factors including year, make,
          model, condition, mileage (and for “junk” or “scrap” cars, also scrap
          metal prices). We also buy damaged cars so if you have an old clunker,
          then we can help you get rid of it
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Are there any hidden costs or fees?</AccordionTrigger>
        <AccordionContent>
          No, there are never any hidden fees. What we offer you is what you
          get.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

import { ScrollArea } from "@/components/ui/scroll-area";
import React, { ReactNode } from "react";

const Marker = () => {
  return (
    <div className="flex items-center h-[18px] w-2 shrink-0">
      <svg
        width="8"
        height="8"
        viewBox="0 0 8 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="4" cy="4" r="4" fill="url(#paint0_linear_1_1139)" />
        <defs>
          <linearGradient
            id="paint0_linear_1_1139"
            x1="7.92923"
            y1="3.47588"
            x2="3.6471e-07"
            y2="4.23763"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F4D03F" />
            <stop offset="1" stopColor="#16A085" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

const RulesItem = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex items-start justify-start gap-1 leading-[130%]">
      <Marker />
      <div className="flex items-start text-[14px] font-light">{children}</div>
    </div>
  );
};

const RulesSection = () => {
  return (
    <section className="flex flex-col justify-start items-start text-left gap-4 w-full h-full relative">
      <div className="flex justify-between items-center w-full">
        <h2 className="text-[14px] font-bold text-[#333333]">
          Як використовувати купон?
        </h2>
      </div>
      <ScrollArea className="w-full h-full">
        <div className="flex flex-col justify-start items-start gap-1">
          <RulesItem>
            Купон діє на всі товари його можна використати в замовленнях
            вартістю понад 1349 грн.
          </RulesItem>
          <RulesItem>
            Додайте до Кошику будь-які товари на суму понад 1349 грн.
          </RulesItem>
          <RulesItem>
            {` В Кошику в поле "промо-код" впишіть свій код купона та затвердіть його
          (натиснувши на "ОК"). Код потрібно вписати повністю.`}
          </RulesItem>
          <RulesItem>Сума замовлення знизиться на 200 грн!</RulesItem>
          <RulesItem>
            Купон одноразовий. У разі повернення товару буде повернена вартість
            товару, зазначена в документі продажу, а код не може бути
            використаний повторно при наступних покупках.
          </RulesItem>
          <RulesItem>Купон не діє в поєднанні з іншими акціями.</RulesItem>
          <RulesItem>
            Запрошений за рекомендацією друг отримує купон на знижку відразу
            після підтвердження нами заявки. Друг, який запрошував, отримує
            купон на знижку після 14 днів з моменту покупки запрошеного друга.
          </RulesItem>
          <RulesItem>
            Купонами можна оплатити не більше 50% від вартості продукції.
            (Додати в пункти в самому початку) Запросити можна необмежену
            кількість друзів.
          </RulesItem>
        </div>
      </ScrollArea>
    </section>
  );
};

export default RulesSection;

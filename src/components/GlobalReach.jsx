
import React, { useEffect, useState } from 'react'
import client from '@/lib/appollo-client';
import { GET_WORLD_IMPACT } from '@/lib/api-Collection';
import { Globe, Moon, Zap } from 'lucide-react';
import * as LucideIcons from "lucide-react";


const GlobalReach = () => {

 const [impactData, setImpactData] = useState(null);

 const fetchWorldImpact = async () => {
    try {
      const response = await client.query({
        query: GET_WORLD_IMPACT,
      });

      console.log("World Impact Data:", response.data.worldwideImpact);

      
      setImpactData(response.data.worldwideImpact);

    } catch (error) {
      console.log("Error fetching World Impact:", error);
    }
  };

  useEffect(() => {
    fetchWorldImpact();
  }, []);




  
  if (!impactData) return null;

 
  return (
    <div >
         
    <div className="text w-full h-auto flex flex-col items-center justify-center py-10">
    
    <div 
     data-aos="fade-up"
     data-aos-anchor-placement="top-center"
    //className="w-11/12 sm:w-4/5 md:w-3/5 lg:w-[80%]  2xl:w-[65%] bg-white flex items-center justify-center text-center flex-col gap-5 p-4"
     
    className="
    w-11/12 sm:w-4/5 md:w-3/5 lg:w-[80%] 2xl:w-[65%]
    bg-white flex items-center justify-center text-center flex-col
    gap-5 p-4
    mt-30
  "

    >
      
      {/* Heading */}
        {/* Global Reach */}
      <h1 className="text-xs flex items-center justify-center gap-2 sm:text-sm md:text-base px-3 py-1 rounded-full border border-[#157de5] poppins-font">
        <div className="text-[#157de5]">
              <Globe size={18} />
          </div>
        {impactData.badge}
      </h1>

      
      
      {/* Title */}
      {/* Worldwide Impact */}
      <p 
      className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[60px] montserrat-font"
      dangerouslySetInnerHTML={{ __html: impactData.title || '' }}
      />
      
      {/* Description */}
      <p className="px-4 sm:px-8 text-lg  md:text-xl para-text poppins-font ">
        {/* Operating across continents with local expertise and global standards. */}
        {impactData.description}
      </p>

    </div>

  </div>




        <div className="cover w-full flex  item-center justify-center p-5 2xl:mb-10">
            <div 
            data-aos="fade-up"
     data-aos-anchor-placement="top-center"
            className="w-[90%] flex flex-col items-center justify-center rounded-[32px] md:w-[80%] lg:w-[85%] 2xl:w-[65%] p-4 border border-[#0F172A]/10 shadow-[0_24px_60px_rgba(15,23,42,0.08)] bg-white ">
     <div className="card-block grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  w-[95%] gap-5 sm:gap-4 justify-items-center sm:p-5">

              

{/* {impactData.projectsStat?.map((item, index) => (
  <div
    data-aos="zoom-in"
    data-aos-duration="800"
    data-aos-delay={index * 100}
    key={index} 
    className="cards w-[90%] sm:w-[95%] flex flex-col items-center
    justify-center gap-2 p-3 rounded-[16px]
    shadow-[0_16px_40px_rgba(15,23,42,0.08)] border border-[#0F172A]/10
    transform transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]
    hover:scale-[1.03] hover:-translate-y-[4px]
    hover:shadow-[0_22px_55px_rgba(15,23,42,0.10)]
    "
  >
    <p className='text-[36px] montserrat-font font-bold' dangerouslySetInnerHTML={{ __html: item.count }}></p>
    <p className='poppins-font text-[14px]'>{item.title}</p>
    <hr className='w-[90%]' />
    <p className='text-[12px] poppins-font'>
      <span dangerouslySetInnerHTML={{ __html: item.countryCount }} /> 
    </p>
    <p className='text-[12px] poppins-font'>{item.countryName}</p>
  </div>
))} */}

{/* {impactData.projectsStat?.map((item, index) => (

  <div
    key={index}
    data-aos="zoom-in"
    data-aos-duration="800"
    data-aos-delay={index * 100}

    className="w-full flex justify-center"
  >
    <div
      className="
        cards
        w-[90%] sm:w-[95%]  
        flex flex-col items-center justify-center 
        gap-2 p-3 rounded-[16px]

        border border-[#0F172A]/10
        shadow-[0_16px_40px_rgba(15,23,42,0.08)]

        transition-all duration-300 transform-gpu will-change-transform
        hover:scale-[1.03] hover:-translate-y-[4px]
        hover:shadow-[0_22px_55px_rgba(15,23,42,0.10)]
      "
    >
      <p className="text-[36px] montserrat-font font-bold"
        dangerouslySetInnerHTML={{ __html: item.count }}
      />

      <p className="poppins-font text-[14px] text-[#6C7A89] ">{item.title}</p>

      <hr className="w-[90%] border-[#6C7A89]/30 " />

      <p className="text-[12px] poppins-font">
        <span dangerouslySetInnerHTML={{ __html: item.countryCount }} />
      </p>

      <p className="text-[12px] poppins-font">{item.countryName}</p>
    </div>
  </div>
))} */}

{impactData.projectsStat?.map((item, index) => {
  
  // Define color set EXACTly like screenshot
  const colors = [
    "#157DE5", // Blue
    "#157DE5", // Blue (second card)
    "#00A86B", // Green
    "#FF7038", // Orange
  ];

  const numberColor = colors[index] || "#157DE5";

  return (
    <div
      key={index}
      data-aos="zoom-in"
      data-aos-duration="800"
      data-aos-delay={index * 100}
      className="w-full flex justify-center"
    >
      <div
        className="
          cards
          w-[90%] sm:w-[95%]
          flex flex-col items-center justify-center 
          gap-2 p-5 rounded-[20px]

          border border-[#0F172A]/10
          shadow-[0_24px_60px_rgba(15,23,42,0.08)]

          transition-all duration-300 transform-gpu
          hover:scale-[1.03] hover:-translate-y-[4px]
          hover:shadow-[0_30px_70px_rgba(15,23,42,0.10)]
        "
      >

        {/* NUMBER */}
        <p
          className="text-[36px] font-bold montserrat-font"
          style={{ color: numberColor }}
          dangerouslySetInnerHTML={{ __html: item.count }}
        />

        {/* TITLE */}
        <p className="text-[14px] poppins-font text-[#6C7A89]">
          {item.title}
        </p>

        {/* LINE */}
        <hr className="w-[90%] border-[#6C7A89]/30" />

        {/* COUNTRY COUNT — COLOR MATCH NUMBER */}
        <p
          className="text-[14px] poppins-font font-semibold"
          style={{ color: numberColor }}
        >
          <span dangerouslySetInnerHTML={{ __html: item.countryCount }} />
        </p>

        {/* COUNTRY NAME ( stays dark gray ) */}
        <p className="text-[13px] poppins-font text-[#6C7A89]">
          {item.countryName}
        </p>

      </div>
    </div>
  );
})}





                </div>





     <div className="card-text grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  w-[95%] gap-5 sm:gap-4 justify-items-center p-5">

       

{/* {impactData.successStat?.map((item, index) => {
  const IconComponent = LucideIcons[item.icon]; // ← dynamic icon

  return (
    <div 
      key={index} 
      className="cards w-[90%] sm:w-[95%] flex flex-col items-center justify-center gap-3 p-3"
    >
      <div className="w-[45px] h-[45px] primary-color flex items-center justify-center light-blue rounded-full">
        {IconComponent ? <IconComponent /> : <LucideIcons.HelpCircle />} 
      </div>

      <p>{item.title}</p>

      <p 
        className="text-2xl font-bold poppins-font text-center" 
        dangerouslySetInnerHTML={{ __html: item.value }}
      ></p>
    </div>
  )
})} */}

{impactData.successStat?.map((item, index) => {
  const IconComponent = LucideIcons[item.icon];

  const colors = [
    { hex: "#307FE2" },  // Mariner
    { hex: "#00A86B" },  // Green Haze
    { hex: "#4169E1" },  // Royal Blue
    { hex: "#F25555" },  // Flamingo
  ];

  const c = colors[index] || colors[0];

  // underline override: first icon = black underline
  const underlineColor = index === 0 ? "#000000" : c.hex;

  return (
    <div
      key={index}
      className="flex flex-col items-center justify-center gap-4 py-6 group cursor-pointer"
    >

      {/* ROUND COLOR SHAPE POP-UP WITH SHADOW */}
      <div
        className={`icon-bg-${index} flex items-center justify-center rounded-full transition-all duration-300 ease-out`}
        style={{
          width: "48px",
          height: "48px",
          backgroundColor: `${c.hex}20`,
          color: c.hex,
        }}
      >
        {IconComponent ? (
          <IconComponent size={26} />
        ) : (
          <LucideIcons.HelpCircle size={26} />
        )}
      </div>

      <style>{`
        .group:hover .icon-bg-${index} {
          transform: translateY(-8px) scale(1.1);
          box-shadow: 0px 10px 22px ${c.hex}50;
        }
      `}</style>

      {/* TITLE */}
      <p className="text-sm poppins-font text-[#6C7A89]">
        {item.title}
      </p>

      {/* VALUE + UNDERLINE */}
      <div className="relative inline-block">
        <p
          className="text-[22px] sm:text-[24px] font-bold poppins-font text-center"
          style={{ color: c.hex }}
          dangerouslySetInnerHTML={{ __html: item.value }}
        ></p>

        <span
          className="absolute left-0 bottom-[-2px] h-[2px] block"
          style={{
            backgroundColor: underlineColor, // 🔥 FIXED HERE
            width: 0,
          }}
        ></span>

        <style>{`
          @keyframes underlineGrow {
            from { width: 0; }
            to { width: 100%; }
          }
          .group:hover span {
            animation: underlineGrow 0.4s ease-out forwards;
          }
        `}</style>
      </div>

    </div>
  );
})}







       
            </div>



            </div>
       


        </div>
      
    </div>
  )
}

export default GlobalReach

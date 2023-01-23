import React from "react";

import { Text } from "components";

const AboutPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter items-start justify-start mx-[auto] p-[29px] sm:px-[20px] w-[100%]">
        <header className="bg-bluegray_100 flex sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] gap-[72px] items-center justify-center mb-[257px] md:ml-[0] sm:ml-[0] ml-[14px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] sm:px-[20px] px-[35px] py-[10px] rounded-radius11 md:w-[100%] sm:w-[100%] w-[auto]">
          <ul className="flex flex-col gap-[15px] sm:hidden items-start justify-start w-[auto] common-row-list">
            <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
              <a
                href={"javascript:"}
                className="cursor-pointer font-normal hover:h-[undefinedpx] not-italic sm:text-[17.09px] md:text-[19.09px] text-[21.09px] text-black_900 text-left hover:w-[undefinedpx]"
                rel="noreferrer"
              >
                Cars
              </a>
            </li>
            <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
              <a
                href={"javascript:"}
                className="cursor-pointer font-normal hover:h-[undefinedpx] not-italic sm:text-[17.09px] md:text-[19.09px] text-[21.09px] text-black_900 text-left hover:w-[undefinedpx]"
                rel="noreferrer"
              >
                All stock
              </a>
            </li>
            <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
              <a
                href={"javascript:"}
                className="cursor-pointer font-normal hover:h-[undefinedpx] not-italic sm:text-[17.09px] md:text-[19.09px] text-[21.09px] text-black_900 text-left hover:w-[undefinedpx]"
                rel="noreferrer"
              >
                In stock
              </a>
            </li>
            <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
              <a
                href={"javascript:"}
                className="cursor-pointer font-normal hover:h-[undefinedpx] not-italic sm:text-[17.09px] md:text-[19.09px] text-[21.09px] text-black_900 text-left hover:w-[undefinedpx]"
                rel="noreferrer"
              >
                Shipping
              </a>
            </li>
            <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
              <a
                href={"javascript:"}
                className="cursor-pointer font-normal hover:h-[undefinedpx] not-italic sm:text-[17.09px] md:text-[19.09px] text-[21.09px] text-black_900 text-left hover:w-[undefinedpx]"
                rel="noreferrer"
              >
                New Arrivals
              </a>
            </li>
          </ul>
          <div className="flex flex-col gap-[24px] items-start justify-start w-[auto]">
            <Text
              className="not-italic text-black_900 text-left w-[auto]"
              as="h4"
              variant="h4"
            >
              Trade in
            </Text>
            <Text
              className="not-italic text-black_900 text-left w-[auto]"
              as="h4"
              variant="h4"
            >
              Financial
            </Text>
            <Text
              className="not-italic text-black_900 text-left w-[auto]"
              as="h4"
              variant="h4"
            >
              Our Blog
            </Text>
          </div>
          <div className="flex flex-col gap-[26px] items-center justify-start w-[auto]">
            <Text
              className="not-italic text-black_900 text-left w-[auto]"
              as="h4"
              variant="h4"
            >
              Top Brands
            </Text>
            <div className="flex flex-col gap-[26px] items-center justify-start md:w-[100%] sm:w-[100%] w-[61%]">
              <Text
                className="not-italic text-black_900 text-left w-[auto]"
                as="h4"
                variant="h4"
              >
                Toyota
              </Text>
              <Text
                className="not-italic text-black_900 text-left w-[auto]"
                as="h4"
                variant="h4"
              >
                Nissan
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-[25px] items-center justify-start w-[auto]">
            <div className="flex flex-col items-start justify-start p-[10px] w-[auto]">
              <Text
                className="not-italic text-black_900 text-left w-[auto]"
                as="h4"
                variant="h4"
              >
                About us
              </Text>
            </div>
            <div className="flex flex-col gap-[25px] items-center justify-start md:w-[100%] sm:w-[100%] w-[66%]">
              <Text
                className="not-italic text-black_900 text-left w-[auto]"
                as="h4"
                variant="h4"
              >
                Mobile
              </Text>
              <Text
                className="not-italic text-black_900 text-left w-[auto]"
                as="h4"
                variant="h4"
              >
                Socials
              </Text>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default AboutPage;

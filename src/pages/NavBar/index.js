import React from "react";

import { Img, Text, Button } from "components";

const NavBarPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter items-start justify-start mx-[auto] p-[63px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="bg-bluegray_100 flex flex-col items-start justify-center mb-[114px] md:ml-[0] sm:ml-[0] ml-[25px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] sm:px-[20px] px-[22px] md:w-[100%] sm:w-[100%] w-[auto]">
          <div className="flex md:flex-col sm:flex-col flex-row gap-[46.78px] items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
            <Img
              src="images/img_car1.png"
              className="h-[49px] md:h-[auto] sm:h-[auto] object-cover w-[49px]"
              alt="carOne"
            />
            <Text
              className="not-italic text-black_900 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              Item 1
            </Text>
            <Text
              className="not-italic text-black_900 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              Item 3
            </Text>
            <Text
              className="not-italic text-black_900 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              Item 4
            </Text>
            <div className="flex flex-row gap-[55.37px] items-start justify-start w-[auto]">
              <Img
                src="images/img_rectangle4.png"
                className="h-[38px] md:h-[auto] sm:h-[auto] object-cover w-[45px]"
                alt="RectangleFour"
              />
              <Button className="cursor-pointer font-normal leading-[normal] min-w-[101px] not-italic text-[15.22px] text-center text-white_A700 w-[auto]">
                Sign up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBarPage;

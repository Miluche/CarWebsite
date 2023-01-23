import React from "react";

import { Img, Text, Button, Grid, Stack, Line } from "components";

const FrameOnePage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] pb-[11px] w-[100%]">
        <div className="flex flex-col items-start justify-start w-[100%]">
          <header className="bg-bluegray_100 flex flex-col items-center justify-center max-w-[1047px] sm:px-[20px] px-[29.04px] w-[100%]">
            <div className="flex md:flex-col flex-row md:gap-[40px] sm:gap-[40px] gap-[61.75px] items-center justify-start md:pl-[20px] md:pr-[20px] w-[auto]">
              <div className="header-row ">
                <Img
                  src="images/img_car1.png"
                  className="h-[65px] md:h-[auto] sm:h-[auto] object-cover w-[65px]"
                  alt="carOne"
                />
                <div className="mobile-menu">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <Text
                className="sm:hidden not-italic text-black_900 text-left w-[auto]"
                as="h3"
                variant="h3"
              >
                Home
              </Text>
              <Text
                className="sm:hidden not-italic text-black_900 text-left w-[auto]"
                as="h3"
                variant="h3"
              >
                About us
              </Text>
              <Text
                className="sm:hidden not-italic text-black_900 text-left w-[auto]"
                as="h3"
                variant="h3"
              >
                Contact us
              </Text>
              <div className="flex flex-row gap-[73.09px] sm:hidden items-start justify-start w-[auto]">
                <Img
                  src="images/img_rectangle4.png"
                  className="h-[51px] md:h-[auto] sm:h-[auto] object-cover w-[60px]"
                  alt="RectangleFour"
                />
                <Button
                  className="cursor-pointer font-normal leading-[normal] min-w-[134px] not-italic sm:text-[16.09px] md:text-[18.09px] text-[20.09px] text-center text-white_A700 w-[auto]"
                  shape="CircleBorder29"
                  size="md"
                >
                  Sign up
                </Button>
              </div>
            </div>
          </header>
          <div className="flex md:flex-col sm:flex-col flex-row gap-[10px] items-start justify-start max-w-[977px] md:ml-[0] sm:ml-[0] ml-[auto] mr-[auto] mt-[19px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[100%]">
            <div className="flex flex-col items-end justify-start md:mt-[0] sm:mt-[0] mt-[69px] md:w-[100%] sm:w-[100%] w-[13%]">
              <div className="flex flex-col items-center justify-center w-[auto]">
                <div className="bg-bluegray_100 flex flex-row gap-[33.43px] items-center justify-start px-[14.16px] py-[10.62px] w-[auto]">
                  <Text
                    className="not-italic text-black_900 text-left w-[auto]"
                    variant="body4"
                  >
                    Car
                  </Text>
                  <Img
                    src="images/img_skiptrack1.png"
                    className="h-[14px] md:h-[auto] sm:h-[auto] object-cover w-[14px]"
                    alt="skiptrackOne"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-[121px]">
                <div className="bg-bluegray_100 flex flex-row gap-[33.43px] items-center justify-start px-[14.16px] py-[10.62px] w-[auto]">
                  <Text
                    className="not-italic text-black_900 text-left w-[auto]"
                    variant="body4"
                  >
                    Model
                  </Text>
                  <Img
                    src="images/img_skiptrack1.png"
                    className="h-[14px] md:h-[auto] sm:h-[auto] object-cover w-[14px]"
                    alt="skiptrackOne One"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[5px] items-center justify-start md:w-[100%] sm:w-[100%] w-[94%]">
                <div className="flex flex-col items-center justify-center w-[auto]">
                  <div className="bg-bluegray_100 flex flex-row gap-[33.43px] items-center justify-start px-[14.16px] py-[10.62px] w-[auto]">
                    <Text
                      className="not-italic text-black_900 text-left w-[auto]"
                      variant="body4"
                    >
                      Year
                    </Text>
                    <Img
                      src="images/img_skiptrack1.png"
                      className="h-[14px] md:h-[auto] sm:h-[auto] object-cover w-[14px]"
                      alt="skiptrackOne Two"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center w-[auto]">
                  <div className="bg-bluegray_100 flex flex-row gap-[33.43px] items-center justify-start px-[14.16px] py-[10.62px] w-[auto]">
                    <Text
                      className="not-italic text-black_900 text-left w-[auto]"
                      variant="body4"
                    >
                      Price
                    </Text>
                    <Img
                      src="images/img_skiptrack1.png"
                      className="h-[14px] md:h-[auto] sm:h-[auto] object-cover w-[14px]"
                      alt="skiptrackOne Three"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[87%]">
              <div className="flex flex-col gap-[17px] justify-start w-[100%]">
                <div className="backdrop-opacity-[0.5] blur-[1.00px] border border-gray_500 border-solid flex flex-row gap-[147.85px] h-[47px] md:h-[auto] sm:h-[auto] items-center justify-center md:ml-[0] sm:ml-[0] ml-[210px] px-[16.76px] py-[7.89px] rounded-radius23 w-[275px]">
                  <Text
                    className="not-italic text-bluegray_101 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Search
                  </Text>
                  <Img
                    src="images/img_searchinterfacesymbol.png"
                    className="h-[35px] md:h-[auto] sm:h-[auto] object-cover w-[35px]"
                    alt="searchinterfacesymbol"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <Grid className="gap-[10px] md:gap-[20px] sm:gap-[20px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 justify-center min-h-[auto] w-[100%]">
                    <Stack className="h-[135px] relative w-[100%]">
                      <div className="absolute bg-bluegray_100 flex flex-col h-[max-content] inset-[0] items-start justify-center m-[auto] pb-[5px] rounded-radius8 w-[100%]">
                        <Img
                          src="images/img_rectangle2.png"
                          className="h-[92px] md:h-[auto] sm:h-[auto] object-cover rounded-bl-[9px] rounded-br-[9px] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                          alt="RectangleTwo"
                        />
                        <div className="flex flex-col gap-[4.02px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[3px] mt-[3px] w-[auto]">
                          <Text
                            className="not-italic text-black_900 text-left w-[auto]"
                            variant="body2"
                          >
                            Car model
                          </Text>
                          <Text
                            className="not-italic text-black_900 text-left w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            Short description
                          </Text>
                        </div>
                      </div>
                      <div className="absolute bottom-[1%] flex flex-col gap-[9.64px] items-center justify-start right-[0] w-[auto]">
                        <Img
                          src="images/img_ellipse1.png"
                          className="h-[22px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[22px]"
                          alt="EllipseOne"
                        />
                        <Text
                          className="not-italic text-left text-red_A400 w-[auto]"
                          as="h1"
                          variant="h1"
                        >
                          Ksh 10.4M
                        </Text>
                      </div>
                    </Stack>
                    <Stack className="h-[135px] relative w-[100%]">
                      <div className="absolute bg-bluegray_100 flex flex-col h-[max-content] inset-[0] items-start justify-center m-[auto] pb-[5px] rounded-radius8 w-[100%]">
                        <Img
                          src="images/img_rectangle2.png"
                          className="h-[92px] md:h-[auto] sm:h-[auto] object-cover rounded-bl-[9px] rounded-br-[9px] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                          alt="RectangleTwo One"
                        />
                        <div className="flex flex-col gap-[4.02px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[3px] mt-[3px] w-[auto]">
                          <Text
                            className="not-italic text-black_900 text-left w-[auto]"
                            variant="body2"
                          >
                            Car model
                          </Text>
                          <Text
                            className="not-italic text-black_900 text-left w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            Short description
                          </Text>
                        </div>
                      </div>
                      <div className="absolute bottom-[1%] flex flex-col gap-[9.64px] items-center justify-start right-[0] w-[auto]">
                        <Img
                          src="images/img_ellipse1.png"
                          className="h-[22px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[22px]"
                          alt="EllipseOne One"
                        />
                        <Text
                          className="not-italic text-left text-red_A400 w-[auto]"
                          as="h1"
                          variant="h1"
                        >
                          Ksh 10.4M
                        </Text>
                      </div>
                    </Stack>
                    <Stack className="h-[135px] relative w-[100%]">
                      <div className="absolute bg-bluegray_100 flex flex-col h-[max-content] inset-[0] items-start justify-center m-[auto] pb-[5px] rounded-radius8 w-[100%]">
                        <Img
                          src="images/img_rectangle2.png"
                          className="h-[92px] md:h-[auto] sm:h-[auto] object-cover rounded-bl-[9px] rounded-br-[9px] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                          alt="RectangleTwo Two"
                        />
                        <div className="flex flex-col gap-[4.02px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[3px] mt-[3px] w-[auto]">
                          <Text
                            className="not-italic text-black_900 text-left w-[auto]"
                            variant="body2"
                          >
                            Car model
                          </Text>
                          <Text
                            className="not-italic text-black_900 text-left w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            Short description
                          </Text>
                        </div>
                      </div>
                      <div className="absolute bottom-[1%] flex flex-col gap-[9.64px] items-center justify-start right-[0] w-[auto]">
                        <Img
                          src="images/img_ellipse1.png"
                          className="h-[22px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[22px]"
                          alt="EllipseOne Two"
                        />
                        <Text
                          className="not-italic text-left text-red_A400 w-[auto]"
                          as="h1"
                          variant="h1"
                        >
                          Ksh 10.4M
                        </Text>
                      </div>
                    </Stack>
                    <Stack className="h-[135px] relative w-[100%]">
                      <div className="absolute bg-bluegray_100 flex flex-col h-[max-content] inset-[0] items-start justify-center m-[auto] pb-[5px] rounded-radius8 w-[100%]">
                        <Img
                          src="images/img_rectangle2.png"
                          className="h-[92px] md:h-[auto] sm:h-[auto] object-cover rounded-bl-[9px] rounded-br-[9px] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                          alt="RectangleTwo Three"
                        />
                        <div className="flex flex-col gap-[4.02px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[3px] mt-[3px] w-[auto]">
                          <Text
                            className="not-italic text-black_900 text-left w-[auto]"
                            variant="body2"
                          >
                            Car model
                          </Text>
                          <Text
                            className="not-italic text-black_900 text-left w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            Short description
                          </Text>
                        </div>
                      </div>
                      <div className="absolute bottom-[1%] flex flex-col gap-[9.64px] items-center justify-start right-[0] w-[auto]">
                        <Img
                          src="images/img_ellipse1.png"
                          className="h-[22px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[22px]"
                          alt="EllipseOne Three"
                        />
                        <Text
                          className="not-italic text-left text-red_A400 w-[auto]"
                          as="h1"
                          variant="h1"
                        >
                          Ksh 10.4M
                        </Text>
                      </div>
                    </Stack>
                    <Stack className="h-[135px] relative w-[100%]">
                      <div className="absolute bg-bluegray_100 flex flex-col h-[max-content] inset-[0] items-start justify-center m-[auto] pb-[5px] rounded-radius8 w-[100%]">
                        <Img
                          src="images/img_rectangle2.png"
                          className="h-[92px] md:h-[auto] sm:h-[auto] object-cover rounded-bl-[9px] rounded-br-[9px] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                          alt="RectangleTwo Four"
                        />
                        <div className="flex flex-col gap-[4.02px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[3px] mt-[3px] w-[auto]">
                          <Text
                            className="not-italic text-black_900 text-left w-[auto]"
                            variant="body2"
                          >
                            Car model
                          </Text>
                          <Text
                            className="not-italic text-black_900 text-left w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            Short description
                          </Text>
                        </div>
                      </div>
                      <div className="absolute bottom-[1%] flex flex-col gap-[9.64px] items-center justify-start right-[0] w-[auto]">
                        <Img
                          src="images/img_ellipse1.png"
                          className="h-[22px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[22px]"
                          alt="EllipseOne Four"
                        />
                        <Text
                          className="not-italic text-left text-red_A400 w-[auto]"
                          as="h1"
                          variant="h1"
                        >
                          Ksh 10.4M
                        </Text>
                      </div>
                    </Stack>
                    <Stack className="h-[135px] relative w-[100%]">
                      <div className="absolute bg-bluegray_100 flex flex-col h-[max-content] inset-[0] items-start justify-center m-[auto] pb-[5px] rounded-radius8 w-[100%]">
                        <Img
                          src="images/img_rectangle2.png"
                          className="h-[92px] md:h-[auto] sm:h-[auto] object-cover rounded-bl-[9px] rounded-br-[9px] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                          alt="RectangleTwo Five"
                        />
                        <div className="flex flex-col gap-[4.02px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[3px] mt-[3px] w-[auto]">
                          <Text
                            className="not-italic text-black_900 text-left w-[auto]"
                            variant="body2"
                          >
                            Car model
                          </Text>
                          <Text
                            className="not-italic text-black_900 text-left w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            Short description
                          </Text>
                        </div>
                      </div>
                      <div className="absolute bottom-[1%] flex flex-col gap-[9.64px] items-center justify-start right-[0] w-[auto]">
                        <Img
                          src="images/img_ellipse1.png"
                          className="h-[22px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[22px]"
                          alt="EllipseOne Five"
                        />
                        <Text
                          className="not-italic text-left text-red_A400 w-[auto]"
                          as="h1"
                          variant="h1"
                        >
                          Ksh 10.4M
                        </Text>
                      </div>
                    </Stack>
                    <Stack className="h-[135px] relative w-[100%]">
                      <div className="absolute bg-bluegray_100 flex flex-col h-[max-content] inset-[0] items-start justify-center m-[auto] pb-[5px] rounded-radius8 w-[100%]">
                        <Img
                          src="images/img_rectangle2.png"
                          className="h-[92px] md:h-[auto] sm:h-[auto] object-cover rounded-bl-[9px] rounded-br-[9px] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                          alt="RectangleTwo Six"
                        />
                        <div className="flex flex-col gap-[4.02px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[3px] mt-[3px] w-[auto]">
                          <Text
                            className="not-italic text-black_900 text-left w-[auto]"
                            variant="body2"
                          >
                            Car model
                          </Text>
                          <Text
                            className="not-italic text-black_900 text-left w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            Short description
                          </Text>
                        </div>
                      </div>
                      <div className="absolute bottom-[1%] flex flex-col gap-[9.64px] items-center justify-start right-[0] w-[auto]">
                        <Img
                          src="images/img_ellipse1.png"
                          className="h-[22px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[22px]"
                          alt="EllipseOne Six"
                        />
                        <Text
                          className="not-italic text-left text-red_A400 w-[auto]"
                          as="h1"
                          variant="h1"
                        >
                          Ksh 10.4M
                        </Text>
                      </div>
                    </Stack>
                    <Stack className="h-[135px] relative w-[100%]">
                      <div className="absolute bg-bluegray_100 flex flex-col h-[max-content] inset-[0] items-start justify-center m-[auto] pb-[5px] rounded-radius8 w-[100%]">
                        <Img
                          src="images/img_rectangle2.png"
                          className="h-[92px] md:h-[auto] sm:h-[auto] object-cover rounded-bl-[9px] rounded-br-[9px] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                          alt="RectangleTwo Seven"
                        />
                        <div className="flex flex-col gap-[4.02px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[3px] mt-[3px] w-[auto]">
                          <Text
                            className="not-italic text-black_900 text-left w-[auto]"
                            variant="body2"
                          >
                            Car model
                          </Text>
                          <Text
                            className="not-italic text-black_900 text-left w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            Short description
                          </Text>
                        </div>
                      </div>
                      <div className="absolute bottom-[1%] flex flex-col gap-[9.64px] items-center justify-start right-[0] w-[auto]">
                        <Img
                          src="images/img_ellipse1.png"
                          className="h-[22px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[22px]"
                          alt="EllipseOne Seven"
                        />
                        <Text
                          className="not-italic text-left text-red_A400 w-[auto]"
                          as="h1"
                          variant="h1"
                        >
                          Ksh 10.4M
                        </Text>
                      </div>
                    </Stack>
                    <Stack className="h-[135px] relative w-[100%]">
                      <div className="absolute bg-bluegray_100 flex flex-col h-[max-content] inset-[0] items-start justify-center m-[auto] pb-[5px] rounded-radius8 w-[100%]">
                        <Img
                          src="images/img_rectangle2.png"
                          className="h-[92px] md:h-[auto] sm:h-[auto] object-cover rounded-bl-[9px] rounded-br-[9px] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                          alt="RectangleTwo Eight"
                        />
                        <div className="flex flex-col gap-[4.02px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[3px] mt-[3px] w-[auto]">
                          <Text
                            className="not-italic text-black_900 text-left w-[auto]"
                            variant="body2"
                          >
                            Car model
                          </Text>
                          <Text
                            className="not-italic text-black_900 text-left w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            Short description
                          </Text>
                        </div>
                      </div>
                      <div className="absolute bottom-[1%] flex flex-col gap-[9.64px] items-center justify-start right-[0] w-[auto]">
                        <Img
                          src="images/img_ellipse1.png"
                          className="h-[22px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[22px]"
                          alt="EllipseOne Eight"
                        />
                        <Text
                          className="not-italic text-left text-red_A400 w-[auto]"
                          as="h1"
                          variant="h1"
                        >
                          Ksh 10.4M
                        </Text>
                      </div>
                    </Stack>
                  </Grid>
                </div>
              </div>
            </div>
          </div>
          <Stack className="h-[22px] mt-[248px] relative w-[100%]">
            <Line className="absolute bg-gray_400 h-[1px] inset-x-[0] mx-[auto] top-[0] w-[100%]" />
            <Text
              className="absolute h-[max-content] inset-y-[0] left-[44%] my-[auto] not-italic text-black_900 text-left w-[auto]"
              variant="body1"
            >
              About us
            </Text>
          </Stack>
          <Text
            className="md:ml-[0] sm:ml-[0] ml-[432px] mt-[16px] not-italic text-black_900 text-left w-[auto]"
            variant="body3"
          >
            About us details
          </Text>
        </div>
      </div>
    </>
  );
};

export default FrameOnePage;

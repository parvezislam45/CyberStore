import React from "react";

const Nav2 = () => {
  return (
    <div>
      <header className="p-4 bg-white mt-5">
        <div className="" bis_skin_checked="1">
          <ul className="container flex justify-between items-center h-10 mx-auto px-10">
            <li className="">
              <a href="">
                <div className="flex justify-between gap-3 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-phone w-6 h-6"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />{" "}
                    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />{" "}
                  </svg>
                  <div>
                    <h1 className="text-normal text-blacks text-sm">
                      Mobile
                      <br />
                      Phones
                    </h1>
                  </div>
                </div>
              </a>
            </li>
            <li className="">
              <a href="">
                <div className="flex justify-between gap-3 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-controller w-7 h-7"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z" />{" "}
                    <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z" />{" "}
                  </svg>
                  <div>
                    <h1 className="text-normal text-black text-sm">
                      Movies &<br />
                      Video Games
                    </h1>
                  </div>
                </div>
              </a>
            </li>
            <li className="">
              <a href="">
                <div className="flex justify-between gap-3 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    className="w-6 h-6"
                  >
                    <path d="M7 17H2a2 2 0 0 1-2-2V2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-5l4 2v1H3v-1l4-2zM2 2v11h16V2H2z" />
                  </svg>
                  <div>
                    <h1 className="text-normal text-black text-sm">
                      Computers
                    </h1>
                  </div>
                </div>
              </a>
            </li>
            <li className="">
              <a href="">
                <div className="flex justify-between gap-3 items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/340/340760.png"
                    alt=""
                    className="w-10 h-10"
                  />
                  <div>
                    <h1 className="text-normal text-black text-sm">
                      Accessories
                    </h1>
                  </div>
                </div>
              </a>
            </li>
            <li className="">
              <a href="">
                <div className="flex justify-between gap-3 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-camera w-6 h-6"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />{" "}
                    <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />{" "}
                  </svg>
                  <div>
                    <h1 className="text-normal text-black text-sm">
                      Camera
                      <br />
                      Audio & Video
                    </h1>
                  </div>
                </div>
              </a>
            </li>
            <li className="">
              <a href="">
                <div className="flex justify-between gap-3 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-6 h-6"
                  >
                    <path d="M256 32C112.9 32 4.563 151.1 0 288v104C0 405.3 10.75 416 23.1 416S48 405.3 48 392V288c0-114.7 93.34-207.8 208-207.8C370.7 80.2 464 173.3 464 288v104C464 405.3 474.7 416 488 416S512 405.3 512 392V287.1C507.4 151.1 399.1 32 256 32zM160 288L144 288c-35.34 0-64 28.7-64 64.13v63.75C80 451.3 108.7 480 144 480L160 480c17.66 0 32-14.34 32-32.05v-127.9C192 302.3 177.7 288 160 288zM368 288L352 288c-17.66 0-32 14.32-32 32.04v127.9c0 17.7 14.34 32.05 32 32.05L368 480c35.34 0 64-28.7 64-64.13v-63.75C432 316.7 403.3 288 368 288z" />
                  </svg>
                  <div>
                    <h1 className="text-normal text-black text-sm">
                      Headphones
                    </h1>
                  </div>
                </div>
              </a>
            </li>
            <li className="">
              <a href="">
                <div className="flex justify-between gap-3 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-laptop w-6 h-6"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />{" "}
                  </svg>
                  <div>
                    <h1 className="text-normal text-black text-sm">
                      Laptops &<br />
                      Tablets
                    </h1>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Nav2;

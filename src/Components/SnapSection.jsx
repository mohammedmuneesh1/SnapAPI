import FileSaver from "file-saver";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { cloudinaryAxios, pikwyAxios } from "../Configs/Axios";
export default function SnapSection() {
  const [imageInfo, setImageInfo] = useState({
    websiteUrl: "",
    imageUrl: "",
    imageSize: "",
    imageDate: null,
  });
  const [loading, setLoading] = useState(false);

  const urlSnap = async (e) => {
    e.preventDefault();
    try {
      const urlvalue = e.target.url.value.trim();
      setLoading(true);
      const response = await pikwyAxios.get("",{
        params:{
          u:`${urlvalue}`
        }

      })
      if (response.status === 200) {
        const formData = new FormData();
        formData.append("file", response.data, "image.jpeg");
        formData.append("upload_preset", "fpnqm7dy");
        const cloudinaryUploadResponse = await cloudinaryAxios.post(process.env.REACT_APP_CLOUDINARY_FOLDER,formData)
        if (cloudinaryUploadResponse.status === 200) {
          setImageInfo({
            websiteUrl: urlvalue,
            imageDate: new Date(
              cloudinaryUploadResponse.data.created_at
            ).toLocaleString(),
            imageUrl: cloudinaryUploadResponse.data.url,
            imageSize: `${(
              cloudinaryUploadResponse.data.bytes /
              (1024 * 1024)
            ).toFixed(2)} MB`,
          });
          setLoading(false);
        }
      }
    } catch (error) {
      // console.log(error)
      setLoading(false);
      return Swal.fire({
        icon: "error",
        showConfirmButton: false,
        text: "We are currently experiencing network issues. Please refresh the website or try again later. Thank you for your patience.",
        timer: 2000,
      });
    }
  };

  const downloadImageFn = () => {
    FileSaver(imageInfo.imageUrl, "snapApi-Screenshot.jpeg");
  };

  return (
    <div className="max-w-screen min-h-145 bg-indigo-950 py-6">
      <div className="max-w-7xl      mx-auto">
        <div className="mb-8 text-white  text-center">
          <h2
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-duration="1000"
            className=" text-2xl sm:text-3xl lg:text-5xl font-semibold sm:font-bold mb-3 tracking-wide sm:tracking-wider"
          >
            Create A Sleek Website Screenshot.
          </h2>
          <p
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="1500"
            data-aos-once="true"
            className="text-lg lg:text-xl opacity-80"
          >
            Simplify full-page webpage screenshot capture effortlessly.
          </p>
        </div>
        {/*Searchbar Start Here */}
        <form
          onSubmit={urlSnap}
          data-aos="fade-zoom-in"
          data-aos-delay="1000"
          data-aos-easing="linear"
          data-aos-once="true"
          data-aos-duration="1000"
          className="max-w-[480px] w-full px-4 mx-auto"
        >
          <div className="relative">
            <input
              type="url"
              name="url"
              autoComplete="off"
              className="w-full border h-12 shadow p-4 rounded-full outline-none bg-white "
              placeholder="Enter Website URL"
            />
            <button type="submit">
              <svg
                className="text-teal-400 h-5 w-5 absolute top-3.5 right-3 fill-current dark:text-teal-300"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                style={{ enableBackground: "new 0 0 56.966 56.966" }}
                xmlSpace="preserve"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"></path>
              </svg>
            </button>
          </div>
        </form>
        {/*Searchbar End Here */}

        {loading ? (
          <>
            <div
              aria-label="Loading..."
              role="status"
              className="flex items-center space-x-2 flex justify-center pt-8"
            >
              <svg
                className="h-10 w-10 animate-spin stroke-gray-300"
                viewBox="0 0 256 256"
              >
                <line
                  x1="128"
                  y1="32"
                  x2="128"
                  y2="64"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                ></line>
                <line
                  x1="195.9"
                  y1="60.1"
                  x2="173.3"
                  y2="82.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                ></line>
                <line
                  x1="224"
                  y1="128"
                  x2="192"
                  y2="128"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                ></line>
                <line
                  x1="195.9"
                  y1="195.9"
                  x2="173.3"
                  y2="173.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                ></line>
                <line
                  x1="128"
                  y1="224"
                  x2="128"
                  y2="192"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                ></line>
                <line
                  x1="60.1"
                  y1="195.9"
                  x2="82.7"
                  y2="173.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                ></line>
                <line
                  x1="32"
                  y1="128"
                  x2="64"
                  y2="128"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                ></line>
                <line
                  x1="60.1"
                  y1="60.1"
                  x2="82.7"
                  y2="82.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                ></line>
              </svg>
              <span className=" text-xl sm:text-2xl md:text-3xl font-medium text-gray-300">
                Loading...
              </span>
            </div>
          </>
        ) : (
          <>
            {imageInfo.imageUrl !== "" && (
              <div data-aos="fade-up" data-aos-once="true" data-aos-delay="200" data-aos-duration="1000" className="max-w-7xl min-h-20 bg-white rounded-md p-4  mt-6 sm:mt-8 md:mt-12 lg:mt-16 shadow-md">
                <h1 className=" text-center text-xl sm:text-2xl md:text-4xl font-bold tracking-wider  text-gray-700 mb-8  underline decoration-2">
                  Screenshot Details
                </h1>

                <div className=" max-w-full">
                  <h3 className="font-semibold text-xs sm:text-base  sm:pb-1  whitespace-nowrap">
                    Screenshot link:
                    <a
                      href={imageInfo.imageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-medium  break-words "
                    >
                      {imageInfo.imageUrl}
                    </a>
                  </h3>
                  <h3 className="font-semibold text-xs sm:text-base  sm:pb-1">
                    URL:
                    <a
                      href={imageInfo.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-medium"
                    >
                      {imageInfo.websiteUrl}
                    </a>
                  </h3>
                  <h3 className="font-semibold text-xs sm:text-base sm:pb-1">
                    Created:
                    <span className="sm:pl-1 text-gray-600 font-medium">
                      {imageInfo.imageDate}
                    </span>
                  </h3>
                  <h3 className="font-semibold text-xs sm:text-base  sm:pb-1">
                    Image Size:
                    <span className="sm:pl-1 text-gray-600 font-medium">
                      {imageInfo.imageSize}
                    </span>{" "}
                  </h3>

                  {/*download button start */}
                  <button
                    onClick={downloadImageFn}
                    className="bg-green-400 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded inline-flex items-center  sm:mt-2"
                  >
                    <svg
                      className="fill-current w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                    </svg>
                    <span>Download</span>
                  </button>
                  {/*download button start */}

                </div>
                <div data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000" data-aos-once="true" className="max-w-7xl md:h-128 mx-auto mt-4 md:mt-8">
                  {" "}
                  {/* Center the image within the parent div */}
                  <img
                    src={imageInfo.imageUrl}
                    className="w-full h-full"
                    alt="snapApi Screeshot"
                  />
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

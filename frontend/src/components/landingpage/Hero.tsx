"use client"
import { cn } from "@/lib/utils"
import { Lightbulb } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"
import { buttonVariants } from "../ui/button"
import { HeroImages } from "./HeroImages"
import { motion as m } from "framer-motion"
const Hero = ({ data }: { data: any }) => {
  return (
    <div className="relative mb-20 flex w-full flex-col items-center  py-20">
      {/* BUBBLES BACKGROUND */}
      <Image
        src="/backgrounds/bubbles.svg"
        alt=""
        className="absolute bottom-0 left-0 -z-10 h-[848px] w-full"
        width={1920}
        height={1080}
      />

      <div className="relative flex w-full max-w-xl flex-col items-center gap-8 px-2 2xl:max-w-2xl">
        <h1 className="text-center text-4xl font-bold text-primary xs:text-5xl xl:text-6xl">
          {data?.heading ?? "Witaj w Elektroniku"}
        </h1>
        <p className="text-center text-base text-primary-foreground xs:text-lg xl:text-xl ">
          {data?.text ?? "Zapraszamy do zapoznania się z naszą ofertą."}
        </p>
        {/* BUTTON */}
        <div className="mt-20 flex flex-col gap-8 sm:flex-row">
          <Link
            href={data.linkPrimary.link}
            className={cn(
              buttonVariants({ size: "lg" }),
              "w-full max-w-xs border-[3px] border-primary py-6 text-lg"
            )}
            target={data.linkPrimary.isExternal ? "_blank" : "_self"}
          >
            {data.linkPrimary.title}
          </Link>
          <Link
            href={data.linkSecondary.link}
            target={data.linkSecondary.isExternal ? "_blank" : "_self"}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "w-full max-w-xs py-6 text-lg"
            )}
          >
            Dowiedz się więcej <Lightbulb className="ml-2 h-5 w-5" />
          </Link>
        </div>
        {/* ARROWS */}
        <m.div
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          className="absolute -left-[250px] top-0 hidden md:block"
        >
          <LeftArrow />
        </m.div>
        <m.div
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          className="-inset-1rotate-12 absolute -right-[200px] top-[20px] hidden md:block"
        >
          <RightArrow />
        </m.div>
      </div>
      <div className="mt-20 w-full ">
        <Suspense
          fallback={
            <div className="flex h-full w-full items-center justify-center">
              Loading...
            </div>
          }
        >
          <HeroImages />
        </Suspense>
      </div>
    </div>
  )
}

function Photo({ src, className }: { src: string; className?: string }) {
  return (
    <div
      className={cn(
        "relative h-[200px] rounded-3xl border-4 border-primary bg-primary/10 p-2 xs:h-[400px]",
        className
      )}
    >
      <div
        className={
          "h-full w-full rounded-2xl bg-cover bg-center bg-no-repeat  outline-[20px] outline-primary  "
        }
        style={{ backgroundImage: `url('${src}')` }}
      />
    </div>
  )
}
function LeftArrow() {
  return (
    <svg
      width="176"
      height="207"
      viewBox="0 0 176 207"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1818_1832)">
        <path
          d="M160.776 133.165C160.648 134.538 160.776 135.053 160.648 135.568C146.565 166.97 126.592 188.248 99.7057 196.313C92.9201 198.372 85.8783 198.029 78.9647 195.627C64.1131 190.65 53.8706 174.005 52.9744 153.585C52.4623 142.946 53.3585 132.65 57.7115 123.384C61.4244 122.698 65.1373 122.183 68.5942 121.153C74.2275 119.437 78.8366 115.491 81.6533 108.455C83.8299 103.307 83.8299 98.1594 81.7814 95.4138C79.0927 91.8103 75.5078 91.8103 72.5631 94.0411C68.4661 97.1298 64.6252 100.905 61.0403 104.852C58.7358 107.426 56.8153 110.858 54.8948 113.946C40.4273 111.029 34.2819 92.6683 40.2993 70.7038C42.3478 70.0174 44.5243 69.331 46.5728 68.473C54.1267 65.041 59.8881 58.6919 62.5767 48.3961C63.601 44.4493 63.9851 40.1594 61.2964 36.7274C59.2479 34.1535 55.663 34.1535 52.0782 36.899C46.4448 41.3606 42.4758 48.0529 39.019 55.26C37.8667 57.834 36.7144 60.4079 35.6902 62.9819C13.2848 59.5499 -2.59108 32.6091 6.3711 6.18308C4.70669 6.35467 3.29835 6.18306 2.53017 6.86945C1.63395 7.72744 1.12183 9.61502 0.865763 11.1594C-1.18273 25.7452 0.0975738 39.3014 8.0355 50.4552C13.9249 58.8635 21.0947 64.5263 29.2886 68.3014C30.4409 68.8162 31.5932 69.331 32.7455 70.0174C32.8735 70.0174 33.0015 70.3605 33.3856 71.0469C33.2576 72.5913 33.2576 74.4789 33.0015 76.3665C30.3129 99.3605 34.922 111.372 50.9259 122.011C50.4138 124.071 49.9016 126.473 49.2615 128.704C45.9327 141.917 45.6766 155.13 49.0054 168.514C54.3827 190.307 68.3381 204.378 86.0064 205.923C95.6087 206.781 104.827 204.55 113.789 199.917C135.426 188.591 152.454 170.059 163.593 142.26C164.233 140.887 164.745 139.343 165.386 137.97C165.514 137.798 165.77 137.627 166.538 137.112C167.562 142.946 167.178 148.437 166.922 153.929C166.794 159.248 166.41 164.739 166.154 170.574C169.483 170.059 170.763 167.656 171.531 164.739C172.299 161.307 173.324 157.875 173.452 154.443C173.708 145.177 173.836 135.739 173.452 126.301C173.067 118.923 170.123 116.863 165.642 120.124C156.167 127.159 146.693 134.366 137.219 141.574C135.682 142.775 134.402 144.319 132.61 146.207C135.426 149.467 137.475 148.094 139.395 146.893C146.309 142.088 153.223 137.798 160.776 133.165ZM57.4555 41.8753C56.3032 53.7156 50.6698 61.0943 42.7319 61.6091C46.5728 53.7156 50.0297 46.1653 57.4555 41.8753ZM77.3003 99.8754C75.5078 110 70.3866 114.804 62.5767 113.775C66.6737 107.254 70.5146 101.591 77.3003 99.8754Z"
          fill="#F4F4F4"
        />
      </g>
      <g clipPath="url(#clip1_1818_1832)">
        <m.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
          d="M163.072 126.982C162.944 128.355 163.072 128.87 162.944 129.385C148.861 160.787 128.888 182.065 102.002 190.13C95.216 192.189 88.1742 191.846 81.2606 189.444C66.409 184.467 56.1665 167.822 55.2703 147.402C54.7582 136.763 55.6544 126.467 60.0074 117.201C63.7203 116.515 67.4332 116 70.8901 114.97C76.5234 113.254 81.1325 109.308 83.9492 102.272C86.1258 97.1242 86.1258 91.9763 84.0773 89.2307C81.3886 85.6272 77.8037 85.6272 74.859 87.858C70.762 90.9467 66.9211 94.7219 63.3362 98.6686C61.0317 101.243 59.1112 104.674 57.1907 107.763C42.7232 104.846 36.5778 86.4852 42.5952 64.5207C44.6437 63.8343 46.8202 63.1479 48.8687 62.2899C56.4226 58.8579 62.184 52.5089 64.8726 42.213C65.8969 38.2663 66.281 33.9763 63.5923 30.5443C61.5438 27.9704 57.9589 27.9704 54.3741 30.716C48.7407 35.1775 44.7717 41.8698 41.3149 49.0769C40.1626 51.6509 39.0103 54.2248 37.9861 56.7988C15.5807 53.3669 -0.295177 26.426 8.66699 3.72541e-07C7.00259 0.171598 5.59425 -1.02908e-05 4.82606 0.68638C3.92985 1.54437 3.41772 3.43194 3.16166 4.97632C1.11317 19.5621 2.39347 33.1183 10.3314 44.2722C16.2208 52.6804 23.3906 58.3432 31.5845 62.1183C32.7368 62.6331 33.8891 63.1479 35.0414 63.8343C35.1694 63.8343 35.2974 64.1775 35.6815 64.8639C35.5535 66.4082 35.5535 68.2958 35.2974 70.1834C32.6088 93.1775 37.2179 105.189 53.2218 115.828C52.7097 117.888 52.1975 120.29 51.5574 122.521C48.2286 135.734 47.9725 148.947 51.3013 162.331C56.6786 184.124 70.634 198.195 88.3023 199.74C97.9046 200.598 107.123 198.367 116.085 193.734C137.722 182.408 154.75 163.876 165.889 136.077C166.529 134.704 167.041 133.16 167.682 131.787C167.81 131.615 168.066 131.444 168.834 130.929C169.858 136.763 169.474 142.254 169.218 147.746C169.09 153.065 168.706 158.556 168.45 164.39C171.779 163.876 173.059 161.473 173.827 158.556C174.595 155.124 175.619 151.692 175.747 148.26C176.004 138.994 176.132 129.556 175.747 120.118C175.363 112.74 172.419 110.68 167.938 113.941C158.463 120.976 148.989 128.183 139.515 135.39C137.978 136.592 136.698 138.136 134.906 140.024C137.722 143.284 139.771 141.911 141.691 140.71C148.605 135.905 155.519 131.615 163.072 126.982ZM59.7514 35.6923C58.5991 47.5325 52.9657 54.9112 45.0278 55.426C48.8687 47.5325 52.3256 39.9822 59.7514 35.6923ZM79.5962 93.6923C77.8037 103.817 72.6825 108.621 64.8726 107.592C68.9696 101.071 72.8105 95.4083 79.5962 93.6923Z"
          stroke="#354375"
          className="fill-left"
          strokeOpacity="0.976471"
        />
      </g>
      <defs>
        <clipPath id="clip0_1818_1832">
          <rect
            width="199.92"
            height="173.694"
            fill="white"
            transform="matrix(-5.23461e-08 1 1 3.6501e-08 0 6.18307)"
          />
        </clipPath>
        <clipPath id="clip1_1818_1832">
          <rect
            width="199.92"
            height="173.694"
            fill="white"
            transform="matrix(-3.26761e-08 1 1 5.84736e-08 2.2959 0)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
function RightArrow() {
  return (
    <svg
      width="167"
      height="194"
      viewBox="0 0 167 194"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1818_1827)">
        <path
          d="M86.4567 144.248C83.7095 141.729 80.135 139.237 77.4049 135.821C71.7154 128.612 66.3075 121.095 60.8995 113.578C50.7 99.2501 40.4651 84.7098 29.3848 69.0858C40.6149 70.6075 50.3538 80.1653 62.2478 73.6773C60.7152 71.462 60.0452 69.4328 59.1826 69.2467C45.6987 66.1734 33.2333 59.223 21.2246 51.019C11.3115 44.4144 7.45928 48.2538 8.64719 62.399C9.9411 77.1815 10.1264 92.2984 10.9452 107.224C11.0171 109.657 12.0745 112.016 12.7276 114.942C18.8311 108.639 18.8311 108.639 19.2682 75.2608C20.9945 77.6409 22.4565 79.4312 23.7601 81.2693C36.7434 100.336 49.5683 119.45 62.833 138.208C67.1665 144.265 72.0628 149.705 77.2929 154.152C86.5908 162.058 94.9141 159.101 100.239 146.115C102.963 139.492 104.525 131.881 105.77 124.365C107.19 115.904 107.555 107.092 108.623 98.5145C109.447 92.4647 110.78 86.4841 111.885 80.1264C117.219 81.1953 119.932 85.5089 122.891 89.3021C135.38 105.394 145.705 123.477 154.535 143.573C155.593 145.932 156.369 148.598 157.866 150.601C158.712 151.685 160.63 152.222 161.897 151.84C162.531 151.648 163.409 148.929 163.356 147.606C162.913 143.947 162.084 139.957 160.885 136.749C152.387 113.652 141.163 93.1626 127.125 75.7531C124.359 72.1247 121.031 69.1122 117.65 66.7849C111.47 62.6245 106.279 64.4133 103.169 72.7147C100.638 79.5023 99.2349 87.0658 98.1482 94.5337C96.4829 105.523 95.8385 116.651 94.1732 127.64C93.1559 133.525 91.8573 139.718 86.4567 144.248Z"
          fill="#F4F4F4"
        />
      </g>
      <g clipPath="url(#clip1_1818_1827)">
        <m.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
          className="fill-right"
          d="M88.1051 135.302C85.3579 132.784 81.7835 130.292 79.0533 126.876C73.3639 119.667 67.9559 112.149 62.5479 104.632C52.3484 90.3044 42.1136 75.7641 31.0332 60.1401C42.2633 61.6618 52.0023 71.2197 63.8963 64.7316C62.3637 62.5163 61.6936 60.4871 60.8311 60.301C47.3472 57.2278 34.8817 50.2773 22.8731 42.0734C12.9599 35.4688 9.10772 39.3082 10.2956 53.4533C11.5895 68.2359 11.7748 83.3528 12.5936 98.2786C12.6655 100.711 13.723 103.07 14.376 105.997C20.4795 99.6933 20.4795 99.6933 20.9167 66.3152C22.643 68.6952 24.1049 70.4856 25.4085 72.3237C38.3918 91.3901 51.2168 110.504 64.4815 129.263C68.8149 135.319 73.7112 140.759 78.9413 145.206C88.2393 153.112 96.5625 150.155 101.888 137.17C104.612 130.547 106.173 122.936 107.418 115.42C108.839 106.959 109.203 98.1468 110.271 89.5688C111.095 83.5191 112.429 77.5385 113.534 71.1807C118.867 72.2496 121.581 76.5633 124.54 80.3564C137.029 96.4482 147.354 114.531 156.184 134.627C157.241 136.986 158.017 139.653 159.515 141.655C160.36 142.739 162.279 143.276 163.546 142.894C164.179 142.703 165.058 139.983 165.004 138.661C164.562 135.001 163.732 131.012 162.533 127.803C154.036 104.706 142.812 84.2169 128.773 66.8075C126.008 63.179 122.679 60.1665 119.299 57.8393C113.118 53.6788 107.927 55.4677 104.817 63.769C102.287 70.5567 100.883 78.1201 99.7966 85.588C98.1313 96.5774 97.4869 107.705 95.8216 118.694C94.8044 124.579 93.5057 130.773 88.1051 135.302Z"
          stroke="#354DFC"
        />
      </g>
      <defs>
        <clipPath id="clip0_1818_1827">
          <rect
            width="145.061"
            height="143.738"
            fill="white"
            transform="matrix(-0.9574 0.288764 0.164034 0.986455 140.436 9.41071)"
          />
        </clipPath>
        <clipPath id="clip1_1818_1827">
          <rect
            width="145.061"
            height="143.738"
            fill="white"
            transform="matrix(-0.9574 0.288764 0.164034 0.986455 142.084 0.465057)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
export default Hero

import React from 'react';

export const LogoWithText =  (props) => {
  return <><img
    src={`/img/logo-morph.svg`}
    alt="morph logo"
    className={"w-[128px] md:w-[128px]" + props.className}
    {...props}
  /></>
}

export const LinkedIn = ({
  fill,
  size
}) => {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size || "24"} height={size || "24"} viewBox="0 0 10 9" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M1 2C1.55228 2 2 1.55228 2 1C2 0.447715 1.55228 0 1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2ZM2 9V3H0V9H2ZM3.5 2H5.5V3.49639C5.61312 2.97694 6.21481 2 7.49922 2C8.78661 2 10 2.22698 10 5V9H8.4V5.03955C8.4 4.65066 8.09658 3.53955 6.99922 3.53955C5.83419 3.53955 5.51747 4.70903 5.5 5.01444V9H3.5V2Z" fill={fill || "#CCCCCC"} />
  </svg>
}

export const Twitter = ({
  fill,
  size,
  className,
}) => (
  <svg
    className={className}
    fill="none"
    height={size || "24"}
    viewBox="0 0 24 24"
    width={size || "24"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.3159 7.3271C20.3159 15.1109 15.4038 20.7158 8.17884 20.9618C5.12334 21.2078 3.03002 20.2418 1.15625 18.7828C3.24957 19.0288 6.06834 18.3088 7.45243 16.8329C5.36007 16.8329 4.17834 15.6029 3.4863 13.9329H5.36007C3.48534 13.197 2.06784 11.739 2.06784 9.31406C2.52316 9.56005 2.99661 9.78804 3.94161 9.78804C2.30457 8.82107 1.3758 5.65815 2.54034 3.70819C4.63366 6.13313 7.19948 8.32808 11.4367 8.55807C10.255 3.70819 16.3488 1.24826 18.9156 4.42818C20.0963 4.18218 20.7893 3.70819 21.7009 3.19821C21.4642 4.42818 20.7722 5.14816 19.8262 5.62315C20.755 5.62315 21.4642 5.37715 22.1562 4.90316C21.9367 5.86914 21.0079 6.85312 20.3159 7.3271V7.3271Z"
      fill={fill || "#CCCCCC"}
    />
  </svg>
);

export const Website = ({
  fill,
  size,
  className,
}) => {
  return (
    <svg
      className={className}
      fill="none"
      height={size || "25"}
      viewBox="0 0 18 18"
      width={size || "25"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M11.9778 9.99999C11.8707 12.3982 11.385 14.4762 10.7148 15.9506C9.87445 17.7993 9.12031 17.9984 9.00142 18C9.00087 18 9.00031 18 8.99976 18C8.99934 18 8.99892 18 8.99851 18C8.8794 17.9983 8.12539 17.799 7.2852 15.9506C6.61503 14.4762 6.12927 12.3982 6.02219 9.99999H11.9778ZM13.9796 9.99999C13.8582 12.9637 13.2025 15.5885 12.226 17.4045C15.3052 16.2217 17.5695 13.3955 17.9448 9.99999H13.9796ZM5.77412 17.4047C2.69466 16.2221 0.430068 13.3957 0.0546875 9.99999H4.02038C4.14178 12.9638 4.79756 15.5887 5.77412 17.4047ZM6.02219 7.99999C6.12927 5.60176 6.61503 3.5238 7.2852 2.04943C8.12898 0.193115 8.88585 0 9 0C9.11415 0 9.87102 0.193115 10.7148 2.04943C11.385 3.5238 11.8707 5.60176 11.9778 7.99999H6.02219ZM4.02038 7.99999H0.0546875C0.430068 4.60424 2.69467 1.77789 5.77414 0.595287C4.79757 2.41127 4.14179 5.03613 4.02038 7.99999ZM12.226 0.595523C15.3051 1.77827 17.5695 4.60447 17.9448 7.99999H13.9796C13.8582 5.03626 13.2025 2.4115 12.226 0.595523Z"
        fill={fill || "#F7F7F7"}
        fillRule="evenodd"
      />
    </svg>
  );
};

export const TwitterX = ({
  fill,
  size,
  className,
}) => (
  <svg
    className={className}
    fill="none"
    height={size || "25"}
    viewBox="0 0 24 25"
    width={size || "24"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.4027 10.4686L21.8482 2H20.0838L13.619 9.3532L8.45547 2H2.5L10.3082 13.1193L2.5 22H4.26443L11.0915 14.2348L16.5445 22H22.5L14.4023 10.4686H14.4027ZM11.9861 13.2173L11.195 12.1101L4.90018 3.29968H7.61025L12.6902 10.4099L13.4813 11.5172L20.0847 20.7594H17.3746L11.9861 13.2177V13.2173Z"
      fill={fill || "#CCCCCC"}
    />
  </svg>
);

export const Discord = ({
  fill,
  size,
  className,
}) => (
  <svg
    className={className}
    fill="none"
    height={size || "24"}
    viewBox="0 0 24 24"
    width={size || "24"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.6695 5.02043C19.6634 5.00856 19.6532 4.99925 19.6409 4.99418C18.2112 4.33826 16.7026 3.87053 15.1526 3.60271C15.1386 3.60009 15.124 3.60198 15.1111 3.60811C15.0981 3.61423 15.0874 3.62429 15.0805 3.63683C14.8751 4.00969 14.6886 4.39268 14.5218 4.78433C12.851 4.53072 11.1516 4.53072 9.4808 4.78433C9.31287 4.39169 9.12339 4.0086 8.91324 3.63683C8.90603 3.62456 8.8953 3.61474 8.88243 3.60865C8.86956 3.60256 8.85515 3.60049 8.84109 3.60271C7.29098 3.86997 5.78223 4.33773 4.35279 4.99422C4.34056 4.99941 4.33023 5.00827 4.32324 5.01957C1.46465 9.2885 0.681579 13.4525 1.06573 17.5649C1.06681 17.5749 1.06991 17.5847 1.07483 17.5936C1.07976 17.6024 1.08642 17.6102 1.09442 17.6164C2.75895 18.8489 4.62074 19.7896 6.60035 20.3985C6.6143 20.4027 6.62918 20.4025 6.64301 20.398C6.65684 20.3934 6.66895 20.3848 6.67772 20.3732C7.10289 19.7946 7.47963 19.182 7.8041 18.5416C7.80856 18.5328 7.81111 18.5232 7.81157 18.5133C7.81204 18.5035 7.81041 18.4936 7.8068 18.4845C7.80319 18.4753 7.79768 18.467 7.79063 18.4601C7.78358 18.4532 7.77515 18.4479 7.76589 18.4445C7.1718 18.2172 6.59665 17.9432 6.04584 17.625C6.03584 17.6192 6.02743 17.6109 6.02137 17.601C6.01532 17.5911 6.01179 17.5799 6.0111 17.5683C6.01042 17.5567 6.01259 17.5451 6.01744 17.5346C6.02229 17.524 6.02966 17.5148 6.0389 17.5078C6.15481 17.4212 6.2687 17.332 6.38049 17.2402C6.3903 17.2321 6.40216 17.2269 6.41475 17.2252C6.42734 17.2235 6.44015 17.2254 6.45174 17.2306C10.0603 18.8775 13.9671 18.8775 17.533 17.2306C17.5446 17.2251 17.5576 17.2229 17.5703 17.2245C17.5831 17.226 17.5952 17.2312 17.6051 17.2393C17.7171 17.3316 17.8312 17.4212 17.9476 17.5078C17.9569 17.5148 17.9643 17.5239 17.9692 17.5344C17.9742 17.5449 17.9764 17.5565 17.9758 17.5681C17.9752 17.5796 17.9718 17.5909 17.9658 17.6008C17.9598 17.6108 17.9515 17.6191 17.9415 17.625C17.392 17.9459 16.8163 18.2197 16.2206 18.4437C16.2114 18.4472 16.203 18.4526 16.196 18.4596C16.189 18.4666 16.1835 18.475 16.18 18.4842C16.1764 18.4935 16.1749 18.5034 16.1754 18.5132C16.176 18.5231 16.1786 18.5328 16.1831 18.5416C16.513 19.1785 16.8892 19.7903 17.3087 20.3721C17.3172 20.3841 17.3292 20.393 17.3431 20.3977C17.357 20.4025 17.372 20.4027 17.386 20.3984C19.3692 19.7916 21.2342 18.8507 22.9009 17.6164C22.909 17.6105 22.9157 17.6029 22.9207 17.5942C22.9256 17.5854 22.9286 17.5757 22.9295 17.5657C23.3894 12.8114 22.1596 8.68152 19.6695 5.02043ZM8.34302 15.0608C7.25657 15.0608 6.36137 14.0638 6.36137 12.8394C6.36137 11.6149 7.2392 10.6178 8.34302 10.6178C9.45545 10.6178 10.342 11.6236 10.3246 12.8393C10.3246 14.0638 9.44675 15.0608 8.34302 15.0608ZM15.6698 15.0608C14.5834 15.0608 13.6882 14.0638 13.6882 12.8394C13.6882 11.6149 14.566 10.6178 15.6698 10.6178C16.7823 10.6178 17.6688 11.6236 17.6514 12.8393C17.6514 14.0638 16.7823 15.0608 15.6698 15.0608Z"
      fill={fill || "#CCCCCC"}
    />
  </svg>
);

export const Github = ({
  fill,
  size,
  className,
}) => (
  <svg
    className={className}
    fill="none"
    height={size || "24"}
    viewBox="0 0 24 24"
    width={size || "24"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.9996 1.96875C6.3193 1.96875 1.71387 6.57354 1.71387 12.2545C1.71387 16.7988 4.66137 20.6547 8.74801 22.0143C9.2623 22.1095 9.4513 21.7913 9.4513 21.5193C9.4513 21.2744 9.44165 20.4637 9.43715 19.6042C6.57515 20.2265 5.97151 18.3905 5.97151 18.3905C5.50351 17.2019 4.8298 16.8856 4.8298 16.8856C3.89637 16.2473 4.90051 16.2601 4.90051 16.2601C5.93294 16.3327 6.4768 17.3202 6.4768 17.3202C7.39415 18.8926 8.88301 18.4381 9.46994 18.1752C9.56187 17.5105 9.82865 17.0566 10.1231 16.7995C7.83837 16.5397 5.43665 15.6571 5.43665 11.7164C5.43665 10.5933 5.83844 9.67596 6.49672 8.95532C6.39001 8.69625 6.03772 7.65032 6.59637 6.23346C6.59637 6.23346 7.46037 5.95704 9.42558 7.28775C10.2459 7.05954 11.1259 6.94575 12.0002 6.94125C12.8739 6.94511 13.7546 7.05954 14.5768 7.28775C16.5401 5.95704 17.4022 6.23346 17.4022 6.23346C17.9621 7.65032 17.6098 8.69625 17.5031 8.95532C18.1627 9.67532 18.5619 10.5933 18.5619 11.7164C18.5619 15.6667 16.1557 16.5365 13.8652 16.7917C14.2342 17.1112 14.5627 17.7368 14.5627 18.6965C14.5627 20.0729 14.5504 21.1805 14.5504 21.5193C14.5504 21.7932 14.7356 22.114 15.2569 22.013C19.3417 20.6515 22.2853 16.7975 22.2853 12.2545C22.2853 6.57354 17.6799 1.96875 11.9996 1.96875Z"
      fill={fill || "#CCCCCC"}
    />
  </svg>
);

export const YouTuBe = ({
  fill,
  size,
  className,
}) => (
  <svg
    className={className}
    fill="none"
    height={size || "24"}
    viewBox="0 0 24 24"
    width={size || "24"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.9022 6.50346C22.6404 5.51804 21.8694 4.74196 20.8903 4.47858C19.1157 4 11.9999 4 11.9999 4C11.9999 4 4.88403 4 3.1094 4.47858C2.13036 4.742 1.35928 5.51804 1.09757 6.50346C0.62207 8.28958 0.62207 12.0162 0.62207 12.0162C0.62207 12.0162 0.62207 15.7427 1.09757 17.5289C1.35928 18.5143 2.13036 19.258 3.1094 19.5214C4.88403 20 11.9999 20 11.9999 20C11.9999 20 19.1157 20 20.8903 19.5214C21.8694 19.258 22.6404 18.5143 22.9022 17.5289C23.3777 15.7427 23.3777 12.0162 23.3777 12.0162C23.3777 12.0162 23.3777 8.28958 22.9022 6.50346ZM9.67257 15.3996V8.63271L15.62 12.0162L9.67257 15.3996Z"
      fill={fill || "#CCCCCC"}
    />
  </svg>
);

export const Medium = ({
  fill,
  size,
  className,
}) => (
  <svg
    className={className}
    fill="none"
    height={size || "24"}
    viewBox="0 0 24 24"
    width={size || "24"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.4188 11.8306C13.4188 15.3057 10.6209 18.1227 7.17131 18.1227C3.72172 18.1227 0.923828 15.3036 0.923828 11.8306C0.923828 8.35769 3.72172 5.53857 7.17131 5.53857C10.6209 5.53857 13.4188 8.35557 13.4188 11.8306Z"
      fill={fill || "#CCCCCC"}
    />
    <path
      d="M20.273 11.8307C20.273 15.1019 18.8741 17.7533 17.1482 17.7533C15.4224 17.7533 14.0234 15.1019 14.0234 11.8307C14.0234 8.55937 15.4224 5.90796 17.1482 5.90796C18.8741 5.90796 20.273 8.55937 20.273 11.8307Z"
      fill={fill || "#CCCCCC"}
    />
    <path
      d="M23.0782 11.8306C23.0782 14.7601 22.5857 17.1355 21.9785 17.1355C21.3714 17.1355 20.8789 14.7601 20.8789 11.8306C20.8789 8.90108 21.3714 6.52563 21.9785 6.52563C22.5857 6.52563 23.0782 8.89896 23.0782 11.8306Z"
      fill={fill || "#CCCCCC"}
    />
  </svg>
);

export const Telegram = ({
  fill,
  size,
  className,
}) => (
  <svg
    className={className}
    height={size || "24"}
    version="1.1"
    viewBox="0 0 25 24"
    width={size || "25"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.1304 18.7457C21.5068 17.5907 23.2704 6.07998 23.4884 3.81182C23.5542 3.12488 23.3371 2.6684 22.9118 2.46463C22.3975 2.21726 21.6358 2.34095 20.7522 2.6595C19.5402 3.09641 4.04667 9.67486 3.15151 10.0557C2.30262 10.4161 1.5 10.8094 1.5 11.3789C1.5 11.7793 1.73758 12.0044 2.39249 12.2384C3.0741 12.4814 4.79056 13.0019 5.80407 13.2813C6.7802 13.5509 7.89159 13.3169 8.51447 12.9298C9.17471 12.5196 16.7943 7.42094 17.3415 6.97425C17.8878 6.52756 18.3239 7.09972 17.8772 7.5473C17.4305 7.99399 12.2001 13.0704 11.5105 13.7734C10.6732 14.6267 11.2676 15.5112 11.8291 15.8653C12.4706 16.2693 17.0843 19.3641 17.7793 19.8606C18.4742 20.3572 19.179 20.5823 19.8241 20.5823C20.4692 20.5823 20.8091 19.7325 21.1304 18.7457Z"
      fill={fill || "#CCCCCC"}
    />
  </svg>
);

export const Forum = ({
  size = "60",
  fill = "#D0D0D0",
  className = "",
}) => {
  return (
    <svg
      className={className}
      fill="none"
      height={size}
      viewBox="0 0 60 60"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M25.8871 41.8382C24.571 41.8382 21.6919 41.6737 20.3758 41.4269L11.0806 46.7737V37.4785C6.80323 33.7769 4.5 28.6769 4.5 22.6721C4.5 12.3898 14.0419 3.99951 25.8871 3.99951C35.7581 3.99951 45.629 12.3898 45.629 22.7544C45.629 33.0366 37.7323 41.8382 25.8871 41.8382ZM37.4032 22.9189C37.4032 21.5205 36.3339 20.4511 34.9355 20.4511C33.5371 20.4511 32.4677 21.5205 32.4677 22.9189C32.4677 24.3173 33.5371 25.3866 34.9355 25.3866C36.3339 25.3866 37.4032 24.3173 37.4032 22.9189ZM27.5323 22.9189C27.5323 21.5205 26.4629 20.4511 25.0645 20.4511C23.6661 20.4511 22.5968 21.5205 22.5968 22.9189C22.5968 24.3173 23.6661 25.3866 25.0645 25.3866C26.4629 25.3866 27.5323 24.3173 27.5323 22.9189ZM17.6613 22.9189C17.6613 21.5205 16.5919 20.4511 15.1935 20.4511C13.7952 20.4511 12.7258 21.5205 12.7258 22.9189C12.7258 24.3173 13.7952 25.3866 15.1935 25.3866C16.5919 25.3866 17.6613 24.3173 17.6613 22.9189ZM48.9195 20.4506L48.8373 19.0522C52.9502 22.4248 55.5002 27.2781 55.5002 32.6248C55.5002 38.6297 52.2921 43.8942 47.2744 47.349V56.6442L38.0615 50.9684C36.7454 51.2151 35.4292 51.2974 34.1131 51.2974C27.7792 51.2974 23.255 48.9942 19.3066 45.1281H24.2421C38.555 45.1281 48.9195 35.9974 48.9195 22.9184V20.4506Z"
        fill={fill || "#CCCCCC"}
        fillRule="evenodd"
      />
    </svg>
  );
};

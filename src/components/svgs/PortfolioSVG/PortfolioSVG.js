import React, { useContext } from "react";
import { ThemeContext } from "../../Context";

const PortfolioSVG = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <svg
      // width="800"
      // height="70"
      viewBox="0 0 1268 108"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      // xmlns="http://www.w3.org/2000/svg"
      className="max-w-3xl"
    >
      <path
        d="M69.192 33.008C69.192 41.36 66.312 48.32 60.552 53.888C54.888 59.36 46.2 62.096 34.488 62.096H15.192V104H2.08801V3.63198H34.488C45.816 3.63198 54.408 6.36798 60.264 11.84C66.216 17.312 69.192 24.368 69.192 33.008ZM34.488 51.296C41.784 51.296 47.16 49.712 50.616 46.544C54.072 43.376 55.8 38.864 55.8 33.008C55.8 20.624 48.696 14.432 34.488 14.432H15.192V51.296H34.488Z"
        stroke={isDarkMode ? "white" : "black"}
        strokeWidth="4"
      />
      <path
        d="M130.983 105.008C121.671 105.008 113.175 102.848 105.495 98.528C97.8146 94.112 91.7186 88.016 87.2066 80.24C82.7906 72.368 80.5826 63.536 80.5826 53.744C80.5826 43.952 82.7906 35.168 87.2066 27.392C91.7186 19.52 97.8146 13.424 105.495 9.10398C113.175 4.68798 121.671 2.47998 130.983 2.47998C140.391 2.47998 148.935 4.68798 156.615 9.10398C164.295 13.424 170.343 19.472 174.759 27.248C179.175 35.024 181.383 43.856 181.383 53.744C181.383 63.632 179.175 72.464 174.759 80.24C170.343 88.016 164.295 94.112 156.615 98.528C148.935 102.848 140.391 105.008 130.983 105.008ZM130.983 93.632C137.991 93.632 144.279 92 149.847 88.736C155.511 85.472 159.927 80.816 163.095 74.768C166.359 68.72 167.991 61.712 167.991 53.744C167.991 45.68 166.359 38.672 163.095 32.72C159.927 26.672 155.559 22.016 149.991 18.752C144.423 15.488 138.087 13.856 130.983 13.856C123.879 13.856 117.543 15.488 111.975 18.752C106.407 22.016 101.991 26.672 98.7266 32.72C95.5586 38.672 93.9746 45.68 93.9746 53.744C93.9746 61.712 95.5586 68.72 98.7266 74.768C101.991 80.816 106.407 85.472 111.975 88.736C117.639 92 123.975 93.632 130.983 93.632Z"
        stroke={isDarkMode ? "white" : "black"}
        strokeWidth="4"
      />
      <path
        d="M251.53 104L227.626 62.96H211.786V104H198.682V3.63198H231.082C238.666 3.63198 245.05 4.92798 250.234 7.51998C255.514 10.112 259.45 13.616 262.042 18.032C264.634 22.448 265.93 27.488 265.93 33.152C265.93 40.064 263.914 46.16 259.882 51.44C255.946 56.72 249.994 60.224 242.026 61.952L267.226 104H251.53ZM211.786 52.448H231.082C238.186 52.448 243.514 50.72 247.066 47.264C250.618 43.712 252.394 39.008 252.394 33.152C252.394 27.2 250.618 22.592 247.066 19.328C243.61 16.064 238.282 14.432 231.082 14.432H211.786V52.448Z"
        stroke={isDarkMode ? "white" : "black"}
        strokeWidth="4"
      />
      <path
        d="M348.067 3.63198V14.288H320.707V104H307.603V14.288H280.099V3.63198H348.067Z"
        stroke={isDarkMode ? "white" : "black"}
        strokeWidth="4"
      />
      <path
        d="M420.933 3.63198V14.288H377.301V48.128H412.725V58.784H377.301V104H364.197V3.63198H420.933Z"
        stroke={isDarkMode ? "white" : "black"}
        strokeWidth="4"
      />
      <path
        d="M482.264 105.008C472.952 105.008 464.456 102.848 456.776 98.528C449.096 94.112 443 88.016 438.488 80.24C434.072 72.368 431.864 63.536 431.864 53.744C431.864 43.952 434.072 35.168 438.488 27.392C443 19.52 449.096 13.424 456.776 9.10398C464.456 4.68798 472.952 2.47998 482.264 2.47998C491.672 2.47998 500.216 4.68798 507.896 9.10398C515.576 13.424 521.624 19.472 526.04 27.248C530.456 35.024 532.664 43.856 532.664 53.744C532.664 63.632 530.456 72.464 526.04 80.24C521.624 88.016 515.576 94.112 507.896 98.528C500.216 102.848 491.672 105.008 482.264 105.008ZM482.264 93.632C489.272 93.632 495.56 92 501.128 88.736C506.792 85.472 511.208 80.816 514.376 74.768C517.64 68.72 519.272 61.712 519.272 53.744C519.272 45.68 517.64 38.672 514.376 32.72C511.208 26.672 506.84 22.016 501.272 18.752C495.704 15.488 489.368 13.856 482.264 13.856C475.16 13.856 468.824 15.488 463.256 18.752C457.688 22.016 453.272 26.672 450.008 32.72C446.84 38.672 445.256 45.68 445.256 53.744C445.256 61.712 446.84 68.72 450.008 74.768C453.272 80.816 457.688 85.472 463.256 88.736C468.92 92 475.256 93.632 482.264 93.632Z"
        stroke={isDarkMode ? "white" : "black"}
        strokeWidth="4"
      />
      <path
        d="M563.067 93.344H598.203V104H549.963V3.63198H563.067V93.344Z"
        stroke={isDarkMode ? "white" : "black"}
        strokeWidth="4"
      />
      <path
        d="M625.223 3.63198V104H612.119V3.63198H625.223Z"
        stroke={isDarkMode ? "white" : "black"}
        strokeWidth="4"
      />
      <path
        d="M693.061 105.008C683.749 105.008 675.253 102.848 667.573 98.528C659.893 94.112 653.797 88.016 649.285 80.24C644.869 72.368 642.661 63.536 642.661 53.744C642.661 43.952 644.869 35.168 649.285 27.392C653.797 19.52 659.893 13.424 667.573 9.10398C675.253 4.68798 683.749 2.47998 693.061 2.47998C702.469 2.47998 711.013 4.68798 718.693 9.10398C726.373 13.424 732.421 19.472 736.837 27.248C741.253 35.024 743.461 43.856 743.461 53.744C743.461 63.632 741.253 72.464 736.837 80.24C732.421 88.016 726.373 94.112 718.693 98.528C711.013 102.848 702.469 105.008 693.061 105.008ZM693.061 93.632C700.069 93.632 706.357 92 711.925 88.736C717.589 85.472 722.005 80.816 725.173 74.768C728.437 68.72 730.069 61.712 730.069 53.744C730.069 45.68 728.437 38.672 725.173 32.72C722.005 26.672 717.637 22.016 712.069 18.752C706.501 15.488 700.165 13.856 693.061 13.856C685.957 13.856 679.621 15.488 674.053 18.752C668.485 22.016 664.069 26.672 660.805 32.72C657.637 38.672 656.053 45.68 656.053 53.744C656.053 61.712 657.637 68.72 660.805 74.768C664.069 80.816 668.485 85.472 674.053 88.736C679.717 92 686.053 93.632 693.061 93.632Z"
        stroke={isDarkMode ? "white" : "black"}
        strokeWidth="4"
      />
      <path
        d="M764.936 104.864C762.44 104.864 760.328 104 758.6 102.272C756.872 100.544 756.008 98.432 756.008 95.936C756.008 93.44 756.872 91.328 758.6 89.6C760.328 87.872 762.44 87.008 764.936 87.008C767.336 87.008 769.352 87.872 770.984 89.6C772.712 91.328 773.576 93.44 773.576 95.936C773.576 98.432 772.712 100.544 770.984 102.272C769.352 104 767.336 104.864 764.936 104.864ZM764.936 43.232C762.44 43.232 760.328 42.368 758.6 40.64C756.872 38.912 756.008 36.8 756.008 34.304C756.008 31.808 756.872 29.696 758.6 27.968C760.328 26.24 762.44 25.376 764.936 25.376C767.336 25.376 769.352 26.24 770.984 27.968C772.712 29.696 773.576 31.808 773.576 34.304C773.576 36.8 772.712 38.912 770.984 40.64C769.352 42.368 767.336 43.232 764.936 43.232Z"
        stroke={isDarkMode ? "white" : "black"}
        strokeWidth="4"
      />
      <path
        d="M889.135 81.68H845.359L837.295 104H823.471L859.759 4.20798H874.879L911.023 104H897.199L889.135 81.68ZM885.391 71.024L867.247 20.336L849.103 71.024H885.391Z"
        stroke={isDarkMode ? "white" : "black"}
        strokeWidth="4"
      />
      <path
        d="M939.942 93.344H975.078V104H926.838V3.63198H939.942V93.344Z"
        stroke={isDarkMode ? "white" : "black"}
        strokeWidth="4"
      />
      <path
        d="M1002.1 14.288V47.84H1038.67V58.64H1002.1V93.2H1042.99V104H988.994V3.48798H1042.99V14.288H1002.1Z"
        stroke={isDarkMode ? "white" : "black"}
        strokeWidth="4"
      />
      <path
        d="M1103.86 53.888L1134.68 104H1119.85L1095.8 64.832L1072.9 104H1058.36L1089.03 53.888L1058.21 3.63198H1072.9L1097.09 42.944L1120.13 3.63198H1134.82L1103.86 53.888Z"
        stroke={isDarkMode ? "white" : "black"}
        strokeWidth="4"
      />
      <path
        d="M1203.75 93.344H1238.89V104H1190.65V3.63198H1203.75V93.344Z"
        stroke={isDarkMode ? "white" : "black"}
        strokeWidth="4"
      />
      <path
        d="M1265.91 3.63198V104H1252.81V3.63198H1265.91Z"
        stroke={isDarkMode ? "white" : "black"}
        strokeWidth="4"
      />
    </svg>
  );
};

export default PortfolioSVG;

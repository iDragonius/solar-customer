type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  Dropdown: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
        stroke="#222222"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  About1: (props: IconProps) => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.875 20C12.4931 20.0102 11.6616 20.0526 10.9993 20.228C7.98486 21.0262 5.92106 23.7278 6.00232 26.7694C6.02586 27.6504 6.36124 28.7392 7.032 30.917C8.64628 36.158 11.3593 40.7078 17.4369 41.7994C18.5541 42 19.8112 42 22.3254 42H25.6746C28.1888 42 29.446 42 30.5632 41.7994C36.6408 40.7078 39.3538 36.158 40.968 30.917C41.6388 28.7392 41.9742 27.6504 41.9976 26.7694C42.079 23.7278 40.0152 21.0262 37.0008 20.228C36.3384 20.0526 35.5068 20.0102 34.125 20"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M24 6V28M24 6C24.9368 6 25.6488 6.8762 27.0728 8.6286L29 11M24 6C23.0632 6 22.3512 6.8762 20.9272 8.6286L19 11"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  About2: (props: IconProps) => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M32 18C32 10.268 25.732 4 18 4C10.268 4 4 10.268 4 18C4 25.732 10.268 32 18 32"
        stroke="black"
        strokeWidth="3"
      />
      <path
        d="M32 18H30C24.3432 18 21.5148 18 19.7574 19.7574C18 21.5148 18 24.3432 18 30V32C18 37.6568 18 40.4852 19.7574 42.2426C21.5148 44 24.3432 44 30 44H32C37.6568 44 40.4852 44 42.2426 42.2426C44 40.4852 44 37.6568 44 32V30C44 24.3432 44 21.5148 42.2426 19.7574C40.4852 18 37.6568 18 32 18Z"
        stroke="black"
        strokeWidth="3"
      />
    </svg>
  ),
  About3: (props: IconProps) => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 36L10 42M36 36L38 42"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 36H16C10.3431 36 7.51472 36 5.75736 34.1172C4 32.2342 4 29.2038 4 23.1428V18.8571C4 12.7962 4 9.76578 5.75736 7.88288C7.51472 6 10.3431 6 16 6H32C37.6568 6 40.4852 6 42.2426 7.88288C44 9.76578 44 12.7962 44 18.8571V23.1428C44 29.2038 44 32.2342 42.2426 34.1172C40.4852 36 37.6568 36 32 36Z"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 28H43"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 6V28"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 18V16"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 18V16"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Burger: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 5H17"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 12H20"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 19H17"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Close: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.247 6.74032C11.0733 7.56669 11.4865 7.97988 12 7.97988C12.5135 7.97988 12.9267 7.5667 13.753 6.74034L15.5066 4.98681C15.9142 4.57923 16.1181 4.37536 16.3301 4.25295C17.3964 3.63729 18.2747 4.24833 19.0132 4.98681C19.7517 5.7253 20.3627 6.60358 19.7471 7.66993C19.6246 7.88195 19.4208 8.08575 19.0133 8.49334L17.2599 10.2467C16.4335 11.0731 16.0201 11.4865 16.0201 12C16.0201 12.5135 16.4333 12.9267 17.2597 13.7531L19.0132 15.5066C19.4208 15.9142 19.6246 16.118 19.7471 16.33C20.3627 17.3964 19.7517 18.2747 19.0132 19.0132C18.2748 19.7517 17.3964 20.3627 16.3301 19.747C16.118 19.6247 15.9142 19.4209 15.5066 19.0132L13.7533 17.2599C12.9272 16.4337 12.5135 16.0201 12 16.0201C11.4865 16.0201 11.0729 16.4337 10.2467 17.2599L8.49341 19.0132C8.08577 19.4209 7.88196 19.6247 7.66993 19.747C6.60365 20.3627 5.72522 19.7517 4.98681 19.0132C4.24827 18.2747 3.63732 17.3964 4.25295 16.33C4.37537 16.118 4.57918 15.9142 4.98681 15.5066L6.74032 13.7531C7.56669 12.9267 7.97987 12.5135 7.97987 12C7.97987 11.4865 7.56647 11.0731 6.7401 10.2467L4.98673 8.49334C4.57915 8.08575 4.37536 7.88195 4.25295 7.66993C3.63729 6.60358 4.24833 5.7253 4.98681 4.98681C5.7253 4.24833 6.60357 3.63729 7.66993 4.25295C7.88195 4.37536 8.08581 4.57922 8.4934 4.9868L10.247 6.74032Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

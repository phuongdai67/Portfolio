import JavaScriptIcon from "../assets/icons/javascript.svg";
import NextjsIcon from "../assets/icons/nextjs.svg";
import ReactIcon from "../assets/icons/reactjs.svg";
import TailwindCSS from "../assets/icons/tailwindcss.svg";
import ReactNative from "../assets/icons/react-native.svg";

const PreviewIcon = (props) => {
  return (
    <svg
      width="18"
      height="20"
      // className="text-accent"
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.25 6.69867C16.94 3.06867 13.56 0.978668 10 0.978668C8.22 0.978668 6.49 1.49867 4.91 2.46867C3.33 3.44867 1.91 4.87867 0.75 6.69867C-0.25 8.26867 -0.25 10.8187 0.75 12.3887C3.06 16.0287 6.44 18.1087 10 18.1087C11.78 18.1087 13.51 17.5887 15.09 16.6187C16.67 15.6387 18.09 14.2087 19.25 12.3887C20.25 10.8287 20.25 8.26867 19.25 6.69867ZM10 13.5887C7.76 13.5887 5.96 11.7787 5.96 9.54867C5.96 7.31867 7.76 5.50867 10 5.50867C12.24 5.50867 14.04 7.31867 14.04 9.54867C14.04 11.7787 12.24 13.5887 10 13.5887Z"
        fill="currentColor"
      />
    </svg>
  );
};
const Facebook = (props) => {
  return (
    <svg
      role="img"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Facebook</title>
      <path
        fill="currentColor"
        d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"
      />
    </svg>
  );
};
const GithubIcon = (props) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0099 0.548676C5.36875 0.548676 0 5.957 0 12.6478C0 17.9962 3.43994 22.5234 8.21205 24.1258C8.80869 24.2462 9.02724 23.8655 9.02724 23.5451C9.02724 23.2646 9.00757 22.3032 9.00757 21.3014C5.6667 22.0227 4.97099 19.8591 4.97099 19.8591C4.43409 18.4569 3.63858 18.0965 3.63858 18.0965C2.54511 17.3553 3.71823 17.3553 3.71823 17.3553C4.93117 17.4354 5.56763 18.5972 5.56763 18.5972C6.64118 20.44 8.37111 19.9193 9.06706 19.5988C9.16638 18.8175 9.48473 18.2767 9.82275 17.9763C7.15817 17.6958 4.35469 16.6542 4.35469 12.0067C4.35469 10.6846 4.8316 9.60295 5.58729 8.76171C5.46807 8.4613 5.0504 7.21911 5.70677 5.55654C5.70677 5.55654 6.72083 5.23597 9.00732 6.79849C9.98625 6.53364 10.9958 6.39892 12.0099 6.39778C13.024 6.39778 14.0577 6.53815 15.0123 6.79849C17.299 5.23597 18.3131 5.55654 18.3131 5.55654C18.9695 7.21911 18.5515 8.4613 18.4323 8.76171C19.2079 9.60295 19.6652 10.6846 19.6652 12.0067C19.6652 16.6542 16.8617 17.6756 14.1772 17.9763C14.6148 18.3568 14.9924 19.0779 14.9924 20.2197C14.9924 21.8422 14.9727 23.1444 14.9727 23.5449C14.9727 23.8655 15.1915 24.2462 15.7879 24.126C20.56 22.5232 23.9999 17.9962 23.9999 12.6478C24.0196 5.957 18.6312 0.548676 12.0099 0.548676Z"
        fill="currentColor"
      />
    </svg>
  );
};
const LinkedIn = (props) => {
  return (
    <svg
      role="img"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>LinkedIn</title>
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  );
};
const BurgerIcon = (props) => {
  return (
    <svg
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 0H18V2H0V0ZM0 7H18V9H0V7ZM0 14H18V16H0V14Z"
        fill="currentColor"
      />
    </svg>
  );
};
const CheckIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
};
const CloseIcon = (props) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 6.2225L14.2225 0L16 1.7775L9.7775 8L16 14.2225L14.2225 16L8 9.7775L1.7775 16L0 14.2225L6.2225 8L0 1.7775L1.7775 0L8 6.2225Z"
        fill="currentColor"
      />
    </svg>
  );
};
export {
  JavaScriptIcon,
  NextjsIcon,
  ReactIcon,
  TailwindCSS,
  ReactNative,
  Facebook,
  GithubIcon,
  LinkedIn,
  BurgerIcon,
  CheckIcon,
  CloseIcon,
  PreviewIcon,
};

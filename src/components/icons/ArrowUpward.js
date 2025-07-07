import React from 'react';

const ArrowUpward = ({ width = 80, height = 80, fill = "#343C54", className = "", ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M11.4233 4.01482L5.46986 9.96452C5.25526 10.179 5.19101 10.5016 5.30707 10.7819C5.42312 11.0622 5.69663 11.245 6.00002 11.245H11.2461H12.7461H18C18.3034 11.245 18.5769 11.0622 18.693 10.7819C18.809 10.5016 18.7448 10.179 18.5302 9.9645L12.53 3.96851C12.3831 3.82171 12.1905 3.74855 11.998 3.74903L11.9961 3.74902C11.7665 3.74902 11.5609 3.85224 11.4233 4.01482Z"
        fill={fill}
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        opacity="0.4"
        d="M12.7461 20.5004L12.7461 11.245H11.2461L11.2461 20.5004C11.2461 20.9146 11.5819 21.2504 11.9961 21.2504C12.4103 21.2504 12.7461 20.9146 12.7461 20.5004Z"
        fill={fill}
      />
    </svg>
  );
};

export default ArrowUpward;
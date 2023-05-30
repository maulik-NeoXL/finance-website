import React from "react";


export default function Button({styles})
{
  return (
    <button type={'button'} className={`py-4 px-6 bg-blue-gradient text-[18px] text-primary outline-none ${styles} font-medium rounded-xl`}>
      Get Started
    </button>
  );
}

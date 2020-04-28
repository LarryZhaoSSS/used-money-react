import React from 'react';
let importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext);
try {
  importAll(require.context('../assets/icons', true, /\.svg$/));
} catch (error) {
  console.log(error);
}
type Props = {
  name: string;
};
export const Icon = (props: Props) => {
  return (
    <svg className='icon'>
      <use xlinkHref={`#${props.name}`}></use>
    </svg>
  );
};

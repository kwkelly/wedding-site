
import React from 'react'
import useBlurUp from '../hooks/useBlurUp';
import styled from 'styled-components';

const BlurImg = styled.img<{blur: boolean}>`
        filter: ${props => props.blur
          ? "blur(20px)"
          : "none"};
        transition: ${props => props.blur
          ? "none"
          : "filter 0.3s ease-out"};
          object-fit: cover;
          height: 100%;
          width: 100%;
`
type Props = {
    lowQualitySrc: string;
    highQualitySrc: string;
}

const BlurredUpImage = ({lowQualitySrc, highQualitySrc}: Props) => {
  const [src, blur] = useBlurUp(
    lowQualitySrc,
    highQualitySrc
  );

  return (
    <BlurImg
      src={src}
      blur={blur}
    />
  )
}

export { BlurredUpImage };
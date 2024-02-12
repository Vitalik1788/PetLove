'use client';

import hero_image from '../../assets/images/home_page_img.jpg';
import { IMG, ImageBox } from './HeroImage.styled';

export default function HeroImage() {
  return (
    <ImageBox>
      <IMG src={hero_image} alt="The girl hugs the dog" priority={true} />
    </ImageBox>
  );
};

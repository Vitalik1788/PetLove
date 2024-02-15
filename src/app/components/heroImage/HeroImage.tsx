'use client';

import { IMGDesktop, IMGMobile, IMGTablet, ImageBox } from './HeroImage.styled';
import hero_image_mobile from '../../assets/images/home_page_img.jpg';
import hero_image_tablet from '../../assets/images/tablet_hero_img.jpg';
import hero_image_desktop from '../../assets/images/desktop_hero_img.jpg';

export default function HeroImage() {
  return (
    <ImageBox>
      <IMGMobile src={hero_image_mobile} alt="Girl with dog" priority={true} />
      <IMGTablet src={hero_image_tablet} alt="Girl with dog" priority={true} />
      <IMGDesktop src={hero_image_desktop} alt="Girl with dog" priority={true} />
    </ImageBox>
  );
}

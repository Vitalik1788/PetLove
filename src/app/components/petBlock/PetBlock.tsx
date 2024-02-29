import { StaticImageData } from 'next/image';
import { FormIMG, Wrapper } from './PetBlock.styled';

interface IPetBlock {
  src: string | StaticImageData;
  alt: string;
}

const PetBlock = ({ src, alt }: IPetBlock) => {
  return (
    <Wrapper>
      <FormIMG src={src} alt={alt} priority={true}/>
    </Wrapper>
  );
};

export default PetBlock;

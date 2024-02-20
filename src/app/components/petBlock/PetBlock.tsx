import { StaticImageData } from 'next/image';
import { FormIMG, Wrapper } from './PetBlock.styled';

interface IPetBlock {
  src: string | StaticImageData;
}

const PetBlock = ({ src }: IPetBlock) => {
  return (
    <Wrapper>
      <FormIMG src={src} alt="Red cat" priority={true}/>
    </Wrapper>
  );
};

export default PetBlock;

import { StaticImageData } from 'next/image';
import { FormIMG } from './PetBlock.styled';

interface IPetBlock {
  src: string | StaticImageData;
}

const PetBlock = ({ src }: IPetBlock) => {
  return (
    <div>
      <FormIMG src={src} alt="Red cat" priority={true}/>
    </div>
  );
};

export default PetBlock;

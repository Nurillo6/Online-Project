import Image from "next/image";


interface MyImageProps {
  src: string;
  alt: string;
  inlineSize: number;
  blockSize: number;
  styleSizeW: string;
  styleSizeH: string
}

export default function CostumImage({ src, alt, blockSize, inlineSize, styleSizeW, styleSizeH }: MyImageProps) {
  return (
    <Image src={src} alt={alt} width={inlineSize} height={blockSize} priority style={{ "width": styleSizeW, "height": styleSizeH }} />
  )
}

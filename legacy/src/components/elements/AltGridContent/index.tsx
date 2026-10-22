import { Container, TextContent, ImageContent } from "./styles";

interface AltGridContentProps {
  title: string;
  description: string;
  description2?: string;
  img: string;
}

export function AltGridContent({
  title,
  description,
  description2,
  img,
}: AltGridContentProps) {
  return (
    <Container>
      <ImageContent>
        <div>
          <img src={img} alt="" />
        </div>
      </ImageContent>
      <TextContent>
        <h2>{title}</h2>
        <p>{description}</p>
        {description2 && <p>{description2}</p>}
      </TextContent>
    </Container>
  );
}

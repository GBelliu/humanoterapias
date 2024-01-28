import { Container, TextContent, ImageContent } from "./styles";

interface GridContentProps {
  title: string;
  description: string;
  description2?: string;
  img: string;
}

export function GridContent({
  title,
  description,
  description2,
  img,
}: GridContentProps) {
  return (
    <Container>
      <TextContent>
        <h2>{title}</h2>
        <p>{description}</p>
        {description2 && <p>{description2}</p>}
      </TextContent>

      <ImageContent>
        <div>
          <img src={img} alt="" />
        </div>
      </ImageContent>
    </Container>
  );
}

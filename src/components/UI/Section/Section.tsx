import { SectionStyled, Title } from './Section.styled';

interface IProps {
  title?: string;
  children: React.ReactNode;
  [x: string]: any;
}

const Section = ({ title, children, ...other }: IProps) => {
  return (
    <SectionStyled {...other}>
      {title && <Title>{title}</Title>}
      {children}
    </SectionStyled>
  );
};

export default Section;

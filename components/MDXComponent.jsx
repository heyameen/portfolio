import ConsCard from './ConsCard';
import Image from 'next/image';
import ImageWithTheme from './ImageTheme';
import Link from 'next/link';
import ProsCard from './ProsCard';
import Step from './Step';

const CustomLink = (props) => {
    const href = props.href;
    const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));
  
    if (isInternalLink) {
      return (
        <Link href={href}>
          <a {...props}>{props.children}</a>
        </Link>
      );
    }
  
    return <a target="_blank" rel="noopener noreferrer" {...props} />;
  };
  
  const MDXComponents = {
    Image,
    ImageWithTheme,
    a: CustomLink,
    ConsCard,
    ProsCard,
    Step,
  };
  
  export default MDXComponents;
  
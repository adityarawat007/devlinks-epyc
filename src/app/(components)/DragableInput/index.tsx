import React from 'react';
import LinkInput from './LinkInput';

interface Link {
  id: string;
}

interface LinkListProps {
  links: Link[];
  setLinks: React.Dispatch<React.SetStateAction<Link[]>>;
  setActiveLinkCard: React.Dispatch<React.SetStateAction<number | null>>; // Add this line
}

const LinkList: React.FC<LinkListProps> = ({ links, setLinks, setActiveLinkCard }) => {

  const removeLink = (id: string) => {
    setLinks(links.filter(link => link.id !== id));
  };

  return (
    <div>
      {links.map((link, index) => (
        <LinkInput
          key={link.id}
          id={link.id}
          index={index}
          onRemove={removeLink}
          setActiveLinkCard={setActiveLinkCard}
        />
      ))}
    </div>
  );
};

export default LinkList;
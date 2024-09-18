import React from 'react';
import LinkInput from './LinkInput';

interface Link {
  id: string;
}

interface LinkListProps {
  links: Link[];
  setLinks: React.Dispatch<React.SetStateAction<Link[]>>;
}

const LinkList: React.FC<LinkListProps> = ({ links, setLinks }) => {
  //This Component only maps Links and passes the id to LinkInput
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
        />
      ))}
    </div>
  );
};

export default LinkList;
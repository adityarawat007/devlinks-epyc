import React, { useState } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import LinkInput from '@/app/(components)/DragableInput/LinkInput';

interface DragableInputProps {
  links: { id: string }[];
  setLinks: React.Dispatch<React.SetStateAction<{ id: string }[]>>;
}

const LinkList: React.FC<DragableInputProps> = ({links, setLinks}) => {


  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = Array.from(links);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setLinks(items);
  };

  const removeLink = (id: string) => {
    setLinks(links.filter(link => link.id !== id));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="links">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {links.map((link, index) => (
              <LinkInput
                key={link.id}
                id={link.id}
                index={index}
                onRemove={removeLink}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default LinkList;
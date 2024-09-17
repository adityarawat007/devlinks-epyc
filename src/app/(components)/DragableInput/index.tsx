import React from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import LinkInput from '@/app/(components)/DragableInput/LinkInput';

interface Link {
  id: string;
}

interface LinkListProps {
  links: Link[];
  setLinks: React.Dispatch<React.SetStateAction<Link[]>>;
}

const LinkList: React.FC<LinkListProps> = ({ links, setLinks }) => {
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
          <div {...provided.droppableProps} ref={provided.innerRef} >
            {links.map((link, index) => (
              <Draggable key={link.id} draggableId={link.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <LinkInput
                      id={link.id}
                      index={index}
                      onRemove={removeLink}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default LinkList;
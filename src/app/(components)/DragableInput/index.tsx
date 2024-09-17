import React, { useState } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import LinkInput from '@/app/(components)/DragableInput/LinkInput';

const LinkList: React.FC = () => {
  const [links, setLinks] = useState([{ id: 'link1' }]);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = Array.from(links);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setLinks(items);
  };

  const addLink = () => {
    setLinks([...links, { id: `link${links.length + 1}` }]);
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
      <button onClick={addLink}>Add Link</button>
    </DragDropContext>
  );
};

export default LinkList;
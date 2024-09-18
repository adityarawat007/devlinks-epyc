import { create } from 'zustand'

interface Link {
  id: string;
  platform: string;
}

interface LinkStore {
  links: Link[];
  addLink: (id: string, platform: string) => void;
  removeLink: (id: string) => void;
}

export const useLinkStore = create<LinkStore>((set) => ({
  links: [],
  addLink: (id, platform) => set((state) => ({ 
    links: [...state.links, { id, platform }] 
  })),
  removeLink: (id) => set((state) => ({ 
    links: state.links.filter(link => link.id !== id) 
  })),
}))
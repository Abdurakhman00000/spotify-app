import { create } from 'zustand'

interface SearchState {
  searchQuery: string
  setSearchQuery: (query: string) => void
}

export const useSearchStoreMobile = create<SearchState>((set) => ({
  searchQuery: '',
  setSearchQuery: (query: string) => set({ searchQuery: query }),
}))

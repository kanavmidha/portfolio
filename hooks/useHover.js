import { create } from "zustand";

const useHover = create((set) => ({
    hover: false,
    onEnter: ()=> set({hover: true}),
    onLeave: ()=> set({hover: false}),
}))

export default useHover
import { FFButtonType, FFButtonSize } from "./FFButton.type";

export const FFBUTTON_SIZE_MAPS: Record<FFButtonSize, string> = {
    [FFButtonSize.SMALL]: 'px-2.5 text-xs',
    [FFButtonSize.MEDIUM]:'',
    [FFButtonSize.LARGE]: 'px-3 text-sm',
};


export const FFBUTTON_VARIANT_MAPS: Record<FFButtonType, string> = {
    [FFButtonType.NAVBAR]: 'relative font-bold text-lg text-gray-300 uppercase transition-colors duration-400 ease-in-out cursor-pointer focus:text-white hover:text-white',
    [FFButtonType.CIRCULAR]: 'bg-yellow-100 text-yellow-800',

};
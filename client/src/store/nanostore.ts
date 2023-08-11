import { atom } from 'nanostores';

export const username = atom<string>('User');

export function changeUsername(newName: string){
    username.set(newName);
}
import { Vegetable } from "../vegetables/vegetable";

//TODO: Vegetable object 
export interface Auction {
    id: number;
    name: string;
    vegetable: Vegetable;
}
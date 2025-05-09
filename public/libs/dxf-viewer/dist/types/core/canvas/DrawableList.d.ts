import { DrawableData } from "./Constants";
import { Drawable } from "./Drawable";
import { Event } from "../../core/utils";
/**
 * Drawable list events.
 */
type DrawableListEvents = {
    /**
     * Triggerd when a drawable is added.
     */
    add: DrawableData;
    /**
     * Triggerd when a drawable is updated.
     */
    update: DrawableData;
    /**
     * Triggerd when a drawable is removed.
     */
    remove: DrawableData;
};
/**
 * A group of Drawlables for a certain category
 * @internal
 */
export declare class DrawableList extends Event<DrawableListEvents> {
    private category;
    private drawableMap;
    constructor(category: string);
    addDrawable(drawable: Drawable): void;
    updateDrawable(drawable: Drawable, newData: DrawableData): void;
    removeDrawable(drawable: Drawable): void;
    getDrawableById(id: string): Drawable<Record<string, unknown>> | undefined;
    clear(): void;
    getDrawables(): Map<string, Drawable<Record<string, unknown>>>;
    getDrawableDatas(): DrawableData[];
    setDrawableDatas(drawableDatas: DrawableData[]): void;
    getDrawableByPosition(p: THREE.Vector3, raycaster?: THREE.Raycaster): Drawable<Record<string, unknown>> | undefined;
}
export {};

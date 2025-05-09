import { Tooltip } from "../../components/tool-tip";
import { IconClass } from "../../core";
import { BaseViewer } from "../../core/viewers/BaseViewer";
import { Plugin } from "../../core/viewers/Plugin";
declare enum BottomBarItemId {
    statistics = "dxf-viewer-threejs-statistics",
    cameraCfg = "dxf-viewer-threejs-cameraCfg",
    tips = "dxf-viewer-threejs-tips"
}
interface BottomBarItemConfig {
    icon: IconClass;
    mutexIds?: BottomBarItemId[];
    onActive?: (item: BottomBarItem) => void;
    onDeactive?: (item: BottomBarItem) => void;
    onClick?: (item: BottomBarItem) => void;
    onUpdate?: (item: BottomBarItem) => void;
}
/**
 * Bottom bar plugin is a debug tool for developers.
 */
export declare class BottomBarPlugin extends Plugin {
    private element;
    itemList: Map<string, BottomBarItem>;
    constructor(viewer: BaseViewer);
    update(): void;
    private init;
    private createItem;
}
declare class BottomBarItem {
    readonly viewer: BaseViewer;
    private readonly bottomBar;
    protected readonly menuId: string;
    protected cfg: BottomBarItemConfig;
    private eventBus;
    private itemconfig;
    tooltip: Tooltip;
    element: HTMLElement;
    active: boolean;
    constructor(viewer: BaseViewer, bottomBar: BottomBarPlugin, menuId: string, cfg: BottomBarItemConfig);
    private createButton;
    setActive(active: boolean): void;
    update(): void;
}
export {};

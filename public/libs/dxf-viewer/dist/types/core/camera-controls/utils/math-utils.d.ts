import type * as _THREE from 'three';
import type { Ref } from '../types';
/**
 * Degree to radius
 */
export declare const Deg2Rad: number;
export declare function clamp(value: number, min: number, max: number): number;
export declare function approxZero(number: number, error?: number): boolean;
export declare function approxEquals(a: number, b: number, error?: number): boolean;
export declare function roundToStep(value: number, step: number): number;
export declare function infinityToMaxNumber(value: number): number;
export declare function maxNumberToInfinity(value: number): number;
export declare function smoothDamp(current: number, target: number, currentVelocityRef: Ref, smoothTime: number, maxSpeed: number | undefined, deltaTime: number): number;
export declare function smoothDampVec3(current: _THREE.Vector3, target: _THREE.Vector3, currentVelocityRef: _THREE.Vector3, smoothTime: number, maxSpeed: number | undefined, deltaTime: number, out: _THREE.Vector3): _THREE.Vector3;

import { NormalizedRect } from '@mediapipe/face_detection';
import { LegacyRef, RefObject } from 'react';
import Webcam from 'react-webcam';

export type BoundingBox = NormalizedRect;

export interface IFaceDetectionReturnType {
  boundingBox: BoundingBox[];
  isLoading: boolean;
  detected: boolean;
  facesDetected: number;
  webcamRef: LegacyRef<Webcam>;
  imgRef: RefObject<HTMLImageElement>;
}

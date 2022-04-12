import { NormalizedRect } from '@mediapipe/face_detection';
import { RefObject } from 'react';
import Webcam from 'react-webcam';

export type BoundingBox = NormalizedRect;

export interface IFaceDetectionReturnType {
  boundingBox: BoundingBox[];
  isLoading: boolean;
  detected: boolean;
  facesDetected: number;
  webcamRef: RefObject<Webcam>;
  imgRef: RefObject<HTMLImageElement>;
}

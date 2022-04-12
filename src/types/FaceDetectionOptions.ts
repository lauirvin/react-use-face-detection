import { Options, Results } from '@mediapipe/face_detection';

export type FaceDetectionResults = Results;

export type FaceDetectionOptions = Options;

export interface IFaceDetectionOptions {
  mirrored?: boolean;
  handleOnResults?: (results: FaceDetectionResults) => void;
  faceDetectionOptions?: FaceDetectionOptions;
}

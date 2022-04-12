import { useCallback, useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { Results, NormalizedRect } from '@mediapipe/face_detection';
import { IFaceDetectionOptions, IFaceDetectionReturnType } from '../types';

export const useFaceDetection = (props?: IFaceDetectionOptions): IFaceDetectionReturnType => {
  const {
    mirrored,
    handleOnResults,
    faceDetectionOptions: options,
    faceDetection: faceDetectionInitializer,
    camera: cameraInitializer,
  } = props || ({} as IFaceDetectionOptions);

  /** Bounding Box for element to use, e.g. can create a bounding box with these values using a div  */
  const [boundingBox, setBoundingBox] = useState<NormalizedRect[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  /** Refs */
  const webcamRef = useRef<Webcam>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const camera = useRef(cameraInitializer).current;
  const faceDetection = useRef(faceDetectionInitializer).current;
  const faceDetectionOptions = useRef(options);

  const onResults = useCallback(
    (results: Results) => {
      /** Callback to return detection results */
      if (handleOnResults) handleOnResults(results);

      const { detections } = results;

      /** Set bounding box data */
      const boundingBoxes = detections.map((detection) => {
        const xCenter = detection.boundingBox.xCenter - detection.boundingBox.width / 2;
        return {
          ...detection.boundingBox,
          yCenter: detection.boundingBox.yCenter - detection.boundingBox.height / 2,
          xCenter: mirrored ? 1 - xCenter : xCenter,
        };
      });

      setBoundingBox(boundingBoxes);
    },
    [handleOnResults, mirrored],
  );

  const handleFaceDetection = useCallback(
    async (mediaSrc: HTMLVideoElement | HTMLImageElement) => {
      /** Configure faceDetection usage/options */
      faceDetection.setOptions({ ...faceDetectionOptions.current });
      faceDetection.onResults(onResults);

      /** Handle webcam detection */
      if (mediaSrc instanceof HTMLVideoElement && camera) {
        const cameraConfig = {
          mediaSrc,
          width: mediaSrc.videoWidth,
          height: mediaSrc.videoHeight,
          onFrame: async () => {
            await faceDetection.send({ image: mediaSrc });
            if (isLoading) setIsLoading(false);
          },
        };

        camera(cameraConfig).start();
      }

      /** Handle image face detection */
      if (mediaSrc instanceof HTMLImageElement) {
        await faceDetection.send({ image: mediaSrc });
        if (isLoading) setIsLoading(false);
      }
    },
    [camera, faceDetection, isLoading, onResults],
  );

  useEffect(() => {
    if (webcamRef.current && webcamRef.current.video) {
      handleFaceDetection(webcamRef.current.video);
    }

    if (imgRef.current) {
      handleFaceDetection(imgRef.current);
    }
  }, [handleFaceDetection, isLoading, onResults]);

  return {
    boundingBox,
    isLoading,
    detected: boundingBox.length > 0,
    facesDetected: boundingBox.length,
    webcamRef,
    imgRef,
  };
};

export default useFaceDetection;

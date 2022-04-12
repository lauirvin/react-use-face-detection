import { useCallback, useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { FaceDetection, Results, NormalizedRect } from '@mediapipe/face_detection';
import { Camera } from '@mediapipe/camera_utils';
import { IFaceDetectionOptions, IFaceDetectionReturnType } from './types';

const useFaceDetection = (config?: IFaceDetectionOptions): IFaceDetectionReturnType => {
  const { mirrored, handleOnResults, faceDetectionOptions: options } = config || ({} as IFaceDetectionOptions);

  /** Bounding Box for element to use, e.g. can create a bounding box with these values using a div  */
  const [boundingBox, setBoundingBox] = useState<NormalizedRect[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  /** Refs */
  const webcamRef = useRef<Webcam>(null);
  const imgRef = useRef<HTMLImageElement>(null);
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
      /** Initialize faceDetection model */
      const faceDetection = new FaceDetection({
        locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_detection/${file}`,
      });

      /** Configure faceDetection usage/options */
      faceDetection.setOptions({ ...faceDetectionOptions.current });
      faceDetection.onResults(onResults);

      if (mediaSrc instanceof HTMLVideoElement) {
        const camera = new Camera(mediaSrc, {
          onFrame: async () => {
            await faceDetection.send({ image: mediaSrc });
            if (isLoading) setIsLoading(false);
          },
          width: mediaSrc.videoWidth,
          height: mediaSrc.videoHeight,
        });

        camera.start();
      }

      if (mediaSrc instanceof HTMLImageElement) {
        await faceDetection.send({ image: mediaSrc });
        if (isLoading) setIsLoading(false);
      }
    },
    [isLoading, onResults],
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

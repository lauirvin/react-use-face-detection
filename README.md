<p align="center">
  <a href="https://github.com/lauirvin/react-use-face-detection">
    <img alt="logo" src="https://i.imgur.com/XSTefBB.png" width="150" />
  </a>
</p>
<h1 align="center">
  useFaceDetection Hook
</h1>

# <p align="center">[✨ Live Demo ✨](https://serene-meerkat-95a23d.netlify.app/)</p>

## 📚 Introduction

Simple React Hook to detect faces from an HTMLImageElement or [react-webcam](https://www.npmjs.com/package/react-webcam) video source. Powered by [MediaPipe](https://google.github.io/mediapipe/)

## 💡 Usage

- [Image Face Detection Code Example](https://github.com/lauirvin/react-use-face-detection-demo/blob/master/src/components/ImageDemo.tsx)

- [React Webcam Face Detection Code Example](https://github.com/lauirvin/react-use-face-detection-demo/blob/master/src/components/WebcamDemo.tsx)

- [Project Example](https://github.com/lauirvin/react-use-face-detection-demo)

## 🧰 Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

**npm**

```sh
npm install react-use-face-detection
```

**yarn**

```sh
yarn add react-use-face-detection
```

## ⚙️ Options

| Name                 | Type                                     | Optional | Description                                                                                                                                                                                      |
| -------------------- | ---------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| mirrored             | boolean                                  | true     | This enables a mirrored detection of the faces in the provided media source - e.g. if you flip the media source horizontally, this would enable the correct output of your flipped media source. |
| handleOnResults      | (results: FaceDetectionResults) => void  | true     | Callback function that returns the FaceDetectionResults                                                                                                                                          |
| faceDetectionOptions | FaceDetectionOptions                     | true     | Options for configuring the face detection model - see https://google.github.io/mediapipe/solutions/face_detection.html#javascript-solution-api                                                  |
| faceDetection        | FaceDetection                            | false    | Initialize the face detection model from @mediapipe/face_detection                                                                                                                               |
| camera               | (cameraOptions: CameraOptions) => Camera | true     | Initialize the camera utility model from @mediapipe/camera_utils                                                                                                                                 |

## 🎁 Returned Values

| Name          | Type                        | Description                                                                                              |
| ------------- | --------------------------- | -------------------------------------------------------------------------------------------------------- |
| boundingBox   | BoundingBox[]               | Returns details and coordinates of the bounding box around the detected face(s)                          |
| isLoading     | boolean                     | Returns a boolean that detects whether if the model has been loaded                                      |
| detected      | boolean                     | Returns a boolean that detects whether if a face has been detected                                       |
| facesDetected | number                      | Returns a number of faces that have been detected                                                        |
| webcamRef     | LegacyRef<Webcam>           | Returns a ref object for the [react-webcam](https://www.npmjs.com/package/react-webcam) `<Webcam/>` node |
| imgRef        | RefObject<HTMLImageElement> | Returns a ref object for the `<img/>` element                                                            |

## 👷 Built With

- [ReactJS](https://reactjs.org/) - Frontend Javascript web framework
- [TypeScript](https://www.typescriptlang.org/) - Open-source language which builds on JavaScript
- [MediaPipe](https://google.github.io/mediapipe/) - Machine Learning framework
- [React Webcam](https://www.npmjs.com/package/react-webcam) - Webcam Library

## 📚 Author

- **Irvin Ives Lau** - [lauirvin](https://github.com/lauirvin)
- https://www.irviniveslau.com

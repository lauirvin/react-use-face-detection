<p align="center">
  <a href="https://github.com/lauirvin/react-use-face-detection">
    <img style="filter: invert(36%) sepia(63%) saturate(1829%) hue-rotate(175deg) brightness(82%) contrast(87%);" alt="logo" src="https://seeklogo.com/images/F/face-id-logo-6DA02A33C5-seeklogo.com.png" width="150" />
  </a>
</p>
<h1 align="center">
  useFaceDetection Hook
</h1>

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

| Name                 | Type                                                 | Description                                                                                                                                                                                      |
| -------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| mirrored             | boolean \| undefined                                 | This enables a mirrored detection of the faces in the provided media source - e.g. if you flip the media source horizontally, this would enable the correct output of your flipped media source. |
| handleOnResults      | (results: FaceDetectionResults) => void \| undefined | Callback function that returns the FaceDetectionResults                                                                                                                                          |
| faceDetectionOptions | FaceDetectionOptions \| undefined                    | Options for configuring the face detection model - see https://google.github.io/mediapipe/solutions/face_detection.html#javascript-solution-api                                                  |

## 🏹 Returned values

| Name          | Type                        | Description                                                                                              |
| ------------- | --------------------------- | -------------------------------------------------------------------------------------------------------- |
| boundingBox   | BoundingBox[]               | Returns details and coordinates of the bounding box around the detected face(s)                          |
| isLoading     | boolean                     | Returns a boolean that detects whether if the model has been loaded                                      |
| detected      | boolean                     | Returns a boolean that detects whether if a face has been detected                                       |
| facesDetected | number                      | Returns a number of faces that have been detected                                                        |
| webcamRef     | RefObject<Webcam>           | Returns a ref object for the [react-webcam](https://www.npmjs.com/package/react-webcam) `<Webcam/>` node |
| imgRef        | RefObject<HTMLImageElement> | Returns a ref object for the `<img/>` element                                                            |

## 👷 Built With

- [ReactJS](https://reactjs.org/) - Frontend Javascript web framework
- [TypeScript](https://www.typescriptlang.org/) - Open-source language which builds on JavaScript
- [MediaPipe](https://google.github.io/mediapipe/) - Machine Learning framework
- [Jest](https://jestjs.io/) - JavaScript testing framework

## 📚 Author

- **Irvin Ives Lau** - [lauirvin](https://github.com/lauirvin)
- https://www.irviniveslau.com

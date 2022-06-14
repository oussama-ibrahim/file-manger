import { createSlice } from '@reduxjs/toolkit';
import FILES from '../../constants/files';
let [filesSize, imagesSize, videoSize] = [0, 0, 0];
const imageExtension = ['jpg', 'png', 'svg', 'gif'];
const fileExtension = ['pdf', 'txt', 'doc'];
const videoExtension = ['mp4', 'avi', 'mov'];
FILES.forEach((el) => {
  if (imageExtension.includes(el.type)) {
    filesSize += el.size;
  }
  if (fileExtension.includes(el.type)) {
    imagesSize += el.size;
  }
  if (videoExtension.includes(el.type)) {
    videoSize += el.size;
  }
});
const initialState = {
  files: FILES,
  imagesSummary: { imagesSize, maxSize: 50 * 1024 ** 2, type: imageExtension },
  videoSummary: { videoSize, maxSize: 5 * 1024 ** 3, type: videoExtension },
  filesSummary: { filesSize, maxSize: 5 * 1024 ** 2, type: fileExtension },
};

const date = new Date();
let currentDate = date.toJSON();
export const filesSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    uploadFile: (state, action) => {
      const newFiles = state.files;
      const NewVideoSummary = state.videoSummary;
      const NewFilesSummary = state.filesSummary;
      const NewImagesSummary = state.imagesSummary;
      const uploadedFiles = action.payload.uploadedFiles;
      uploadedFiles.forEach((file) => {
        if (fileExtension.includes(file.type)) {
          NewFilesSummary.filesSize += file.size;
          state.filesSummary = NewFilesSummary;
        }
        if (imageExtension.includes(file.type)) {
          NewImagesSummary.imagesSize += file.size;
          state.imagesSummary = NewImagesSummary;
        }
        if (videoExtension.includes(file.type)) {
          NewVideoSummary.videoSize += file.size;
          state.videoSummary = NewVideoSummary;
        }
        newFiles.unshift(file);
      });

      state.files = newFiles;
    },
    deleteFile: (state, action) => {
      const newFiles = state.files.find(
        (file) => file.id === action.payload.id
      );
      if (action.payload.type === 'archived') {
        newFiles.isArchived = false;
        newFiles.archivedAt = null;
      }
      if (action.payload.type === 'starred') {
        newFiles.isStarred = false;
        newFiles.starredAt = null;
      }
    },
    archivedFile: (state, action) => {
      const newFiles = state.files.find(
        (file) => file.id === action.payload.id
      );
      newFiles.archivedAt = currentDate;
      newFiles.isArchived = true;
    },
    startedFile: (state, action) => {
      const newFiles = state.files.find(
        (file) => file.id === action.payload.id
      );
      newFiles.starredAt = currentDate;
      newFiles.isStarred = true;
    },
    sortFiles: (state, action) => {
      const newFiles = state.files;
      const { type, dateType } = action.payload;
      if (type !== 'date') {
        const sortByType = [...newFiles].sort((a, b) =>
          a[type] > b[type] ? 1 : -1
        );
        state.files = sortByType;
      }
      if (type === 'date') {
        const sortedByDate = [...newFiles].sort(
          (a, b) => new Date(a[dateType]) - new Date(b[dateType])
        );
        state.files = sortedByDate;
      }
    },
  },
});

export const { deleteFile, uploadFile, archivedFile, startedFile, sortFiles } =
  filesSlice.actions;

export default filesSlice.reducer;

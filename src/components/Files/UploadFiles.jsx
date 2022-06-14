import Upload from '../../assets/icons/Upload.svg';
import { useDispatch, useSelector } from 'react-redux';
import { uploadFile } from '../../store/slices/files';
import { nanoid } from '@reduxjs/toolkit';
import ErrorMessage from '../UI/ErrorMessage';
const UploadFiles = () => {
  const { imagesSummary, videoSummary, filesSummary } = useSelector(
    (state) => state.files
  );
  const dispatch = useDispatch();
  const date = new Date();
  let createdAt = date.toJSON();
  const uploadedFiles = [];
  const filesType = [
    ...filesSummary.type,
    ...imagesSummary.type,
    ...videoSummary.type,
  ];
  const changeHandler = (event) => {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const { type, name, size } = files[i];
      const typeFormat = type.slice(-3);
      const nameFormat = name.slice(0, -4);
      // check if file type is supported
      if (!filesType.includes(typeFormat)) {
        return ErrorMessage(`${typeFormat} file is not supported`);
      }
      // check storage
      if (
        videoSummary.type.includes(typeFormat) &
        (videoSummary.videoSize + size > videoSummary.maxSize)
      ) {
        return ErrorMessage('No space left on video storage !');
      }
      if (
        imagesSummary.type.includes(typeFormat) &
        (imagesSummary.imagesSize + size > imagesSummary.maxSize)
      ) {
        return ErrorMessage('No space left on image storage !');
      }

      if (
        filesSummary.type.includes(typeFormat) &
        (filesSummary.filesSize + size > filesSummary.maxSize)
      ) {
        return ErrorMessage('No space left on file storage !');
      }
      // push files
      uploadedFiles.push({
        type: typeFormat,
        name: nameFormat,
        size,
        id: nanoid(10),
        createdAt,
        isStarred: false,
        starredAt: null,
        isArchived: false,
        archivedAt: null,
      });
    }

    dispatch(uploadFile({ uploadedFiles }));
  };
  return (
    <div className="upload-file">
      <input type="file" id="file" multiple onChange={changeHandler} />

      <label htmlFor="file" className="btn-2">
        <img src={Upload} alt="" />
        Upload
      </label>
    </div>
  );
};

export default UploadFiles;

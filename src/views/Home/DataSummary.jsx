import { useSelector } from 'react-redux';
import Card from '../../components/UI/Card';
import FileIcon from '../../assets/icons/File.svg';
import VideoIcon from '../../assets/icons/Video.svg';
import ImageIcon from '../../assets/icons/Image.svg';
import bytesToSize from '../../utils/bytesToSize';
import StoragePercentage from '../../utils/storagePercentage';
const DataSummary = () => {
  const { imagesSummary, filesSummary, videoSummary } = useSelector(
    (state) => state.files
  );
  const summary = [
    {
      name: 'Documents',
      icon: FileIcon,
      className: 'file',
      size: filesSummary.filesSize,
      maxSize: filesSummary.maxSize,
    },
    {
      name: 'Images',
      icon: ImageIcon,
      className: 'image',
      size: imagesSummary.imagesSize,
      maxSize: imagesSummary.maxSize,
    },
    {
      name: 'Video',
      icon: VideoIcon,
      className: 'video',
      size: videoSummary.videoSize,
      maxSize: videoSummary.maxSize,
    },
  ];
  return (
    <div className="dataSummary">
      {summary.map((el, index) => {
        return (
          <Card key={index}>
            <div className={`home-card ${el.className}`}>
              <div className="img-container">
                <img src={el.icon} alt="" />
              </div>
              <h3>{el.name}</h3>
              <div className="progress-bar">
                <div
                  style={{
                    width: `${StoragePercentage(el.size, el.maxSize)}%`,
                  }}
                ></div>
              </div>
              <div className="description">
                <span> {StoragePercentage(el.size, el.maxSize)}%</span>
                <p>
                  {bytesToSize(el.size)} of {bytesToSize(el.maxSize)}
                </p>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default DataSummary;
